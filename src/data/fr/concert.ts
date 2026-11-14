export type FrPerformance = {
  id: string;
  title: string;
  composer: string;
  performer: string;
  youtubeId: string;
  duration: string;
  story: string;
  listenFor: string;
  color: string;
};

export const PERFORMANCES_FR: FrPerformance[] = [
  {
    id: "p-asturias",
    title: "Asturias",
    composer: "Isaac Albéniz",
    performer: "Ana Vidović",
    youtubeId: "inBKFMB-yPg",
    duration: "7:15",
    story: "Une pièce écrite pour piano, devenue un grand voyage pour guitare : on entend presque des sabots et du vent.",
    listenFor: "Lève la main quand la musique devient soudain plus forte et plus rapide.",
    color: "coral",
  },
  {
    id: "p-recuerdos",
    title: "Souvenirs de l'Alhambra",
    composer: "Francisco Tárrega",
    performer: "Ana Vidović",
    youtubeId: "fwjX-m4LkYk",
    duration: "5:11",
    story: "Tárrega imagine le palais de Grenade. Les notes aiguës tombent comme des gouttes d'eau.",
    listenFor: "Cherche la mélodie très aiguë qui chante au-dessus des basses.",
    color: "violet",
  },
  {
    id: "p-bwv999",
    title: "Prélude en do mineur, BWV 999",
    composer: "Johann Sebastian Bach",
    performer: "Marisa Gómez",
    youtubeId: "L78_akS7mEc",
    duration: "2:13",
    story: "Une petite machine à voyager dans le temps, signée Bach. Les notes tournent, calmes et régulières.",
    listenFor: "Suis la basse comme si tu descendais un escalier.",
    color: "sky",
  },
  {
    id: "p-julia-florida",
    title: "Julia Florida",
    composer: "Agustín Barrios",
    performer: "Berta Rojas",
    youtubeId: "Jae7yWM5W4A",
    duration: "4:28",
    story: "Une barque douce sur l'eau, au clair de lune. La musique balance à trois temps.",
    listenFor: "Dessine une petite vague avec ta main à chaque mesure.",
    color: "mint",
  },
  {
    id: "p-torija",
    title: "Torija",
    composer: "Federico Moreno Torroba",
    performer: "Tatyana Ryzhkova",
    youtubeId: "Tsqfnj-PC0k",
    duration: "3:47",
    story: "Un château espagnol au coucher du soleil. On ouvre une vieille fenêtre et on écoute le silence.",
    listenFor: "Repère les endroits où la phrase respire, comme quand on reprend son souffle.",
    color: "sun",
  },
  {
    id: "p-libertango",
    title: "Libertango",
    composer: "Astor Piazzolla",
    performer: "Celil Refik Kaya",
    youtubeId: "jno0YT7hX5I",
    duration: "3:19",
    story: "Un tango qui avance comme des pas dans la nuit, de plus en plus vivant.",
    listenFor: "Tape doucement le rythme avec ton pied. Où la musique devient-elle plus intense ?",
    color: "pink",
  },
  {
    id: "p-cavatina",
    title: "Cavatina",
    composer: "Stanley Myers",
    performer: "Ana Vidović",
    youtubeId: "HSECkRnpsDE",
    duration: "3:00",
    story: "Une musique douce, comme une promenade au clair de lune. Elle est devenue célèbre au cinéma.",
    listenFor: "Ferme les yeux une minute et imagine un paysage.",
    color: "sky",
  },
  {
    id: "p-capricho",
    title: "Capricho Arabe",
    composer: "Francisco Tárrega",
    performer: "Xuefei Yang",
    youtubeId: "2lAFKvJGcHA",
    duration: "4:24",
    story: "Des arcs, des motifs et un peu de mystère : un tableau de l'Espagne du Sud.",
    listenFor: "Écoute les petites notes rapides : on dirait des motifs qui brillent sur un mur.",
    color: "violet",
  },
  {
    id: "p-la-catedral",
    title: "La Catedral",
    composer: "Agustín Barrios",
    performer: "Ana Vidović",
    youtubeId: "KCE5aPnB5aI",
    duration: "6:06",
    story: "Barrios imagine une entrée dans une cathédrale : d'abord une prière calme, puis les cloches et les pas se rapprochent. Trois mouvements, trois lumières.",
    listenFor: "Le début est lent, comme une prière ; la dernière partie devient rapide. Tape doucement sur ton genou quand la vitesse change.",
    color: "violet",
  },
  {
    id: "p-sevilla",
    title: "Sevilla",
    composer: "Isaac Albéniz",
    performer: "Jaxon Williams",
    youtubeId: "iAi2dwa7FqA",
    duration: "5:31",
    story: "Albéniz a écrit cette danse du sud de l'Espagne pour le piano. À la guitare, on dirait une fête dans les jardins de Séville.",
    listenFor: "Cherche la mélodie qui revient. Est-elle plus joyeuse à chaque fois ?",
    color: "coral",
  },
  {
    id: "p-romance",
    title: "Romance de Amor",
    composer: "Traditionnel espagnol",
    performer: "Rob MacKillop",
    youtubeId: "2EHW8c85i00",
    duration: "4:17",
    story: "Une mélodie que beaucoup d'enfants reconnaissent tout de suite. La voix chante au-dessus d'une basse qui marche doucement.",
    listenFor: "Fredonne la mélodie, puis écoute la basse. On dirait deux personnes qui se promènent ensemble.",
    color: "sky",
  },
  {
    id: "p-lagrima",
    title: "Lágrima",
    composer: "Francisco Tárrega",
    performer: "Andres Madariaga",
    youtubeId: "VYMLJ6J9HQ8",
    duration: "2:47",
    story: "Une petite pièce très douce. Son nom veut dire « larme », mais la musique peut aussi raconter un souvenir heureux.",
    listenFor: "Écoute la première phrase et la dernière. Est-ce qu'elles se ressemblent ?",
    color: "sun",
  },
  {
    id: "p-el-colibri",
    title: "El Colibri",
    composer: "Julio Salvador Sagreras",
    performer: "Xuefei Yang",
    youtubeId: "w-MxoAHWGIM",
    duration: "1:10",
    story: "Le colibri est un oiseau qui reste suspendu en l'air. Les notes rapides imitent le battement de ses ailes.",
    listenFor: "Avant la fin, combien de fois entends-tu les ailes battre ?",
    color: "mint",
  },
  {
    id: "p-cancion-para-ti",
    title: "Canción para ti",
    composer: "Aureo Puerta Carreño",
    performer: "David Russell",
    youtubeId: "JiYnNTbFx4U",
    duration: "3:58",
    story: "Une chanson vénézuélienne qui parle doucement, comme une voix au crépuscule. Elle est courte mais très chaleureuse.",
    listenFor: "Écoute-la comme une chanson et fredonne avec « la ». Où reprends-tu ton souffle ?",
    color: "pink",
  },
  {
    id: "p-vals-venezolano",
    title: "Vals Venezolano No. 3",
    composer: "Antonio Lauro",
    performer: "Ana Vidović",
    youtubeId: "fXwtIIpHlUE",
    duration: "2:44",
    story: "Lauro transforme une danse populaire du Venezuela en valse pour guitare. Le rythme à trois temps tourne comme une robe.",
    listenFor: "Dessine un cercle avec ta main et cherche le 1–2–3. Quelle partie tourne le plus vite ?",
    color: "mint",
  },
  {
    id: "p-el-noi",
    title: "El Noi de la Mare",
    composer: "Chanson traditionnelle catalane",
    performer: "Tatyana Ryzhkova",
    youtubeId: "2Q9KRbP2BRY",
    duration: "3:21",
    story: "Une berceuse catalane arrangée pour guitare par Miguel Llobet. On dirait un adulte qui chante doucement au bord d'un lit.",
    listenFor: "Est-ce que cela ressemble à une berceuse ? La musique te donne-t-elle envie de te balancer ?",
    color: "violet",
  },
];

export type FrArtist = {
  name: string;
  country: string;
  keyword: string;
  bio: string;
  fun: string;
  videoId: string;
  piece: string;
  initials: string;
  color: "violet" | "sky" | "pink" | "mint" | "sun" | "coral";
};

export const ARTISTS_FR: FrArtist[] = [
  {
    name: "Andrés Segovia",
    country: "Espagne",
    keyword: "Celui qui a fait entrer la guitare dans les grandes salles",
    bio: "Guitariste espagnol du XXe siècle, il a parcouru le monde et demandé de nouvelles œuvres aux compositeurs.",
    fun: "Ses élèves et les élèves de ses élèves sont devenus des guitaristes importants.",
    videoId: "KQP0c17tqg0",
    piece: "Prélude BWV 999",
    initials: "AS",
    color: "violet",
  },
  {
    name: "Julian Bream",
    country: "Royaume-Uni",
    keyword: "Un guitariste qui raconte des histoires",
    bio: "Guitariste et luthiste britannique, il aimait les respirations, les silences et les couleurs très variées.",
    fun: "Il a aussi fait redécouvrir de très vieilles musiques pour luth.",
    videoId: "PqfkMgVaOeY",
    piece: "Souvenirs de l'Alhambra",
    initials: "JB",
    color: "sky",
  },
  {
    name: "John Williams",
    country: "Australie / Royaume-Uni",
    keyword: "Un son clair comme du cristal",
    bio: "Sa technique très propre et sa musicalité ont marqué des générations de guitaristes.",
    fun: "Il a enregistré un disque en duo avec Julian Bream.",
    videoId: "gGycDDqBuX8",
    piece: "Cavatina",
    initials: "JW",
    color: "mint",
  },
  {
    name: "Ana Vidović",
    country: "Croatie",
    keyword: "D'enfant prodige à la scène du monde",
    bio: "Elle a commencé très tôt et joue aujourd'hui dans le monde entier avec une grande clarté.",
    fun: "Elle aime partager des pièces spectaculaires comme Asturias.",
    videoId: "inBKFMB-yPg",
    piece: "Asturias",
    initials: "AV",
    color: "coral",
  },
  {
    name: "Pepe Romero",
    country: "Espagne",
    keyword: "Le rythme comme une danse",
    bio: "Membre de la famille Romero, il fait dialoguer guitare classique et flamenco.",
    fun: "Plusieurs générations de sa famille sont guitaristes.",
    videoId: "bIa_-o2O1eQ",
    piece: "Souvenirs de l'Alhambra",
    initials: "PR",
    color: "coral",
  },
  {
    name: "Miloš Karadaglić",
    country: "Monténégro",
    keyword: "Faire découvrir la guitare à un nouveau public",
    bio: "Il mélange tango, musique de film et classique avec une présence très chaleureuse.",
    fun: "Son enthousiasme a amené beaucoup de jeunes à écouter de la guitare classique.",
    videoId: "XU4qm2Esj7o",
    piece: "Libertango",
    initials: "MK",
    color: "violet",
  },
  {
    name: "Xuefei Yang",
    country: "Chine",
    keyword: "Une voix chinoise sur la scène internationale",
    bio: "Guitariste chinoise de renommée internationale, elle joue Bach, l'Espagne et des transcriptions de musique chinoise.",
    fun: "Elle élargit le répertoire de la guitare avec de nouvelles couleurs.",
    videoId: "2lAFKvJGcHA",
    piece: "Capricho Arabe",
    initials: "XY",
    color: "sky",
  },
  {
    name: "Sharon Isbin",
    country: "États-Unis",
    keyword: "Ouvrir de nouveaux chemins pour la guitare",
    bio: "Guitariste et pédagogue, elle a créé le département de guitare de la Juilliard School.",
    fun: "Elle collabore avec des musiciens de styles très différents.",
    videoId: "1N77zyOXfIU",
    piece: "Souvenirs de l'Alhambra",
    initials: "SI",
    color: "pink",
  },
];

export type FrListeningGame = { title: string; body: string; icon: "book" | "ear" | "sun" | "compass" };

export const LISTENING_GAMES_FR: FrListeningGame[] = [
  { title: "Détective d'histoire", body: "Avant d'écouter, imagine un décor : forêt, étoiles, tempête. Après, raconte ce que tu as vu.", icon: "book" },
  { title: "Radar aigu / grave", body: "Lève la main quand la mélodie monte. Touche tes genoux quand la basse arrive.", icon: "ear" },
  { title: "Thermomètre des émotions", body: "Bleu pour le calme, jaune pour la joie, rouge pour l'énergie. La couleur change-t-elle ?", icon: "sun" },
  { title: "Pas de danse", body: "Trouve le battement et tape du pied. Ne cherche pas à tout analyser.", icon: "compass" },
];

export const ETIQUETTE_FR = [
  "Arrive un peu avant le concert et mets ton téléphone en silence.",
  "Pendant la musique, on reste calme et on chuchote seulement si c'est nécessaire.",
  "On applaudit après chaque morceau et quand l'artiste salue.",
  "Pas de flash ni de vidéo sans autorisation.",
  "Un enfant qui bouge, c'est normal. Une petite feuille et un crayon peuvent aider.",
  "En ligne, garde un volume confortable et fais une pause pour les oreilles.",
];

export const COMPOSERS_FR = [
  { name: "Jean-Sébastien Bach", years: "1685–1750", country: "Allemagne", fact: "Ses musiques ressemblent à une architecture précise et chaleureuse. Beaucoup de guitaristes les transcrivent.", listening: "Prélude BWV 999 ; Air sur la corde de sol" },
  { name: "Fernando Sor", years: "1778–1839", country: "Espagne", fact: "Ses études sont de vraies petites pièces : elles entraînent les doigts et racontent déjà quelque chose.", listening: "Op. 60 n° 1 ; Op. 31 n° 1" },
  { name: "Mauro Giuliani", years: "1781–1829", country: "Italie", fact: "Il a écrit beaucoup d'exercices pour la main droite et fait de la guitare un petit orchestre.", listening: "Allegro en la mineur ; 120 études de main droite" },
  { name: "Francisco Tárrega", years: "1852–1909", country: "Espagne", fact: "Compositeur et guitariste, il a donné à la guitare des pièces tendres, mystérieuses et très expressives.", listening: "Souvenirs de l'Alhambra ; Capricho Arabe ; Lágrima" },
  { name: "Isaac Albéniz", years: "1860–1909", country: "Espagne", fact: "Ses œuvres pour piano sont devenues des pièces de guitare pleines de couleurs espagnoles.", listening: "Asturias ; Grenade" },
  { name: "Agustín Barrios", years: "1885–1944", country: "Paraguay", fact: "Ses mélodies romantiques ont apporté les couleurs de l'Amérique du Sud au répertoire de la guitare.", listening: "Julia Florida ; La Catedral" },
  { name: "Heitor Villa-Lobos", years: "1887–1959", country: "Brésil", fact: "Il a écrit des études et des préludes qui sentent la forêt, la danse et les rues du Brésil.", listening: "Prélude n° 1 ; Étude n° 1" },
  { name: "Federico Moreno Torroba", years: "1891–1982", country: "Espagne", fact: "Ses pièces évoquent des châteaux et des paysages d'Espagne.", listening: "Torija" },
];
