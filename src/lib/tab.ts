export type MusicXmlNote = {
  start: number;
  length: number;
  pitch: number;
};

export type MusicXmlMeasure = {
  index: number;
  start: number;
  length: number;
  notes: MusicXmlNote[];
  time: { numerator: number; denominator: number };
  tempo: number;
};

export type TabNote = MusicXmlNote & {
  string: number;
  fret: number;
};

export type TabMeasure = Omit<MusicXmlMeasure, "notes"> & {
  notes: TabNote[];
};

export type TabLine = {
  startMeasure: number;
  endMeasure: number;
  measures: TabMeasure[];
};

export type TabRenderOptions = {
  compact?: boolean;
  lineLabel: string;
};

const STEP: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

const STANDARD_TUNING = [
  { string: 1, midi: 64 }, // high E
  { string: 2, midi: 59 }, // B
  { string: 3, midi: 55 }, // G
  { string: 4, midi: 50 }, // D
  { string: 5, midi: 45 }, // A
  { string: 6, midi: 40 }, // low E
];

const MAX_FRET = 19;

function numberFrom(parent: Element, selector: string, fallback = 0): number {
  const text = parent.querySelector(selector)?.textContent;
  const value = text ? Number(text) : NaN;
  return Number.isFinite(value) ? value : fallback;
}

/**
 * Parse the first MusicXML part into measures with quarter-note timing and MIDI
 * pitches. This is the shared source for both the tab and the staff views.
 */
export function parseMusicXml(xml: string): MusicXmlMeasure[] {
  if (typeof DOMParser === "undefined") return [];
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.querySelector("parsererror")) return [];
  const part = doc.querySelector("part");
  if (!part) return [];

  let divisions = 1;
  let time = { numerator: 4, denominator: 4 };
  let transpose = 0;
  let tempo = 0;
  let measureStart = 0;
  const measures: MusicXmlMeasure[] = [];
  const pendingTies = new Map<number, MusicXmlNote>();

  for (const measureEl of Array.from(part.children).filter((el) => el.tagName === "measure")) {
    let q = measureStart;
    let lastStart = measureStart;
    const notes: MusicXmlNote[] = [];
    let measureTime = { ...time };
    let measureTempo = tempo;

    for (const child of Array.from(measureEl.children)) {
      if (child.tagName === "attributes") {
        const divisionsEl = child.querySelector("divisions");
        if (divisionsEl?.textContent) divisions = Math.max(1, Number(divisionsEl.textContent) || 1);
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
        const note: MusicXmlNote = { start, length: durationQ, pitch: midi };
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
      time: measureTime,
      tempo: measureTempo,
    });
    measureStart += measureLength;
  }

  return measures;
}

type StringChoice = { string: number; fret: number };

function chooseString(pitch: number, used: Set<number>): StringChoice {
  for (const candidate of STANDARD_TUNING) {
    const fret = pitch - candidate.midi;
    if (fret >= 0 && fret <= MAX_FRET && !used.has(candidate.string)) {
      return { string: candidate.string, fret };
    }
  }

  // A chord can occasionally need more notes than strings, or a note can sit
  // outside standard tuning. Fall back to the closest playable string rather
  // than dropping the note from the tab.
  let best: StringChoice | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const candidate of STANDARD_TUNING) {
    const fret = pitch - candidate.midi;
    if (fret < 0 || fret > MAX_FRET + 5) continue;
    const distance = Math.abs(fret - 5);
    if (distance < bestDistance) {
      best = { string: candidate.string, fret };
      bestDistance = distance;
    }
  }
  if (best) return best;
  return { string: 6, fret: Math.max(0, Math.min(24, pitch - 40)) };
}

/**
 * Assign every note to a string and fret in standard tuning. Chord notes are
 * assigned from the highest pitch down so they land on different strings.
 */
export function assignTab(measures: MusicXmlMeasure[]): TabMeasure[] {
  return measures.map((measure) => {
    const groups = new Map<number, MusicXmlNote[]>();
    for (const note of measure.notes) {
      const onset = Math.round(note.start * 1000) / 1000;
      const group = groups.get(onset);
      if (group) group.push(note);
      else groups.set(onset, [note]);
    }

    const notes: TabNote[] = [];
    for (const group of groups.values()) {
      const used = new Set<number>();
      for (const note of [...group].sort((a, b) => b.pitch - a.pitch)) {
        const choice = chooseString(note.pitch, used);
        used.add(choice.string);
        notes.push({ ...note, ...choice });
      }
    }
    notes.sort((a, b) => a.start - b.start || a.string - b.string);
    return { ...measure, notes };
  });
}

export function buildTabLines(measures: TabMeasure[], perLine: number): TabLine[] {
  const lines: TabLine[] = [];
  const size = Math.max(1, perLine);
  for (let index = 0; index < measures.length; index += size) {
    const chunk = measures.slice(index, index + size);
    if (!chunk.length) continue;
    lines.push({
      startMeasure: chunk[0]!.index,
      endMeasure: chunk[chunk.length - 1]!.index,
      measures: chunk,
    });
  }
  return lines;
}

function onsetGroups(measure: TabMeasure): TabNote[][] {
  const groups = new Map<number, TabNote[]>();
  for (const note of measure.notes) {
    const onset = Math.round(note.start * 1000) / 1000;
    const group = groups.get(onset);
    if (group) group.push(note);
    else groups.set(onset, [note]);
  }
  return [...groups.values()].sort((a, b) => a[0]!.start - b[0]!.start);
}

/**
 * Render one system of guitar tab as an SVG string. The component supplies the
 * surrounding scroll container and the CSS classes, so the markup stays
 * responsive and follows the site theme.
 */
export function renderTabLineSvg(line: TabLine, options: TabRenderOptions): string {
  const compact = options.compact ?? false;
  const lineSpacing = compact ? 11 : 12;
  const top = compact ? 30 : 34;
  const left = compact ? 26 : 32;
  const right = 14;
  const bottom = 12;
  const widths = line.measures.map((measure) => {
    const onsets = onsetGroups(measure).length;
    return Math.max(compact ? 140 : 180, onsets * (compact ? 19 : 23) + (compact ? 24 : 32));
  });
  const contentWidth = widths.reduce((sum, width) => sum + width, 0);
  const width = left + contentWidth + right;
  const height = top + 5 * lineSpacing + bottom;
  const parts: string[] = [];
  const stringLabels = ["e", "B", "G", "D", "A", "E"];

  parts.push(
    `<svg class="tab-svg" viewBox="0 0 ${width} ${height}" style="width:${width}px; min-width:100%; height:auto;" role="img" aria-label="${options.lineLabel}">`,
  );

  // Six strings.
  for (let index = 0; index < 6; index += 1) {
    const y = top + index * lineSpacing;
    parts.push(
      `<line class="tab-string" x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" />`,
    );
  }

  // Bar lines and measure numbers.
  let x = left;
  line.measures.forEach((measure, index) => {
    parts.push(
      `<line class="tab-bar" x1="${x}" y1="${top}" x2="${x}" y2="${top + 5 * lineSpacing}" />`,
    );
    if (line.measures.length > 1) {
      parts.push(
        `<text class="tab-measure-number" x="${x + 2}" y="${top - 18}">${measure.index}</text>`,
      );
    }
    x += widths[index]!;
  });
  parts.push(
    `<line class="tab-bar" x1="${left + contentWidth}" y1="${top}" x2="${left + contentWidth}" y2="${top + 5 * lineSpacing}" />`,
  );
  parts.push(
    `<line class="tab-bar" x1="${left + contentWidth + 4}" y1="${top}" x2="${left + contentWidth + 4}" y2="${top + 5 * lineSpacing}" />`,
  );

  // Fret numbers, drawn on top of the strings.
  x = left;
  line.measures.forEach((measure, measureIndex) => {
    const measureWidth = widths[measureIndex]!;
    for (const note of measure.notes) {
      const ratio = Math.min(1, Math.max(0, (note.start - measure.start) / Math.max(measure.length, 0.001)));
      const noteX = x + 8 + ratio * (measureWidth - 16);
      const noteY = top + (note.string - 1) * lineSpacing;
      const boxWidth = note.fret >= 10 ? 17 : 12;
      parts.push(
        `<rect class="tab-fret-bg" x="${noteX - boxWidth / 2}" y="${noteY - 6}" width="${boxWidth}" height="12" rx="3" />`,
      );
      parts.push(
        `<text class="tab-fret" x="${noteX}" y="${noteY}" text-anchor="middle" dominant-baseline="central">${note.fret}</text>`,
      );
    }
    x += measureWidth;
  });

  // String names and TAB marker.
  stringLabels.forEach((label, index) => {
    parts.push(
      `<text class="tab-string-label" x="${left - 7}" y="${top + index * lineSpacing}" text-anchor="end" dominant-baseline="central">${label}</text>`,
    );
  });
  parts.push("</svg>");
  return parts.join("");
}
