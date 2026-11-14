export type JianpuNote = {
  start: number;
  length: number;
  pitch: number;
  intensity: number;
};

export type JianpuKeySignature = { start: number; key: number };
export type JianpuTimeSignature = { start: number; numerator: number; denominator: number };
export type JianpuTempo = { start: number; qpm: number };

export type JianpuMeasure = {
  index: number;
  start: number;
  length: number;
  notes: JianpuNote[];
  key: number;
  time: { numerator: number; denominator: number };
  tempo: number;
};

export type JianpuLine = {
  startMeasure: number;
  endMeasure: number;
  notes: JianpuNote[];
  keySignatures: JianpuKeySignature[];
  timeSignatures: JianpuTimeSignature[];
  tempos: JianpuTempo[];
};

const STEP: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** Convert a MusicXML key-signature fifths value to a tonic pitch class (0 = C). */
function fifthsToKey(fifths: number): number {
  return ((fifths * 7) % 12 + 12) % 12;
}

function numberFrom(parent: Element, selector: string, fallback = 0): number {
  const text = parent.querySelector(selector)?.textContent;
  const value = text ? Number(text) : NaN;
  return Number.isFinite(value) ? value : fallback;
}

/**
 * Parse a MusicXML part into measures with quarter-note timing and MIDI pitches.
 * The parser is deliberately small: it handles the subset used by the score
 * library (notes, rests, chords, ties, key/time signatures, tempo, transpose).
 */
export function parseMusicXml(xml: string): JianpuMeasure[] {
  if (typeof DOMParser === "undefined") return [];
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.querySelector("parsererror")) return [];
  const part = doc.querySelector("part");
  if (!part) return [];

  let divisions = 1;
  let key = 0;
  let time = { numerator: 4, denominator: 4 };
  let transpose = 0;
  let tempo = 0;
  let measureStart = 0;
  const measures: JianpuMeasure[] = [];
  const pendingTies = new Map<number, JianpuNote>();

  for (const measureEl of Array.from(part.children).filter((el) => el.tagName === "measure")) {
    let q = measureStart;
    let lastStart = measureStart;
    const notes: JianpuNote[] = [];
    let measureKey = key;
    let measureTime = { ...time };
    let measureTempo = tempo;

    for (const child of Array.from(measureEl.children)) {
      if (child.tagName === "attributes") {
        const divisionsEl = child.querySelector("divisions");
        if (divisionsEl?.textContent) divisions = Math.max(1, Number(divisionsEl.textContent) || 1);
        const fifthsEl = child.querySelector("key > fifths");
        if (fifthsEl?.textContent) key = fifthsToKey(Number(fifthsEl.textContent) || 0);
        const beatsEl = child.querySelector("time > beats");
        const beatTypeEl = child.querySelector("time > beat-type");
        if (beatsEl?.textContent && beatTypeEl?.textContent) {
          time = {
            numerator: Math.max(1, Number(beatsEl.textContent) || 4),
            denominator: Math.max(1, Number(beatTypeEl.textContent) || 4),
          };
        }
        const transposeEl = child.querySelector("transpose");
        if (transposeEl) {
          transpose =
            numberFrom(transposeEl, "chromatic", 0) + 12 * numberFrom(transposeEl, "octave-change", 0);
        }
        measureKey = key;
        measureTime = { ...time };
      } else if (child.tagName === "note") {
        if (child.querySelector("grace")) continue;
        const durationEl = child.querySelector("duration");
        const durationQ = durationEl?.textContent ? Number(durationEl.textContent) / divisions : 0;
        if (!Number.isFinite(durationQ) || durationQ <= 0) continue;
        const isChord = Boolean(child.querySelector("chord"));
        const start = isChord ? lastStart : q;
        if (!isChord) {
          lastStart = q;
          q += durationQ;
        }
        if (child.querySelector("rest")) continue;
        const pitchEl = child.querySelector("pitch");
        if (!pitchEl) continue;
        const stepName = pitchEl.querySelector("step")?.textContent?.trim() ?? "";
        const step = STEP[stepName];
        if (step === undefined) continue;
        const alter = numberFrom(pitchEl, "alter", 0);
        const octave = numberFrom(pitchEl, "octave", 4);
        const midi = (octave + 1) * 12 + step + alter + transpose;
        const tieStop =
          Boolean(child.querySelector('tie[type="stop"]')) ||
          Boolean(child.querySelector('notations tied[type="stop"]'));
        const tieStart =
          Boolean(child.querySelector('tie[type="start"]')) ||
          Boolean(child.querySelector('notations tied[type="start"]'));
        if (tieStop && pendingTies.has(midi)) {
          const previous = pendingTies.get(midi)!;
          previous.length += durationQ;
          if (tieStart) pendingTies.set(midi, previous);
          else pendingTies.delete(midi);
          continue;
        }
        const note: JianpuNote = { start, length: durationQ, pitch: midi, intensity: 0.8 };
        notes.push(note);
        if (tieStart) pendingTies.set(midi, note);
        else pendingTies.delete(midi);
      } else if (child.tagName === "backup") {
        const durationQ = numberFrom(child, "duration", 0) / divisions;
        q -= durationQ;
      } else if (child.tagName === "forward") {
        const durationQ = numberFrom(child, "duration", 0) / divisions;
        q += durationQ;
      } else if (child.tagName === "sound") {
        const value = Number(child.getAttribute("tempo"));
        if (Number.isFinite(value) && value > 0) {
          tempo = value;
          measureTempo = value;
        }
      } else if (child.tagName === "direction") {
        const sound = child.querySelector("sound");
        let value = Number(sound?.getAttribute("tempo"));
        if (!Number.isFinite(value) || value <= 0) {
          value = Number(child.querySelector("metronome > per-minute")?.textContent);
        }
        if (Number.isFinite(value) && value > 0) {
          tempo = value;
          measureTempo = value;
        }
      }
    }

    const measureLength = measureTime.numerator * (4 / measureTime.denominator);
    measures.push({
      index: measures.length + 1,
      start: measureStart,
      length: measureLength,
      notes,
      key: measureKey,
      time: measureTime,
      tempo: measureTempo,
    });
    measureStart += measureLength;
  }

  return measures;
}

/** Split measures into lines and shift each line's timing back to zero. */
export function buildJianpuLines(measures: JianpuMeasure[], perLine: number): JianpuLine[] {
  const lines: JianpuLine[] = [];
  const size = Math.max(1, perLine);
  for (let index = 0; index < measures.length; index += size) {
    const chunk = measures.slice(index, index + size);
    if (!chunk.length) continue;
    const start = chunk[0]!.start;
    const notes = chunk
      .flatMap((measure) => measure.notes)
      .map((note) => ({ ...note, start: note.start - start }));
    const keySignatures: JianpuKeySignature[] = [{ start: 0, key: chunk[0]!.key }];
    const timeSignatures: JianpuTimeSignature[] = [{ start: 0, ...chunk[0]!.time }];
    const tempos: JianpuTempo[] = chunk[0]!.tempo ? [{ start: 0, qpm: chunk[0]!.tempo }] : [];
    let previousKey = chunk[0]!.key;
    let previousTime = chunk[0]!.time;
    let previousTempo = chunk[0]!.tempo;
    for (const measure of chunk.slice(1)) {
      if (measure.key !== previousKey) {
        keySignatures.push({ start: measure.start - start, key: measure.key });
        previousKey = measure.key;
      }
      if (
        measure.time.numerator !== previousTime.numerator ||
        measure.time.denominator !== previousTime.denominator
      ) {
        timeSignatures.push({ start: measure.start - start, ...measure.time });
        previousTime = measure.time;
      }
      if (measure.tempo && measure.tempo !== previousTempo) {
        tempos.push({ start: measure.start - start, qpm: measure.tempo });
        previousTempo = measure.tempo;
      }
    }
    lines.push({
      startMeasure: chunk[0]!.index,
      endMeasure: chunk[chunk.length - 1]!.index,
      notes,
      keySignatures,
      timeSignatures,
      tempos,
    });
  }
  return lines;
}
