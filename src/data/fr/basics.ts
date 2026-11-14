import type { GuitarPart, GuitarString, GuitarType, PostureStep, QuizQuestion } from "../basics";

type GlossaryEntryFr = {
  term: string;
  en: string;
  category: "Guitare & mains" | "Lecture" | "Son" | "Pratique";
  definition: string;
};

export const GUITAR_PARTS_FR: GuitarPart[] = [
  {
    id: "headstock",
    n: 1,
    name: "La tête",
    en: "Headstock",
    short: "La petite couronne",
    detail:
      "Tout en haut. Elle ne fait pas de son, mais elle tient les mécaniques et les cordes : c'est le point de départ de chaque note.",
    x: 50,
    y: 7,
  },
  {
    id: "pegs",
    n: 2,
    name: "Les mécaniques",
    en: "Tuning machines",
    short: "Pour tendre ou détendre les cordes",
    detail:
      "En tournant doucement une mécanique, la corde devient plus tendue (le son monte) ou plus détendue (le son descend).",
    x: 30,
    y: 8.5,
  },
  {
    id: "nut",
    n: 3,
    name: "Le sillet de tête",
    en: "Nut",
    short: "Le petit pont des cordes",
    detail:
      "Une petite barre claire entre la tête et la touche. Les six cordes passent dans ses rainures avant de longer le manche.",
    x: 50,
    y: 13.5,
  },
  {
    id: "fretboard",
    n: 4,
    name: "La touche",
    en: "Fretboard",
    short: "Le terrain de jeu de la main gauche",
    detail:
      "La longue pièce sombre sur laquelle la main gauche appuie. Les doigts se placent juste derrière une frette, pas dessus.",
    x: 50,
    y: 22,
  },
  {
    id: "frets",
    n: 5,
    name: "Les frettes",
    en: "Frets",
    short: "Les petites lignes argentées",
    detail:
      "Ces lignes métalliques divisent la touche en cases. La case 1 est la plus proche de la tête ; plus le numéro augmente, plus on va vers le corps.",
    x: 54,
    y: 28,
  },
  {
    id: "neck",
    n: 6,
    name: "Le manche",
    en: "Neck",
    short: "La route de la main gauche",
    detail:
      "Le manche permet à la main gauche de se déplacer. Le poignet reste souple et le pouce se place doucement derrière, sans serrer.",
    x: 50,
    y: 37,
  },
  {
    id: "strings",
    n: 7,
    name: "Les cordes",
    en: "Strings",
    short: "Six lignes qui chantent",
    detail:
      "La guitare classique utilise des cordes en nylon. La 6e est la plus épaisse et la plus grave ; la 1re est la plus fine et la plus aiguë.",
    x: 50,
    y: 46,
  },
  {
    id: "soundhole",
    n: 8,
    name: "La rosace",
    en: "Soundhole",
    short: "La porte du son",
    detail:
      "Les vibrations passent de la table au corps, puis sortent par la rosace. On n'y met pas les doigts et on n'y glisse pas de petits objets.",
    x: 50,
    y: 63.5,
  },
  {
    id: "soundboard",
    n: 9,
    name: "La table d'harmonie",
    en: "Soundboard",
    short: "Le bois qui respire",
    detail:
      "La grande surface du dessus vibre comme la peau d'un tambour. Elle transforme le son fin des cordes en une voix chaude et ronde.",
    x: 30,
    y: 58,
  },
  {
    id: "bridge",
    n: 10,
    name: "Le chevalet",
    en: "Bridge & saddle",
    short: "Le terminus des cordes",
    detail:
      "Le bloc de bois en bas du corps. Les cordes s'y accrochent et transmettent leur vibration à la table.",
    x: 50,
    y: 79,
  },
  {
    id: "body",
    n: 11,
    name: "Le corps",
    en: "Body",
    short: "Le grand ventre de la guitare",
    detail:
      "Le corps forme une petite caisse de résonance. C'est lui qui donne ce son chaud, même quand on ne pince qu'une seule corde.",
    x: 50,
    y: 88,
  },
];

export const GUITAR_TYPES_FR: GuitarType[] = [
  {
    id: "classical",
    name: "Guitare classique",
    en: "Classical guitar",
    tagline: "Cordes en nylon, son doux",
    detail: "On joue avec les doigts. C'est celle que tu apprends ici.",
    color: "sun",
    audio: "audio/guitars/classical.mp3",
    audioCredit: "Elmatute / Freesound",
    audioLicense: "CC0",
    audioLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    audioUrl: "https://freesound.org/people/Elmatute/sounds/679746/",
  },
  {
    id: "acoustic",
    name: "Guitare folk",
    en: "Acoustic guitar",
    tagline: "Cordes en acier, son clair",
    detail: "Parfaite pour accompagner une chanson.",
    color: "sky",
    audio: "audio/guitars/acoustic.mp3",
    audioCredit: "Jason Shaw / Wikimedia Commons",
    audioLicense: "CC BY 3.0 US",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/3.0/us/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Jason_Shaw_-_SOLO_ACOUSTIC_GUITAR.ogg",
  },
  {
    id: "electric",
    name: "Guitare électrique",
    en: "Electric guitar",
    tagline: "Branchée à un ampli, elle peut être très puissante",
    detail: "On l'entend dans le rock, la pop et les films.",
    color: "violet",
    audio: "audio/guitars/electric.mp3",
    audioCredit: "afgbeveridge / Freesound",
    audioLicense: "CC BY 4.0",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    audioUrl: "https://freesound.org/people/afgbeveridge/sounds/758469/",
  },
  {
    id: "jazz",
    name: "Guitare jazz",
    en: "Jazz guitar",
    tagline: "Un son rond et chaleureux",
    detail: "Son corps ressemble à un petit violon. Idéale pour le jazz et le blues.",
    color: "coral",
    audio: "audio/guitars/jazz.mp3",
    audioCredit: "Serolillo / Wikimedia Commons",
    audioLicense: "CC BY 2.5",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/2.5/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Jazz-Guitar.ogg",
  },
  {
    id: "bass",
    name: "Guitare basse",
    en: "Bass guitar",
    tagline: "Quatre cordes épaisses pour tenir le grave",
    detail: "Avec la batterie, elle stabilise le rythme.",
    color: "mint",
    audio: "audio/guitars/bass.mp3",
    audioCredit: "Serolillo / Wikimedia Commons",
    audioLicense: "CC BY 2.5",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/2.5/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Funky_Slap_Bass_line.ogg",
  },
  {
    id: "flamenco",
    name: "Guitare flamenca",
    en: "Flamenco guitar",
    tagline: "Plus légère et plus brillante",
    detail: "Cousine de la classique, elle accompagne le chant et la danse.",
    color: "pink",
    audio: "audio/guitars/flamenco.mp3",
    audioCredit: "Manitas de Plata / Mi espacio Flamenco",
    audioLicense: "CC0",
    audioLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    audioUrl: "https://archive.org/details/ManitasDePlata",
  },
];

export const GUITAR_STRINGS_FR: GuitarString[] = [
  { number: 1, note: "E", solfege: "mi", frequency: 329.63, nickname: "Le petit oiseau", detail: "La plus fine et la plus aiguë. Elle chante souvent la mélodie.", color: "var(--string-1)" },
  { number: 2, note: "B", solfege: "si", frequency: 246.94, nickname: "Le nuage", detail: "Douce et lumineuse, une amie de la mélodie.", color: "var(--string-2)" },
  { number: 3, note: "G", solfege: "sol", frequency: 196, nickname: "L'étoile", detail: "Ni trop haute ni trop basse, comme une étoile au milieu.", color: "var(--string-3)" },
  { number: 4, note: "D", solfege: "ré", frequency: 146.83, nickname: "Le ruisseau", detail: "Une note grave qui coule doucement sous la mélodie.", color: "var(--string-4)" },
  { number: 5, note: "A", solfege: "la", frequency: 110, nickname: "Le grand arbre", detail: "Un pilier pour les basses et les accompagnements.", color: "var(--string-5)" },
  { number: 6, note: "E", solfege: "mi", frequency: 82.41, nickname: "L'éléphant", detail: "La plus épaisse et la plus grave. On dirait un pas d'éléphant.", color: "var(--string-6)" },
];

export const STRING_CHANT_FR = [
  "Corde 6, mi grave : l'éléphant avance",
  "Corde 5, la : le grand arbre danse",
  "Corde 4, ré : le ruisseau s'écoule",
  "Corde 3, sol : une étoile au milieu",
  "Corde 2, si : le nuage tout doux",
  "Corde 1, mi aigu : l'oiseau s'envole",
];

export const POSTURE_STEPS_FR: PostureStep[] = [
  { n: "01", title: "Assieds-toi bien", body: "Sur le bord de la chaise, les deux pieds au sol. Le dos reste grand mais souple, sans se raidir.", check: "Je peux rester 20 secondes sans bouger.", icon: "chair" },
  { n: "02", title: "Le pied gauche sur le repose-pied", body: "Le genou gauche monte un peu. La taille de la guitare se pose sur la cuisse gauche, contre le buste.", check: "La guitare ne glisse pas et ma jambe ne s'engourdit pas.", icon: "footstool" },
  { n: "03", title: "La tête regarde les étoiles", body: "Le manche monte vers le haut, à environ 30–45°. La tête de la guitare arrive près de mes yeux ou un peu plus bas.", check: "Je n'ai pas besoin de pencher la tête pour voir mes doigts.", icon: "guitar" },
  { n: "04", title: "Le bras droit se pose", body: "L'avant-bras droit se pose sur le bord du corps, près du chevalet. Le poignet reste droit et la main flotte au-dessus des cordes.", check: "Mon épaule droite descend et mon bras ne tire pas.", icon: "arm" },
  { n: "05", title: "La main gauche est légère", body: "Les doigts se tiennent debout et appuient juste derrière la frette. Le pouce est derrière le manche, sans pincer.", check: "Mon poignet n'est pas plié à angle droit.", icon: "hand" },
  { n: "06", title: "Tout le corps respire", body: "Les épaules descendent, le menton reste détendu. Si ça tire, je m'arrête, je secoue les mains et je regarde au loin.", check: "Je respire normalement et mes épaules ne montent pas vers les oreilles.", icon: "smile" },
];

export const FIT_NOTES_FR = [
  "À 7 ans, on utilise souvent une guitare 1/2 ou 3/4, mais l'âge ne suffit pas : la taille et la longueur des bras comptent.",
  "Assise, la tête de la guitare arrive vers les yeux ou les épaules, et la main gauche atteint facilement la 1re case.",
  "Choisis une guitare classique à cordes en nylon, avec une action pas trop haute. Une guitare trop grande fatigue le corps.",
  "Ne prends pas une guitare « pour plus tard » : une guitare trop grande peut abîmer la posture et donner envie d'arrêter.",
];

export const GLOSSARY_FR: GlossaryEntryFr[] = [
  { term: "Guitare classique", en: "Classical guitar", category: "Guitare & mains", definition: "Une guitare à cordes en nylon, jouée avec les doigts. Son manche est large et son son chaud." },
  { term: "Cordes en nylon", en: "Nylon strings", category: "Guitare & mains", definition: "Les cordes 1 à 3 sont en nylon ; les 4 à 6 sont en nylon entouré de métal. Elles sont plus douces que l'acier." },
  { term: "Corde à vide", en: "Open string", category: "Guitare & mains", definition: "Une corde que la main gauche ne touche pas : on la pince simplement." },
  { term: "Frette", en: "Fret", category: "Guitare & mains", definition: "Les lignes métalliques de la touche. La 1re case est la plus proche de la tête." },
  { term: "Position", en: "Position", category: "Guitare & mains", definition: "L'endroit où se trouve la main gauche. La 1re position est près de la tête." },
  { term: "Apoyando", en: "Rest stroke", category: "Guitare & mains", definition: "Après avoir pincé, le doigt s'appuie sur la corde voisine. Le son est plus plein." },
  { term: "Tirando", en: "Free stroke", category: "Guitare & mains", definition: "Après avoir pincé, le doigt revient vers la paume sans toucher la corde suivante. Le son est plus léger." },
  { term: "Arpège", en: "Arpeggio", category: "Guitare & mains", definition: "Les notes d'un accord jouées l'une après l'autre, comme une petite cascade." },
  { term: "Mélodie", en: "Melody", category: "Son", definition: "La ligne que l'on a envie de chanter. C'est le personnage principal." },
  { term: "Basse", en: "Bass", category: "Son", definition: "La ligne la plus grave. Elle sert de fondation à la musique." },
  { term: "Nuance", en: "Dynamics", category: "Son", definition: "Jouer doucement (p), fort (f) ou entre les deux (mf)." },
  { term: "Tempo", en: "Tempo", category: "Son", definition: "La vitesse de la musique. Lent ne veut pas dire moins bien : c'est souvent la clé." },
  { term: "Pulsation", en: "Beat", category: "Lecture", definition: "Le battement régulier de la musique, comme un cœur." },
  { term: "Mesure", en: "Measure", category: "Lecture", definition: "Un petit paquet de temps entre deux barres. Une phrase de musique." },
  { term: "Portée", en: "Staff", category: "Lecture", definition: "Les cinq lignes sur lesquelles on écrit les notes." },
  { term: "Ronde", en: "Whole note", category: "Lecture", definition: "Un cercle vide qui dure généralement 4 temps." },
  { term: "Blanche", en: "Half note", category: "Lecture", definition: "Un cercle vide avec une queue : 2 temps." },
  { term: "Noire", en: "Quarter note", category: "Lecture", definition: "Une note pleine avec une queue : 1 temps." },
  { term: "Soupir", en: "Rest", category: "Lecture", definition: "Un moment de silence. Le silence fait aussi partie de la musique." },
  { term: "TAB", en: "Tablature", category: "Lecture", definition: "Six lignes pour les six cordes ; les chiffres indiquent la case. 0 signifie corde à vide." },
  { term: "Phrase", en: "Phrase", category: "Pratique", definition: "Un groupe de notes avec un début, une respiration et une fin." },
  { term: "Travailler lentement", en: "Slow practice", category: "Pratique", definition: "Jouer assez lentement pour rester juste, puis accélérer petit à petit." },
];

export const CARE_TIPS_FR = [
  "Lave-toi les mains avant de jouer et sèche-les bien.",
  "Coupe les ongles de la main gauche. Pour la main droite, demande à ton professeur.",
  "Après le jeu, essuie les cordes et le corps avec un chiffon doux.",
  "Tourne les mécaniques très doucement. Demande à un adulte pour changer une corde.",
  "Ne laisse pas la guitare au soleil, près d'un radiateur ou dans une voiture.",
  "Si tu as mal, arrête et dis-le à un adulte. La musique ne doit pas faire mal.",
];

export const TIMELINE_FR = [
  { year: "XVIe s.", title: "Les ancêtres", body: "Le luth, la vihuela et d'autres instruments à cordes pincées voyagent en Europe." },
  { year: "XIXe s.", title: "Six cordes", body: "La guitare classique moderne prend sa forme. Le luthier Antonio de Torres améliore ses proportions et sa voix." },
  { year: "Fin XIXe", title: "Tárrega", body: "Francisco Tárrega écrit de petites pièces pleines d'émotion et fait entendre la guitare autrement." },
  { year: "XXe s.", title: "La grande scène", body: "Andrés Segovia et d'autres guitaristes parcourent le monde et font entrer la guitare dans les salles de concert." },
  { year: "Années 1940", title: "Le nylon", body: "Les cordes en nylon remplacent peu à peu les cordes en boyau. Elles sont plus stables et plus faciles pour les débutants." },
  { year: "Aujourd'hui", title: "Un instrument mondial", body: "De Bach à l'Espagne, du Brésil à la Chine, la guitare classique continue d'inventer de nouvelles histoires." },
  { year: "Années 1930", title: "La guitare électrique", body: "Branchée à un ampli, elle peut devenir très puissante. Le rock commence à faire du bruit !" },
  { year: "Années 1950", title: "La basse électrique", body: "Quatre cordes épaisses : avec la batterie, elle donne un solide tapis au groupe." },
];



export const BASICS_QUIZ_FR: QuizQuestion[] = [
  { q: "Quelle est la 6e corde, la plus épaisse ?", options: ["Mi aigu", "Mi grave", "La"], answer: 1, explain: "La 6e corde est le mi grave. La 1re est le mi aigu." },
  { q: "Où pose-t-on le doigt de la main gauche ?", options: ["Sur la frette", "Juste derrière la frette", "Au milieu du bois"], answer: 1, explain: "Juste derrière la frette : le son est clair et le doigt ne force pas." },
  { q: "Les cordes en nylon sont plutôt…", options: ["Plus douces que l'acier", "Plus dures que l'acier", "En métal pur"], answer: 0, explain: "Elles sont plus souples, mais il faut quand même appuyer correctement." },
  { q: "Tu n'as que 10 minutes. Que fais-tu ?", options: ["Tout le morceau 30 fois", "Deux ou trois petits objectifs, lentement", "Regarder une vidéo sans jouer"], answer: 1, explain: "Des séances courtes et concentrées valent mieux qu'un long marathon." },
  { q: "Tu fais une fausse note pendant un petit concert. Tu…", options: ["T'arrêtes et recommences", "Continues la musique", "Te fâches contre la guitare"], answer: 1, explain: "En concert, on garde le rythme et on continue. On corrige après." },
  { q: "La guitare sonne…", options: ["Exactement comme la partition", "Un octave plus bas que la partition", "Deux octaves plus haut"], answer: 1, explain: "La guitare se lit en clé de sol mais sonne un octave plus bas. Un petit secret de guitariste." },
];
