export type PracticeSession = {
  date: string;
  minutes: number;
  stars: number;
  at: number;
};

export type ProgressState = {
  version: 1;
  name: string;
  quests: string[];
  sessions: PracticeSession[];
};

const STORAGE_KEY = "lcg.progress.v1";

export function emptyProgress(): ProgressState {
  return { version: 1, name: "", quests: [], sessions: [] };
}

export function readProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<ProgressState> | null;
    if (!parsed || typeof parsed !== "object") return emptyProgress();
    return {
      version: 1,
      name: typeof parsed.name === "string" ? parsed.name.slice(0, 24) : "",
      quests: Array.isArray(parsed.quests)
        ? parsed.quests.filter((id): id is string => typeof id === "string").slice(0, 100)
        : [],
      sessions: Array.isArray(parsed.sessions)
        ? parsed.sessions
            .filter(
              (session): session is PracticeSession =>
                !!session &&
                typeof session === "object" &&
                typeof (session as PracticeSession).date === "string" &&
                typeof (session as PracticeSession).minutes === "number",
            )
            .slice(-120)
        : [],
    };
  } catch {
    return emptyProgress();
  }
}

export function writeProgress(next: ProgressState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("lcg:progress-change", { detail: next }));
  } catch {
    // Private browsing or storage full: keep the page usable without persistence.
  }
}

export function updateProgress(updater: (current: ProgressState) => ProgressState): ProgressState {
  const next = updater(readProgress());
  writeProgress(next);
  return next;
}

export function setQuestDone(questId: string, done: boolean): ProgressState {
  return updateProgress((current) => {
    const quests = new Set(current.quests);
    if (done) quests.add(questId);
    else quests.delete(questId);
    return { ...current, quests: [...quests] };
  });
}

export function completedQuestCount(): number {
  return readProgress().quests.length;
}

export function completionPercent(total: number): number {
  if (total <= 0) return 0;
  return Math.round((Math.min(completedQuestCount(), total) / total) * 100);
}

export function saveName(name: string): ProgressState {
  return updateProgress((current) => ({ ...current, name: name.trim().slice(0, 24) }));
}

export function addPracticeSession(minutes: number): ProgressState {
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return updateProgress((current) => {
    const session: PracticeSession = {
      date,
      minutes: Math.max(1, Math.min(180, Math.round(minutes))),
      stars: 1,
      at: Date.now(),
    };
    return { ...current, sessions: [...current.sessions, session].slice(-120) };
  });
}

export function practiceStars(): number {
  return readProgress().sessions.reduce((sum, session) => sum + (session.stars || 1), 0);
}

export function sessionDates(): string[] {
  return readProgress().sessions.map((session) => session.date);
}

export function resetProgress(): ProgressState {
  const fresh = emptyProgress();
  writeProgress(fresh);
  return fresh;
}

export function totalPracticeMinutes(): number {
  return readProgress().sessions.reduce((sum, session) => sum + (session.minutes || 0), 0);
}
