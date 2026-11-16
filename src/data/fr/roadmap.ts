import type { Stage } from "../roadmap";

export const STAGES_FR: Stage[] = [
  {
    id: "stage-0",
    n: 0,
    title: "Préparation",
    subtitle: "Faire connaissance avec la guitare",
    badge: "Apprentie étoile",
    weeks: "1–2 semaines",
    color: "violet",
    level: "Débutant · semaine 1",
    bigIdea: "La guitare n'est pas une machine à examen : c'est une amie qui va chanter avec toi.",
    description: "On découvre l'instrument, on s'installe bien, on apprend les six cordes et on accorde avec un adulte.",
    quests: [
      { id: "q0-1", title: "Donne un nom à ta guitare", task: "Regarde sa couleur, écoute son son, puis trouve la tête, la rosace et le chevalet.", minutes: 5, tip: "Tu peux dessiner une petite fiche avec son nom et sa couleur." },
      { id: "q0-2", title: "Trouve ta position confortable", task: "Pied gauche sur le repose-pied, guitare contre le buste, tête du manche vers le haut, épaules relâchées.", minutes: 3 },
      { id: "q0-3", title: "Apprends les six cordes", task: "De la plus épaisse à la plus fine : E–A–D–G–B–E, puis dans l'autre sens.", minutes: 3 },
      { id: "q0-4", title: "Rencontre p, i, m", task: "p = pouce, i = index, m = majeur. Pince une corde à vide avec chaque doigt.", minutes: 5 },
      { id: "q0-5", title: "Accorde avec un adulte", task: "Écoute les six notes justes et regarde comment on tourne les mécaniques doucement.", minutes: 5 },
    ],
    pieces: [
      { title: "Mon premier son", note: "Pince chaque corde à vide quatre fois, sans appuyer." },
      { title: "La chanson des six cordes", note: "Dis les noms des cordes en rythme." },
    ],
    watch: ["t-position-short", "t-kids-posture", "t-first-exercise"],
    parentTip: "Ne corrigez pas tout à la fois. Choisissez un seul point aujourd'hui, par exemple la tête de la guitare.",
    checkpoint: "Je connais les six cordes, je trouve ma position et je pince chaque corde à vide.",
  },
  {
    id: "stage-1",
    n: 1,
    title: "Les étoiles à vide",
    subtitle: "Pas besoin d'appuyer pour commencer",
    badge: "Petite magicienne des cordes",
    weeks: "3–4 semaines",
    color: "sky",
    level: "Débutant · semaines 2–5",
    bigIdea: "La musique commence par un seul son. Soigne le premier, puis le suivant.",
    description: "On pince les cordes à vide, on trouve une pulsation régulière et on découvre les premières durées.",
    quests: [
      { id: "q1-1", title: "Respirer sur les cordes", task: "De la 6e à la 1re corde, pince quatre fois chaque corde. Écoute le son jusqu'au silence.", minutes: 5 },
      { id: "q1-2", title: "i–m, les doigts qui alternent", task: "Sur la 1re corde, joue i–m–i–m huit fois. Puis change de corde.", minutes: 5 },
      { id: "q1-3", title: "Le pouce éléphant", task: "Avec p, joue quatre fois la 6e corde, puis la 5e. Le son doit être stable.", minutes: 3 },
      { id: "q1-4", title: "Le métronome à 60", task: "Une note par battement. Compte 1–2–3–4 à voix haute, puis joue.", minutes: 5 },
      { id: "q1-5", title: "Ronde, blanche, noire", task: "Tape dans les mains : ronde 4 temps, blanche 2 temps, noire 1 temps.", minutes: 5 },
      { id: "q1-6", title: "Joue « L'étoile à vide »", task: "Pince 6–3–2–1, puis 1–2–3–6. Termine sur une note tenue.", minutes: 8, tip: "Enregistre 20 secondes pour écouter ton progrès plus tard." },
    ],
    pieces: [
      { title: "L'étoile à vide", note: "Quatre petites mesures avec les cordes 6, 3, 2 et 1." },
      { title: "La valse des étoiles", note: "La même idée en trois temps." },
      { title: "Mon improvisation à vide", note: "Quatre notes, un début et une fin." },
    ],
    watch: ["t-first-exercise", "t-basics", "t-technique-routine"],
    parentTip: "Mettez le plaisir avant la perfection. Si une note est fausse, demandez d'abord « qu'as-tu entendu ? ».",
    checkpoint: "Je peux alterner i–m, suivre 60 BPM pendant huit temps et jouer « L'étoile à vide ».",
  },
  {
    id: "stage-2",
    n: 2,
    title: "Détective de la 1re position",
    subtitle: "La main gauche entre en scène",
    badge: "Détective des premières notes",
    weeks: "5–6 semaines",
    color: "mint",
    level: "Débutant · semaines 6–11",
    bigIdea: "Chaque note a une adresse. On peut la trouver, la nommer et la retrouver.",
    description: "On découvre E, F, G, B, C et D, on lit une tablature et on joue « Ode à la joie ».",
    quests: [
      { id: "q2-1", title: "Les quatre doigts détectives", task: "1 = index, 2 = majeur, 3 = annulaire, 4 = auriculaire. Place le 1 juste derrière la 1re frette.", minutes: 4 },
      { id: "q2-2", title: "E–F–G sur la 1re corde", task: "Corde 1 : à vide E, case 1 F, case 3 G. Joue chaque note quatre fois.", minutes: 8 },
      { id: "q2-3", title: "B–C–D sur la 2e corde", task: "Corde 2 : à vide B, case 1 C, case 3 D. Écoute si le son est clair.", minutes: 8 },
      { id: "q2-4", title: "G–A sur la 3e corde", task: "Corde 3 : à vide G, case 2 A. Joue G, A, G, A.", minutes: 6 },
      { id: "q2-5", title: "Lire la tablature", task: "Six lignes = six cordes, chiffre = case, 0 = corde à vide. Trouve la corde 2 case 1.", minutes: 5 },
      { id: "q2-6", title: "Jouer « Ode à la joie »", task: "Commence par la première phrase, puis relie toute la mélodie lentement.", minutes: 10 },
      { id: "q2-7", title: "Invente une mélodie de quatre notes", task: "Choisis quatre notes et donne un nom à ta petite chanson.", minutes: 8 },
    ],
    pieces: [
      { title: "Ode à la joie", note: "Mélodie de Beethoven, en version très simple." },
      { title: "Le petit escalier de lune", note: "E–F–G ou B–C–D, en montant et en descendant." },
      { title: "Ma chanson de quatre notes", note: "Une création personnelle." },
    ],
    watch: ["t-first-notes", "t-tab-music", "t-ode-tutorial", "t-ode-duet"],
    parentTip: "Un peu de fatigue dans les doigts est possible, mais la douleur qui dure n'est pas normale. Faites des pauses.",
    checkpoint: "Je trouve E, F, G, B, C et D sur les trois premières cordes et je joue « Ode à la joie ».",
  },
  {
    id: "stage-3",
    n: 3,
    title: "Le petit orchestre",
    subtitle: "Le pouce fait la basse, les doigts chantent",
    badge: "Chef du petit orchestre",
    weeks: "5–6 semaines",
    color: "pink",
    level: "Débutant + · semaines 12–17",
    bigIdea: "Une seule guitare peut déjà ressembler à un petit orchestre.",
    description: "La basse avance avec p, la mélodie chante avec i et m. On apprend aussi à continuer après une fausse note.",
    quests: [
      { id: "q3-1", title: "Le pouce d'abord", task: "p joue la 6e corde, i joue la 1re. Alterne huit fois, sans presser.", minutes: 6 },
      { id: "q3-2", title: "La cascade p–i–m", task: "Joue p–i–m lentement, en cherchant un son régulier.", minutes: 6 },
      { id: "q3-3", title: "Basse et étoile", task: "Une basse avec p, puis une note avec i ou m. La basse soutient sans couvrir.", minutes: 8 },
      { id: "q3-4", title: "Une fête à trois temps", task: "Compte 1–2–3 et joue basse–accord–accord.", minutes: 8 },
      { id: "q3-5", title: "Un petit morceau de Giuliani", task: "Apprends huit mesures d'« Allegro en la mineur » très lentement.", minutes: 10 },
      { id: "q3-6", title: "Le défi sans retour", task: "Joue huit mesures à 60–72 BPM sans t'arrêter, même après une erreur.", minutes: 6 },
      { id: "q3-7", title: "Un mini-concert de 30 secondes", task: "Joue devant une personne : entrée, morceau, petit salut.", minutes: 8 },
    ],
    pieces: [
      { title: "La valse des étoiles", note: "Basse et petits accords à trois temps." },
      { title: "Allegro en la mineur", note: "Un court morceau de Giuliani." },
      { title: "Mon tapis de basse", note: "Invente deux basses pour une mélodie." },
    ],
    watch: ["t-rest-free", "t-right-hand", "t-left-hand", "t-5-pieces"],
    parentTip: "Quand les deux mains travaillent ensemble, ralentir est normal. Séparez parfois les mains avant de les réunir.",
    checkpoint: "Je peux faire travailler p et i/m ensemble et jouer huit mesures sans m'arrêter.",
  },
  {
    id: "stage-4",
    n: 4,
    title: "Des phrases qui chantent",
    subtitle: "Donner de la couleur et du souffle",
    badge: "Interprète qui chante",
    weeks: "6–8 semaines",
    color: "sun",
    level: "Intermédiaire · semaines 18–25",
    bigIdea: "Jouer les bonnes notes n'est que le début. La musique commence quand on a quelque chose à dire.",
    description: "On travaille les nuances, la respiration, le timbre, la mémoire et l'écoute de soi.",
    quests: [
      { id: "q4-1", title: "Le jeu de l'écho", task: "Joue la même corde forte, puis doucement. Fais deviner à quel moment le son est loin.", minutes: 5 },
      { id: "q4-2", title: "Respirer toutes les quatre mesures", task: "Découpe un petit morceau en phrases. Ralentis à la fin de chaque phrase.", minutes: 6 },
      { id: "q4-3", title: "Timbre : près du chevalet ou de la rosace", task: "Joue le même son à deux endroits. Lequel est plus clair ? Lequel est plus rond ?", minutes: 6 },
      { id: "q4-4", title: "Un vrai morceau", task: "Choisis « Menuet en sol » ou une étude de Sor et travaille section par section.", minutes: 12 },
      { id: "q4-5", title: "Mémoriser 16 mesures", task: "Apprends la mélodie sans partition, d'abord en chantant, puis avec les doigts.", minutes: 10 },
      { id: "q4-6", title: "Le détective du son", task: "Écoute un enregistrement de toi. Trouve une chose que tu aimes et une chose à améliorer.", minutes: 8 },
      { id: "q4-7", title: "Jouer et saluer", task: "Joue devant ta famille. Regarde ton public, termine, garde deux secondes, puis salue.", minutes: 8 },
    ],
    pieces: [
      { title: "Menuet en sol", note: "La première partie de Petzold suffit." },
      { title: "Étude op. 31 n° 1 de Sor", note: "Courte, claire et très musicale." },
      { title: "Étude op. 60 n° 1 de Sor", note: "Une prochaine étape ou une écoute." },
    ],
    watch: ["t-minuet", "t-sor-31", "t-sor-60", "t-20-min"],
    parentTip: "Dites moins « tu t'es trompé » et plus « j'aimerais réentendre cette phrase ». Une remarque précise vaut mieux qu'un « bravo » vague.",
    checkpoint: "Je joue un morceau de 16 mesures par cœur, avec au moins deux nuances et un timbre choisi.",
  },
  {
    id: "stage-5",
    n: 5,
    title: "Scène sous les étoiles",
    subtitle: "Offrir un petit concert",
    badge: "Étoile de scène",
    weeks: "6–8 semaines",
    color: "coral",
    level: "Petite scène · semaines 26–34",
    bigIdea: "Un concert ne sert pas à prouver qu'on est le meilleur. Il sert à partager ce qu'on aime.",
    description: "Deux morceaux, une affiche, trois répétitions et un vrai petit concert pour la famille.",
    quests: [
      { id: "q5-1", title: "Choisir deux morceaux", task: "Un morceau « rassurant » et un morceau « défi », avec une raison pour chacun.", minutes: 6 },
      { id: "q5-2", title: "Créer une affiche", task: "Écris le titre du concert, la date et les deux morceaux. Dessine Momo ou Capi.", minutes: 15 },
      { id: "q5-3", title: "Faire trois répétitions", task: "Entrer, s'installer, jouer, garder deux secondes, saluer. Sans arrêter.", minutes: 12 },
      { id: "q5-4", title: "S'enregistrer une fois", task: "Filme ou enregistre le petit concert, puis regarde ce que tu veux garder.", minutes: 10, tip: "On garde la vidéo pour la famille si l'enfant est d'accord." },
      { id: "q5-5", title: "Écouter un guitariste", task: "Écoute une version de ton morceau et vole une idée pour le rendre plus beau.", minutes: 8 },
      { id: "q5-6", title: "Donner le concert", task: "Joue devant ta famille ou tes amis. Après, on célèbre le courage, pas seulement les notes justes.", minutes: 20 },
    ],
    pieces: [
      { title: "Mon morceau rassurant", note: "Celui que tu connais déjà très bien." },
      { title: "Mon morceau défi", note: "Celui qui te demande un petit effort." },
      { title: "Le rappel des étoiles", note: "Quinze secondes de musique pour le plaisir." },
    ],
    watch: ["t-easy-volume", "t-7-pieces"],
    parentTip: "Un public de deux personnes et une peluche suffit. Ce qui compte, c'est le cycle : préparer, partager, être vu.",
    checkpoint: "Je joue deux morceaux complets, je fais une répétition et je partage un petit concert.",
  },
];

export const TOTAL_QUESTS_FR = STAGES_FR.reduce((sum, stage) => sum + stage.quests.length, 0);


export type WeeklyBlockFr = {
  day: string;
  title: string;
  body: string;
  color: "violet" | "sky" | "pink" | "mint" | "sun";
};

export const WEEKLY_RHYTHM_FR: WeeklyBlockFr[] = [
  { day: "Lun", title: "Démarrage doux", body: "5 min de cordes à vide + 1 min d'écoute. Juste retrouver le contact.", color: "violet" },
  { day: "Mar", title: "Petit défi technique", body: "10 min : alternance i–m ou pose des doigts, très lentement.", color: "pink" },
  { day: "Mer", title: "Le repos compte aussi", body: "Écoute une pièce et fredonne la mélodie, sans toucher la guitare.", color: "sky" },
  { day: "Jeu", title: "Le temps du morceau", body: "10–12 min : travaille seulement les 2 à 4 mesures les plus difficiles.", color: "mint" },
  { day: "Ven", title: "Jouer pour le plaisir", body: "Improvisation de 4 mesures, nouvelle fin, ou concert pour une peluche.", color: "pink" },
  { day: "Sam", title: "Mini-concert", body: "Joue une pièce entière à la famille : début, fin et petit salut.", color: "sun" },
  { day: "Dim", title: "Regarder les étoiles", body: "Observe ce qui a été fait cette semaine et choisis un petit objectif pour la suivante.", color: "mint" },
];

export const HOW_FR = [
  {
    icon: "compass" as const,
    title: "Une seule étape à la fois",
    body: "Regarde seulement l'étape du moment. Si elle n'est pas terminée, ce n'est pas grave : chaque mission est un petit jeu à refaire.",
  },
  {
    icon: "clock" as const,
    title: "Quinze minutes, puis on s'arrête",
    body: "Un temps court et concentré vaut mieux qu'une longue séance forcée. Si l'enfant rit encore à la fin, c'est parfait.",
  },
  {
    icon: "heart" as const,
    title: "Répéter et reculer, c'est permis",
    body: "Une pièce aimée peut rester un mois. Oublier une note apprise avant-hier est normal. Revenir au simple n'est pas un échec.",
  },
  {
    icon: "users" as const,
    title: "Laisser le professeur ajuster",
    body: "Chaque main, chaque guitare et chaque corps sont différents. Le parcours donne la direction ; le professeur règle les détails.",
  },
];

export const PRINCIPLES_FR = [
  {
    title: "Court et concentré plutôt que long et fatigué",
    body: "À 7 ans, l'attention dure souvent 10 à 15 minutes. Découpe le travail en petits blocs de 3 à 5 minutes, avec des pauses.",
  },
  {
    title: "Écouter d'abord, jouer ensuite",
    body: "Écoute la mélodie, chante le rythme, puis prends la guitare. Quand l'oreille sait où aller, les doigts se perdent moins.",
  },
  {
    title: "L'erreur est un petit chemin sur la carte",
    body: "Se tromper indique simplement où ralentir. Isole 2 à 4 mesures au lieu de tout reprendre depuis le début.",
  },
  {
    title: "Se comparer à soi d'hier",
    body: "Ni aux camarades, ni aux enfants prodiges des vidéos. Une seule question : est-ce que j'entends un peu mieux qu'hier ?",
  },
  {
    title: "Faire sortir la musique du studio",
    body: "Un concert, une vidéo, un dessin qui raconte la pièce, un petit récital pour la famille. La musique fait partie de la vie.",
  },
];

export const MILESTONES_FR = [
  { when: "1er mois", what: "Tenir la guitare confortablement, pincer les cordes à vide, compter à 60 BPM et connaître le nom des six cordes." },
  { when: "2e–3e mois", what: "Trouver quelques notes sur les trois premières cordes et jouer une courte mélodie comme « Ode à la joie »." },
  { when: "4e–6e mois", what: "Partager le travail entre le pouce et les doigts, jouer 8 à 16 mesures et oser jouer devant un petit public." },
  { when: "7e–9e mois", what: "Jouer par cœur avec des nuances, entendre la mélodie et la basse, et offrir un petit concert de 2 à 3 minutes." },
];

export const WATCH_TITLES_FR: Record<string, string> = {
  "t-position-short": "La posture de base en 1 minute",
  "t-kids-posture": "La posture pour les enfants",
  "t-first-exercise": "Le premier échauffement des doigts",
  "t-basics": "Les bases de la technique",
  "t-technique-routine": "Une routine technique de débutant",
  "t-first-notes": "Les premières notes E, B, G et deux études",
  "t-tab-music": "Tablature ou lecture musicale ?",
  "t-ode-tutorial": "Ode à la joie, version facile",
  "t-ode-duet": "Ode à la joie, duo à jouer ensemble",
  "t-rest-free": "Apoyando ou tirando ?",
  "t-right-hand": "La main droite : position et gestes",
  "t-left-hand": "La main gauche : position et gestes",
  "t-5-pieces": "Cinq pièces faciles à essayer",
  "t-minuet": "Menuet en sol, première partie",
  "t-sor-31": "Étude de Sor op. 31 n° 1",
  "t-sor-60": "Étude de Sor op. 60 n° 1",
  "t-20-min": "À quoi ressemble une bonne séance de 20 minutes ?",
  "t-easy-volume": "Un recueil de pièces faciles, en entier",
  "t-7-pieces": "Sept pièces faciles avec partitions",
};
