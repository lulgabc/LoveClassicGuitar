import { REPERTOIRE, type RepertoireEra, type RepertoirePiece } from "./repertoire";
import { SCORE_PAGE_URLS } from "./score-pages";
import { SCORE_PREVIEWS } from "./score-previews";

export type ScoreLevel = 1 | 2 | 3 | 4 | 5;
export type ScoreFocus = "right" | "left" | "reading" | "rhythm" | "tone" | "phrasing" | "ensemble";
export type ScoreSource = "IMSLP" | "Library";

export type ScoreEntry = {
  id: string;
  title: string;
  titleZh?: string;
  composer: string;
  era: RepertoireEra;
  level: ScoreLevel;
  focus: ScoreFocus;
  free: boolean;
  source: ScoreSource;
  url: string;
  previewUrl?: string;
  tipZh: string;
  tipFr: string;
};

const LEVEL_1 = new Set([
  "Pavana I",
  "A Toy",
  "Packington's Pound",
  "Greensleeves",
  "Españoleta",
  "Etude Op. 60 No. 1",
  "Etude Op. 60 No. 2",
  "Andante Op. 241",
  "Prelude Op. 114",
  "Etude No. 1",
  "Sonatina Op. 168 No. 1",
  "Adelita",
  "Ave Maria (arr.)",
  "The Parting Glass",
  "Romance de Amor",
  "Lágrima",
  "El Noi de la Mare",
]);

const LEVEL_5 = new Set([
  "Chaconne BWV 1004",
  "Grand Solo Op. 14",
  "Variations on a Theme of Mozart",
  "Concerto No. 1, Op. 30",
  "La Catedral",
  "Capricho Árabe",
  "Asturias",
  "Recuerdos de la Alhambra",
  "Sevilla",
  "Torre Bermeja",
  "Rumores de la Caleta",
  "Danza Mora",
  "Alborada",
  "Homenaje",
  "Danza del Molinero",
  "Campanas del Alba",
  "Zapateado",
  "Soleares",
  "Garrotín",
  "El Vito",
  "Sonatina Meridional",
  "Theme, Variations and Finale",
  "Bachianas Brasileiras No. 5",
  "Etude No. 11",
  "La Source du Lyson",
  "Reverie Op. 19",
  "Passacaglia",
  "Fantasie",
  "Toccata Arpeggiata",
  "Jacaras",
  "Concierto de Aranjuez, Adagio",
  "Invocación y Danza",
  "Koyunbaba",
  "Usher Waltz",
  "Tango en Skai",
  "Farewell",
  "Jongo",
  "Água e Vinho",
  "Sunburst",
  "Samba em Prelúdio",
  "Lamentos",
  "Suite Sudamericana",
  "La Espiral Eterna",
]);

const MODERN_COMPOSERS = new Set([
  "Agustín Barrios",
  "Astor Piazzolla",
  "Leo Brouwer",
  "Roland Dyens",
  "Carlo Domeniconi",
  "Nikita Koshkin",
  "Toru Takemitsu",
  "Benjamin Britten",
  "Joaquín Rodrigo",
  "Federico Moreno Torroba",
  "Joaquín Turina",
  "Eduardo Sainz de la Maza",
  "Regino Sainz de la Maza",
  "Manuel Ponce",
  "Heitor Villa-Lobos",
  "Alberto Ginastera",
  "Carlos Guastavino",
  "Jorge Cardoso",
  "Dilermando Reis",
  "Garoto",
  "Baden Powell",
  "Luiz Bonfá",
  "Antonio Lauro",
  "Manuel de Falla",
  "Aureo Puerta Carreño",
  "Stanley Myers",
  "Sérgio Assad",
  "Andrew York",
  "Paulo Bellinati",
  "Egberto Gismonti",
]);

const TIPS: Record<ScoreFocus, { zh: string; fr: string }> = {
  right: {
    zh: "先慢速，听每个音是否均匀；右手放松，不要越弹越紧。",
    fr: "Lentement, écoute l'égalité des sons ; garde la main droite souple.",
  },
  left: {
    zh: "手指靠近品丝，保留指不要抬太高；先找最省力的按法。",
    fr: "Pose les doigts près de la frette et garde les doigts communs. Cherche le geste le plus économique.",
  },
  reading: {
    zh: "先唱节奏，再找音；一次只读一小节，不要从头看到尾。",
    fr: "Lis le rythme avant de chercher les notes. Travaille une mesure à la fois.",
  },
  rhythm: {
    zh: "先用脚打拍，再上琴；重拍要清楚，但不要砸弦。",
    fr: "Tape le rythme avec le pied avant de jouer. Garde le temps fort clair sans frapper.",
  },
  tone: {
    zh: "比较靠弦和不靠弦，找一个温暖、圆润的声音；听音尾怎样消失。",
    fr: "Compare le jeu appuyé et le jeu libre. Cherche un son chaud et écoute comment il s'éteint.",
  },
  phrasing: {
    zh: "找到换气的地方，句尾稍微收一点；像唱歌一样，不要每个音都一样重。",
    fr: "Trouve les respirations et allège la fin des phrases. Chante la ligne plutôt que de jouer chaque note pareil.",
  },
  ensemble: {
    zh: "先数好空拍，再听另一个声部；不要只盯着自己的手。",
    fr: "Compte les silences et écoute l'autre voix. Ne regarde pas seulement tes doigts.",
  },
};

function scoreLevel(piece: RepertoirePiece): ScoreLevel {
  if (piece.level === "beginner") return LEVEL_1.has(piece.title) ? 1 : 2;
  if (piece.level === "intermediate") return 3;
  return LEVEL_5.has(piece.title) ? 5 : 4;
}

function scoreFocus(piece: RepertoirePiece): ScoreFocus {
  const title = piece.title.toLowerCase();
  if (title.includes("duo")) return "ensemble";
  if (
    title.includes("etude") ||
    title.includes("study") ||
    title.includes("caprice") ||
    title.includes("120 right-hand")
  ) {
    return "right";
  }
  if (title.includes("prelude") || title.includes("fantas")) return "tone";
  if (
    title.includes("waltz") ||
    title.includes("vals") ||
    title.includes("dance") ||
    title.includes("danza") ||
    title.includes("milonga") ||
    title.includes("tango") ||
    title.includes("garrot") ||
    title.includes("soleares") ||
    title.includes("zapateado") ||
    title.includes("canarios") ||
    title.includes("tarantela")
  ) {
    return "rhythm";
  }
  if (
    title.includes("song") ||
    title.includes("canción") ||
    title.includes("cancion") ||
    title.includes("romance") ||
    title.includes("lágrima") ||
    title.includes("lagrima") ||
    title.includes("adelita") ||
    title.includes("julia florida") ||
    title.includes("el noi") ||
    title.includes("parting glass") ||
    title.includes("estrellita")
  ) {
    return "phrasing";
  }
  return "reading";
}

function scoreUrl(piece: RepertoirePiece, modern: boolean): string {
  const query = encodeURIComponent(`${piece.title} ${piece.composer}`);
  if (modern) return `https://search.worldcat.org/search?q=${query}`;
  return SCORE_PAGE_URLS[piece.id] ?? `https://imslp.org/index.php?title=Special:Search&search=${query}`;
}

export const SCORES: ScoreEntry[] = REPERTOIRE.map((piece) => {
  const modern = MODERN_COMPOSERS.has(piece.composer);
  const focus = scoreFocus(piece);
  return {
    id: `score-${piece.id}`,
    title: piece.title,
    titleZh: piece.titleZh,
    composer: piece.composer,
    era: piece.era,
    level: scoreLevel(piece),
    focus,
    free: !modern,
    source: modern ? "Library" : "IMSLP",
    url: scoreUrl(piece, modern),
    previewUrl: SCORE_PREVIEWS[piece.id],
    tipZh: TIPS[focus].zh,
    tipFr: TIPS[focus].fr,
  };
});

export const SCORE_LEVELS: { level: ScoreLevel; count: number }[] = [1, 2, 3, 4, 5].map((level) => ({
  level: level as ScoreLevel,
  count: SCORES.filter((score) => score.level === level).length,
}));
