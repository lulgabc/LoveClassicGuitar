type AudioContextClass = typeof AudioContext;

let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioContextCtor: AudioContextClass | undefined =
    window.AudioContext ?? (window as Window & { webkitAudioContext?: AudioContextClass }).webkitAudioContext;
  if (!AudioContextCtor) return null;
  if (!ctx) ctx = new AudioContextCtor();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function withContext(fn: (audio: AudioContext) => void): void {
  const audio = getContext();
  if (!audio) return;
  fn(audio);
}

export function playTone(
  frequency: number,
  duration = 0.7,
  options: { type?: OscillatorType; volume?: number; delay?: number } = {},
): void {
  const { type = "sine", volume = 0.09, delay = 0 } = options;
  withContext((audio) => {
    const start = audio.currentTime + delay;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.05);
  });
}

/** A soft plucked-string-like reference tone. */
export function playPluck(frequency: number, volume = 0.12): void {
  withContext((audio) => {
    const start = audio.currentTime;
    const master = audio.createGain();
    master.gain.setValueAtTime(0.0001, start);
    master.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    master.gain.exponentialRampToValueAtTime(0.0001, start + 2.2);

    const filter = audio.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(Math.max(1200, frequency * 8), start);
    filter.frequency.exponentialRampToValueAtTime(Math.max(500, frequency * 2.8), start + 1.8);

    const fundamentals: { ratio: number; gain: number; type: OscillatorType }[] = [
      { ratio: 1, gain: 0.7, type: "triangle" },
      { ratio: 2.01, gain: 0.2, type: "sine" },
      { ratio: 3.02, gain: 0.08, type: "sine" },
    ];

    for (const partial of fundamentals) {
      const oscillator = audio.createOscillator();
      const partialGain = audio.createGain();
      oscillator.type = partial.type;
      oscillator.frequency.setValueAtTime(frequency * partial.ratio, start);
      partialGain.gain.setValueAtTime(partial.gain, start);
      oscillator.connect(partialGain);
      partialGain.connect(filter);
      oscillator.start(start);
      oscillator.stop(start + 2.4);
    }

    filter.connect(master);
    master.connect(audio.destination);
  });
}

/** A light metronome click. Accent adds a brighter downbeat. */
export function playClick(accent = false, volume = 0.08): void {
  withContext((audio) => {
    const start = audio.currentTime;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(accent ? 1480 : 950, start);
    oscillator.frequency.exponentialRampToValueAtTime(accent ? 900 : 620, start + 0.045);
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.07);
    oscillator.connect(gain);
    gain.connect(audio.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.08);
  });
}

/** Three gentle notes for a finished practice session or a game win. */
export function playChime(): void {
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((frequency, index) => {
    playTone(frequency, 0.55, { type: "triangle", volume: 0.055, delay: index * 0.12 });
  });
}

/** Two notes for comparing high/low. */
export function playPair(first: number, second: number, gap = 0.65): void {
  playTone(first, 0.65, { type: "sine", volume: 0.075 });
  playTone(second, 0.65, { type: "sine", volume: 0.075, delay: gap });
}
