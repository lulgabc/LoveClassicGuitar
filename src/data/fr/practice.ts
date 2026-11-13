import type { NoteQuestion, PracticePreset } from "../practice";

export const PRACTICE_PRESETS_FR: PracticePreset[] = [
  {
    minutes: 10,
    label: "10 min",
    sub: "Quand on a peu de temps",
    steps: [
      { id: "p10-1", title: "Respirer sur les cordes", short: "Cordes", minutes: 1, instruction: "Pince deux fois chaque corde à vide, de la 6e à la 1re. Écoute le silence entre les notes.", mascot: "On écoute d'abord, on se dépêche ensuite.", icon: "breathe" },
      { id: "p10-2", title: "Un petit échauffement", short: "Doigts", minutes: 3, instruction: "i–m huit fois, ou 1–2–3–4 sur une corde. Doucement et régulièrement.", mascot: "Lentement, les étoiles t'attendent.", icon: "fingers" },
      { id: "p10-3", title: "Le passage difficile", short: "Morceau", minutes: 4, instruction: "Travaille seulement 2 à 4 mesures. Trois fois juste, puis relie à la phrase.", mascot: "Un petit passage, c'est déjà une aventure.", icon: "music" },
      { id: "p10-4", title: "Écouter ou improviser", short: "Final", minutes: 2, instruction: "Joue le morceau en entier ou invente quatre mesures. Puis choisis une étoile.", mascot: "Merci d'avoir fait chanter la guitare.", icon: "star" },
    ],
  },
  {
    minutes: 15,
    label: "15 min",
    sub: "Le rythme conseillé",
    steps: [
      { id: "p15-1", title: "Respirer et cordes à vide", short: "Cordes", minutes: 2, instruction: "Installe-toi, respire trois fois, puis pince quatre fois chaque corde à vide.", mascot: "Les épaules descendent, les pieds sont stables.", icon: "breathe" },
      { id: "p15-2", title: "Un objectif technique", short: "Technique", minutes: 4, instruction: "Choisis i–m, la main gauche ou les nuances. Un seul objectif aujourd'hui.", mascot: "Un objectif bien choisi vaut mieux que dix objectifs.", icon: "fingers" },
      { id: "p15-3", title: "Morceau, au ralenti", short: "Morceau", minutes: 6, instruction: "Isole 2 à 4 mesures. Joue-les trois fois juste, puis ajoute la mesure d'avant.", mascot: "En cas d'erreur, regarde la carte au lieu de tout recommencer.", icon: "music" },
      { id: "p15-4", title: "Écouter ou jouer", short: "Final", minutes: 3, instruction: "Joue le morceau en entier ou écoute une pièce de la salle de concert.", mascot: "Termine avec deux secondes de silence, puis un sourire.", icon: "star" },
    ],
  },
  {
    minutes: 20,
    label: "20 min",
    sub: "Pour les jours avec de l'énergie",
    steps: [
      { id: "p20-1", title: "Respirer et cordes à vide", short: "Cordes", minutes: 3, instruction: "Quatre fois chaque corde, puis un crescendo et un diminuendo sur une note.", mascot: "Comme le soleil qui monte et descend.", icon: "breathe" },
      { id: "p20-2", title: "Technique et gammes", short: "Technique", minutes: 5, instruction: "i–m et main gauche, ou une petite gamme de do majeur. Reste lent et régulier.", mascot: "Les doigts dansent, ils ne courent pas.", icon: "fingers" },
      { id: "p20-3", title: "Morceau et musique", short: "Morceau", minutes: 8, instruction: "Travaille 2 à 4 mesures, puis joue tout. Ajoute une nuance ou une respiration.", mascot: "D'abord juste, ensuite vivant.", icon: "music" },
      { id: "p20-4", title: "Écouter et noter", short: "Final", minutes: 4, instruction: "Écoute 30 secondes de ton enregistrement ou une nouvelle pièce. Note une découverte.", mascot: "L'étoile se souviendra de ton travail.", icon: "star" },
    ],
  },
];

export const NOTE_QUESTIONS_FR: NoteQuestion[] = [
  { id: "n1", stringNumber: 1, fret: 0, answer: "E", solfege: "mi", options: ["E", "F", "G"], hint: "La 1re corde à vide est mi, la note la plus aiguë des six." },
  { id: "n2", stringNumber: 1, fret: 1, answer: "F", solfege: "fa", options: ["E", "F", "A"], hint: "Un cran plus haut que mi : la note s'appelle fa." },
  { id: "n3", stringNumber: 1, fret: 3, answer: "G", solfege: "sol", options: ["G", "B", "D"], hint: "3e case de la 1re corde : sol, comme une étoile au milieu." },
  { id: "n4", stringNumber: 2, fret: 0, answer: "B", solfege: "si", options: ["A", "B", "C"], hint: "La 2e corde à vide est si, une note douce comme un nuage." },
  { id: "n5", stringNumber: 2, fret: 1, answer: "C", solfege: "do", options: ["B", "C", "D"], hint: "Un cran au-dessus de si : do, sur la 2e corde." },
  { id: "n6", stringNumber: 2, fret: 3, answer: "D", solfege: "ré", options: ["C", "D", "E"], hint: "3e case de la 2e corde : ré." },
  { id: "n7", stringNumber: 3, fret: 0, answer: "G", solfege: "sol", options: ["E", "G", "A"], hint: "La 3e corde à vide est sol." },
  { id: "n8", stringNumber: 3, fret: 2, answer: "A", solfege: "la", options: ["A", "B", "G"], hint: "2e case de la 3e corde : la, avec l'index." },
];

export const PRACTICE_TIPS_FR = [
  "Un seul petit objectif, c'est déjà une belle séance.",
  "Fais d'abord sonner une note, puis la suivante.",
  "Si les doigts s'emmêlent, ralentis de moitié.",
  "Une erreur n'est pas une fin : regarde la petite carte.",
  "Chante le rythme avant de jouer.",
  "Les épaules descendent, les pieds restent stables.",
  "Pas envie de jouer ? Écouter une pièce compte aussi.",
  "Travaille deux mesures trois fois, plutôt que tout le morceau dix fois.",
  "Écoute le son jusqu'à ce qu'il disparaisse.",
  "Essaie de jouer plus doucement aujourd'hui.",
  "Quitte le clavier des yeux trois secondes et sens tes doigts.",
  "Donne un mini-concert de trente secondes.",
  "Si tu souris, la séance est réussie.",
  "Ne te compare pas aux prodiges : compare-toi à toi d'hier.",
  "Lentement mais juste, puis un peu plus vite.",
  "Le repos fait partie de l'entraînement.",
  "Cherche un son que tu aimes vraiment.",
  "Quel est le son le plus chantant de ta guitare ?",
  "Après une fausse note, continue : c'est la magie de la scène.",
  "Note un nouveau son découvert aujourd'hui.",
];

export const WARMUPS_FR = [
  { title: "Secoue les mains", body: "Comme pour enlever des gouttes d'eau, pendant 10 secondes." },
  { title: "Ailes de papillon", body: "Ouvre et ferme les doigts cinq fois, doucement." },
  { title: "Le pouce se promène", body: "Touche chaque doigt avec le pouce, deux fois." },
  { title: "Ascenseur des épaules", body: "Monte les épaules en inspirant, relâche en expirant. Trois fois." },
  { title: "Étirement du chat", body: "Tends les bras devant toi et étire le dos sans bloquer la respiration." },
];

export const PRACTICE_RULES_FR = [
  "Pas de douleur. Si ça pique, si ça engourdit ou si ça dure, arrête et parle à un adulte.",
  "10 à 20 minutes suffisent. On peut faire une pause.",
  "Lent d'abord, rapide ensuite. Petit bout d'abord, morceau entier ensuite.",
  "On ne corrige pas tout à la fois : un seul point, et on garde le plaisir.",
  "Avant d'enregistrer, demande l'accord de l'enfant. La vidéo peut rester privée.",
];
