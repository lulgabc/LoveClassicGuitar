export type FrResource = {
  id: string;
  name: string;
  url: string;
  kind: "Cours" | "YouTube" | "Site" | "Partitions" | "Examens" | "Écoute" | "Chinois";
  price: "Gratuit" | "Gratuit + payant" | "Payant";
  lang: "Anglais" | "Français" | "Chinois" | "Multilingue";
  level: string;
  description: string;
  tags: string[];
  featured?: boolean;
  note?: string;
};

export const RESOURCES_FR: FrResource[] = [
  { id: "ticg-method", name: "This is Classical Guitar · Méthode gratuite", url: "https://www.thisisclassicalguitar.com/free-classical-guitar-method-book-pdf/", kind: "Cours", price: "Gratuit", lang: "Anglais", level: "Débutant → avancé", description: "Une méthode gratuite avec PDF, vidéos et pièces. Une bonne colonne vertébrale pour progresser.", tags: ["Méthode", "PDF", "Vidéos"], featured: true },
  { id: "cgs-start", name: "Classical Guitar Shed · Commencer ici", url: "https://classicalguitarshed.com/start/", kind: "Cours", price: "Gratuit + payant", lang: "Anglais", level: "Débutant", description: "Des leçons très claires et des routines de 15–20 minutes pour les débutants.", tags: ["Routine", "Vidéos", "Parents"], featured: true },
  { id: "cgc", name: "Classical Guitar Corner", url: "https://www.classicalguitarcorner.com/", kind: "Cours", price: "Gratuit + payant", lang: "Anglais", level: "Débutant → avancé", description: "Cours, podcasts et articles pour une approche structurée de la guitare classique.", tags: ["Cours", "Podcast", "Structure"] },
  { id: "tatyana", name: "Tatyana Ryzhkova", url: "https://www.youtube.com/@tatyanaryzhkova", kind: "YouTube", price: "Gratuit", lang: "Anglais", level: "Découverte", description: "Concerts, conseils de pratique et morceaux filmés avec douceur.", tags: ["Concerts", "Pratique"] },
  { id: "tonebase", name: "tonebase Guitar", url: "https://www.tonebase.co/guitar", kind: "Cours", price: "Gratuit + payant", lang: "Anglais", level: "Intermédiaire → avancé", description: "Des masterclasses avec de grands guitaristes. Certaines vidéos sont gratuites.", tags: ["Masterclass", "Guitaristes"] },
  { id: "kids-dojo", name: "Kids Guitar Dojo", url: "https://www.youtube.com/@kidsguitardojo", kind: "YouTube", price: "Gratuit", lang: "Anglais", level: "Enfants", description: "De petites leçons pour les enfants : posture, lecture et premiers pas.", tags: ["Enfants", "Court", "Posture"], note: "Contenu de guitare générale, pas uniquement classique." },
  { id: "kasey", name: "Kasey's Music Method", url: "https://www.youtube.com/@KaseysMusicMethod", kind: "YouTube", price: "Gratuit", lang: "Anglais", level: "Enfants", description: "Des premières leçons très ludiques pour donner envie de jouer.", tags: ["Enfants", "Jeux"], note: "Souvent sur guitare folk ; faire vérifier la posture par un professeur de classique." },
  { id: "delcamp", name: "Delcamp Classical Guitar Forum", url: "https://www.classicalguitardelcamp.com/", kind: "Partitions", price: "Gratuit", lang: "Multilingue", level: "Débutant → avancé", description: "Un forum avec des partitions classées par niveau et beaucoup de discussions techniques.", tags: ["Forum", "Partitions", "Niveaux"], note: "Lire les règles du site et vérifier les droits avant de télécharger." },
  { id: "imslp", name: "IMSLP · Partitions du domaine public", url: "https://imslp.org/wiki/Category:For_guitar", kind: "Partitions", price: "Gratuit", lang: "Multilingue", level: "Tous niveaux", description: "Des milliers de partitions anciennes : Sor, Giuliani, Tárrega, Bach et bien d'autres.", tags: ["Domaine public", "PDF", "Histoire"], featured: true },
  { id: "mutopia", name: "Mutopia Project", url: "https://www.mutopiaproject.org/", kind: "Partitions", price: "Gratuit", lang: "Anglais", level: "Débutant → avancé", description: "Des partitions libres, propres et prêtes à imprimer, avec parfois un fichier MIDI.", tags: ["Libre", "PDF", "MIDI"] },
  { id: "ticg-sheet", name: "This is Classical Guitar · Partitions", url: "https://www.thisisclassicalguitar.com/sheet-music-for-classical-guitar/", kind: "Partitions", price: "Gratuit + payant", lang: "Anglais", level: "Débutant → avancé", description: "Des pièces gratuites et payantes, souvent accompagnées d'une vidéo explicative.", tags: ["Partitions", "Vidéos", "Niveaux"] },
  { id: "8notes", name: "8notes · Guitare classique", url: "https://www.8notes.com/guitar/", kind: "Partitions", price: "Gratuit + payant", lang: "Anglais", level: "Débutant → intermédiaire", description: "Des mélodies connues en versions simples, pratiques pour s'amuser.", tags: ["Simple", "Mélodies"] },
  { id: "abrsm", name: "ABRSM · Guitare classique", url: "https://www.abrsm.org/", kind: "Examens", price: "Payant", lang: "Anglais", level: "Débutant → avancé", description: "Un système d'examens avec des niveaux, des pièces et des compétences techniques.", tags: ["Examens", "Niveaux"], note: "Optionnel. Les examens ne remplacent pas le plaisir et les bases." },
  { id: "trinity", name: "Trinity College London · Musique", url: "https://www.trinitycollege.com/", kind: "Examens", price: "Payant", lang: "Anglais", level: "Débutant → avancé", description: "Un autre système d'examens, avec un choix de répertoire assez flexible.", tags: ["Examens", "Répertoire"] },
  { id: "rcm", name: "The Royal Conservatory · Guitare", url: "https://www.rcmusic.com/learning", kind: "Examens", price: "Payant", lang: "Anglais", level: "Débutant → avancé", description: "Des recueils classés par niveau et une progression très structurée.", tags: ["Examens", "Recueils"] },
  { id: "siccas", name: "Siccas Guitars · YouTube", url: "https://www.youtube.com/@SiccasGuitars", kind: "Écoute", price: "Gratuit", lang: "Anglais", level: "Tous", description: "Des concerts filmés avec un très beau son, pour découvrir des guitaristes.", tags: ["Concerts", "Son"], featured: true },
  { id: "gsi", name: "Guitar Salon International", url: "https://www.youtube.com/@Guitarsalon", kind: "Écoute", price: "Gratuit", lang: "Anglais", level: "Tous", description: "Des vidéos de concerts et de guitares exceptionnelles, pour le plaisir des oreilles.", tags: ["Concerts", "Guitares"] },
  { id: "bilibili", name: "Bilibili · Vidéos en chinois", url: "https://search.bilibili.com/all?keyword=%E5%8F%A4%E5%85%B8%E5%90%89%E4%BB%96", kind: "Chinois", price: "Gratuit", lang: "Chinois", level: "Tous", description: "Une porte d'entrée vers des explications en chinois. À faire trier par un adulte.", tags: ["Chinois", "Vidéos"], note: "Résultats de recherche non vérifiés individuellement ; éviter les contenus publicitaires." },
];

export type FrBook = {
  title: string;
  author: string;
  level: string;
  description: string;
  note: string;
  link?: string;
  free?: boolean;
};

export const BOOKS_FR: FrBook[] = [
  { title: "Learning the Classic Guitar, Part 1", author: "Aaron Shearer", level: "Grand enfant / adulte / professeur", description: "Une méthode très structurée : posture, main droite, lecture et premiers gestes.", note: "Payant. Très utile pour comprendre une progression traditionnelle.", },
  { title: "Las Primeras Lecciones de Guitarra", author: "Julio Salvador Sagreras", level: "Débutant", description: "De courtes leçons et pièces argentines, musicales et progressives.", note: "Édition originale en espagnol ; choisir les pièces avec un professeur.", link: "https://imslp.org/wiki/Las_lecciones_de_guitarra_(Sagreras,_Julio_Salvador)", free: true },
  { title: "Méthode complète, Op. 27", author: "Ferdinando Carulli", level: "Débutant → intermédiaire", description: "Un grand classique du XIXe siècle avec gammes, accords, études et pièces.", note: "Version française ancienne sur IMSLP.", link: "https://imslp.org/wiki/M%C3%A9thode_compl%C3%A8te,_Op.27_(Carulli,_Ferdinando)", free: true },
  { title: "Studio per la chitarra, Op. 1", author: "Mauro Giuliani", level: "Débutant → avancé", description: "Cent vingt exercices de main droite, parfaits pour la régularité et les arpèges.", note: "Choisir deux ou trois exercices, pas toute la série d'un coup.", link: "https://imslp.org/wiki/Studio_per_la_chitarra,_Op.1_(Giuliani,_Mauro)", free: true },
  { title: "24 Progressive Lessons, Op. 31", author: "Fernando Sor", level: "Débutant + → intermédiaire", description: "Des études courtes qui mêlent mélodie, basse et lecture.", note: "Le professeur choisit les numéros adaptés à l'enfant.", link: "https://imslp.org/wiki/24_Progressive_Lessons_For_Beginners,_Op.31_(Sor,_Fernando)", free: true },
  { title: "Solo Guitar Playing, Book 1", author: "Frederick Noad", level: "Grand enfant / adulte", description: "Une méthode complète pour apprendre seul, avec lecture et répertoire.", note: "Payant ; disponible en bibliothèque ou en librairie spécialisée." },
  { title: "The Christopher Parkening Guitar Method, Vol. 1", author: "Christopher Parkening", level: "Grand enfant / adulte", description: "Technique et musicalité, avec des enregistrements de démonstration.", note: "Payant. Un professeur peut en extraire des pièces." },
  { title: "Classical Guitar Method", author: "Paul Henry", level: "Débutant", description: "Une méthode d'entrée progressive, avec partitions et tablatures.", note: "Payant. Vérifier l'édition avant d'acheter." },
  { title: "Classical Guitar Repertoire and Etudes (Prep–Level 1)", author: "The Royal Conservatory", level: "Préparatoire → 1re année", description: "Un recueil classé par niveau, pratique pour varier les styles.", note: "Payant. On peut l'utiliser sans passer l'examen." },
  { title: "Pumping Nylon", author: "Scott Tennant", level: "Intermédiaire → avancé", description: "Un livre de technique moderne : échauffement, main droite, gammes et arpèges.", note: "Pas pour débuter seul. À utiliser avec un professeur." },
];

export const FR_KINDS = ["Tous", "Cours", "YouTube", "Partitions", "Examens", "Écoute", "Chinois"] as const;

export type FrChannel = {
  id: string;
  name: string;
  handle: string;
  url: string;
  focus: string;
  description: string;
  bestFor: string;
  price: "Gratuit" | "Gratuit + payant";
  lang: "Anglais" | "Français" | "Multilingue";
  featured?: boolean;
  note?: string;
};

export const CHANNELS_FR: FrChannel[] = [
  {
    id: "this-is-classical-guitar",
    name: "This is Classical Guitar",
    handle: "@Thisisclassicalguitar",
    url: "https://www.youtube.com/@Thisisclassicalguitar",
    focus: "Méthode / partitions / pièces",
    description: "La chaîne de Bradford Werner : méthode gratuite, cours techniques, pièces expliquées et partitions. Une bonne colonne vertébrale.",
    bestFor: "Les familles qui veulent suivre un ordre avec des exemples écrits",
    price: "Gratuit + payant",
    lang: "Anglais",
    featured: true,
  },
  {
    id: "classical-guitar-shed",
    name: "Classical Guitar Shed",
    handle: "@ClassicalGuitarShed",
    url: "https://www.youtube.com/@ClassicalGuitarShed",
    focus: "Débuter / suivre / routine",
    description: "Les cours d'Allen Mathews, très accessibles, avec des séances guidées de 15 à 20 minutes.",
    bestFor: "Les enfants et parents qui aiment être accompagnés pas à pas",
    price: "Gratuit + payant",
    lang: "Anglais",
    featured: true,
  },
  {
    id: "classical-guitar-corner",
    name: "Classical Guitar Corner",
    handle: "@ClassicalGuitarCorner",
    url: "https://www.youtube.com/@ClassicalGuitarCorner",
    focus: "Cours structurés / jeu / théorie",
    description: "La plateforme de Simon Powis : courtes leçons gratuites, concerts et démonstrations, cours complets payants.",
    bestFor: "Les familles qui cherchent une progression plus académique",
    price: "Gratuit + payant",
    lang: "Anglais",
  },
  {
    id: "kids-guitar-dojo",
    name: "Kids Guitar Dojo",
    handle: "@kidsguitardojo",
    url: "https://www.youtube.com/@kidsguitardojo",
    focus: "Éveil des enfants",
    description: "Des leçons courtes pour les enfants : posture, lecture et première guitare, sur un ton léger.",
    bestFor: "Les petits qui ont besoin d'une voix et de formats très courts",
    price: "Gratuit",
    lang: "Anglais",
    featured: true,
  },
  {
    id: "tatyana",
    name: "Tatyana Ryzhkova",
    handle: "@tatyanaryzhkova",
    url: "https://www.youtube.com/@tatyanaryzhkova",
    focus: "Concerts / cours / pratique",
    description: "La guitariste Tatyana Ryzhkova partage des concerts, des vidéos de travail et des conseils avec beaucoup de douceur.",
    bestFor: "Écouter des œuvres complètes et voir le quotidien d'une guitariste",
    price: "Gratuit",
    lang: "Anglais",
  },
  {
    id: "tonebase",
    name: "tonebase Guitar",
    handle: "@tonebase",
    url: "https://www.youtube.com/@tonebase",
    focus: "Masterclasses / guitaristes",
    description: "Des masterclasses filmées avec de grands interprètes. Les extraits YouTube gratuits montrent leurs habitudes de travail.",
    bestFor: "Les adultes qui veulent comprendre comment travaillent les professionnels",
    price: "Gratuit + payant",
    lang: "Anglais",
  },
  {
    id: "siccas",
    name: "Siccas Guitars",
    handle: "@SiccasGuitars",
    url: "https://www.youtube.com/@SiccasGuitars",
    focus: "Concerts / belles guitares",
    description: "Une maison allemande de guitares classiques : concerts bien enregistrés, interviews de luthiers et instruments rares.",
    bestFor: "Plonger ses oreilles dans un beau son et découvrir des interprètes",
    price: "Gratuit",
    lang: "Anglais",
    featured: true,
  },
  {
    id: "guitar-salon",
    name: "Guitar Salon International",
    handle: "@Guitarsalon",
    url: "https://www.youtube.com/@Guitarsalon",
    focus: "Concerts / guitares de collection",
    description: "Une maison de Los Angeles avec des vidéos propres, de nombreux guitaristes contemporains et des instruments précieux.",
    bestFor: "Écouter des classiques et observer les mains et le timbre",
    price: "Gratuit",
    lang: "Anglais",
  },
  {
    id: "kasey",
    name: "Kasey's Music Method",
    handle: "@KaseysMusicMethod",
    url: "https://www.youtube.com/@KaseysMusicMethod",
    focus: "Guitare pour enfants",
    description: "Des jeux et des phrases courtes pour tenir l'instrument, pincer les cordes et jouer une première chanson.",
    bestFor: "Installer d'abord l'idée que la guitare est amusante",
    price: "Gratuit",
    lang: "Anglais",
    note: "Démonstrations souvent sur guitare folk (cordes acier) : faire vérifier la posture par un professeur de classique.",
  },
  {
    id: "gohar",
    name: "Gohar Vardanyan / Strings By Mail",
    handle: "@StringsByMail",
    url: "https://www.youtube.com/@StringsByMail",
    focus: "Détails techniques / pratique",
    description: "Les « Lessonettes » de Gohar Vardanyan : de très courtes vidéos précises sur la main droite, la main gauche et les gestes.",
    bestFor: "Les parents ou professeurs qui veulent un détail technique, pas un enfant débutant seul",
    price: "Gratuit",
    lang: "Anglais",
  },
];

export type FrSheetSource = {
  name: string;
  url: string;
  description: string;
  tags: string[];
};

export const SHEET_SOURCES_FR: FrSheetSource[] = [
  {
    name: "This is Classical Guitar · Partitions",
    url: "https://www.thisisclassicalguitar.com/sheet-music-for-classical-guitar/",
    description: "Des partitions gratuites et payantes classées par niveau, souvent accompagnées d'une vidéo.",
    tags: ["Par niveau", "Vidéo", "Gratuit + payant"],
  },
  {
    name: "IMSLP · Guitare",
    url: "https://imslp.org/wiki/Category:For_guitar",
    description: "Le grand trésor des éditions du domaine public ; demander au professeur de choisir la bonne version.",
    tags: ["Domaine public", "Éditions", "Histoire"],
  },
  {
    name: "Mutopia · Guitare",
    url: "https://www.mutopiaproject.org/cgibin/make-table.cgi?Instrument=Guitar",
    description: "Des partitions libres gravées par des bénévoles, en PDF propre et parfois en MIDI.",
    tags: ["Libre", "PDF", "MIDI"],
  },
  {
    name: "Delcamp Classical Guitar Forum",
    url: "https://www.classicalguitardelcamp.com/",
    description: "Des partitions classées par niveau et beaucoup d'échanges techniques ; lire les règles avant de télécharger.",
    tags: ["Forum", "Niveaux", "Communauté"],
  },
  {
    name: "8notes · Guitare",
    url: "https://www.8notes.com/guitar/",
    description: "Beaucoup de mélodies connues en versions simples, pour compléter le répertoire en s'amusant.",
    tags: ["Simple", "Mélodies", "Gratuit"],
  },
  {
    name: "MuseScore",
    url: "https://musescore.com/",
    description: "Une communauté de partitions ; la qualité et les droits varient, à utiliser avec l'aide d'un professeur.",
    tags: ["Communauté", "Référence", "Droits à vérifier"],
  },
];

export type FrExamBoard = {
  name: string;
  url: string;
  what: string;
  why: string;
  caveat: string;
};

export const EXAM_BOARDS_FR: FrExamBoard[] = [
  {
    name: "ABRSM",
    url: "https://www.abrsm.org/",
    what: "De l'initiation au niveau 8 : pièces, gammes, déchiffrage et écoute.",
    why: "Un répertoire bien établi, des objectifs clairs et une reconnaissance internationale.",
    caveat: "Les programmes changent régulièrement. Ne sautez pas les bases pour courir après un grade ; l'examen n'est pas le seul chemin.",
  },
  {
    name: "Trinity College London",
    url: "https://www.trinitycollege.com/",
    what: "De l'entrée au niveau avancé, avec jeu, technique et culture musicale.",
    why: "Un choix de répertoire assez souple, utile pour montrer ses progrès avec des œuvres choisies.",
    caveat: "Vérifiez toujours le programme actuel sur le site officiel. Le chemin compte plus que le certificat.",
  },
  {
    name: "The Royal Conservatory (RCM)",
    url: "https://www.rcmusic.com/learning",
    what: "Des recueils classés par niveau et un système d'examens du préparatoire à l'avancé.",
    why: "Des recueils et des études bien organisés, souvent utilisés comme banque de répertoire.",
    caveat: "Les examens ne sont pas accessibles partout ; les recueils et programmes évoluent aussi.",
  },
];

export const STARTER_PATHS_FR = [
  {
    icon: "compass" as const,
    label: "Envie d'un ordre",
    title: "Une méthode gratuite",
    text: "Commence avec la méthode gratuite de This is Classical Guitar, puis avance avec le parcours du site, un petit morceau à la fois.",
    href: "https://www.thisisclassicalguitar.com/free-classical-guitar-method-book-pdf/",
    color: "violet",
  },
  {
    icon: "youtube" as const,
    label: "D'abord des vidéos pour enfants",
    title: "Vidéos pour enfants",
    text: "Kids Guitar Dojo et Kasey : de courtes leçons pour installer l'idée que la guitare est un jeu.",
    href: "https://www.youtube.com/@kidsguitardojo",
    color: "coral",
  },
  {
    icon: "book" as const,
    label: "Chercher en chinois",
    title: "Ressources en chinois",
    text: "Une recherche Bilibili à faire trier par un adulte : voix lente, chapitres clairs, pas de publicité agressive.",
    href: "https://search.bilibili.com/all?keyword=%E5%84%BF%E7%AB%A5%E5%8F%A4%E5%85%B8%E5%90%89%E4%BB%96",
    color: "sky",
  },
];

export const CHOOSE_TIPS_FR = [
  "Est-ce que la leçon apprend à écouter son propre son, pas seulement où poser les doigts ?",
  "Le rythme est-il adapté à l'enfant : gros plans, démonstration lente, passages faciles à répéter ?",
  "Les partitions et doigtés indiquent-ils leurs droits ? Ne pas diffuser de méthode commerciale sans autorisation.",
  "La posture proposée évite-t-elle la douleur et les tensions ? Un bon cours parle d'abord de relâchement.",
  "Y a-t-il un sommaire progressif ? Les vidéos isolées complètent une méthode, elles ne la remplacent pas.",
  "Le gratuit est précieux, mais un professeur qui voit les mains et la taille de la guitare reste irremplaçable.",
];
