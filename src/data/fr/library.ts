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
