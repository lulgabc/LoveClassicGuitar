export type ConcertMood = "安静" | "激动" | "跳舞" | "故事" | "梦幻";

export type Performance = {
  id: string;
  title: string;
  composer: string;
  performer: string;
  youtubeId: string;
  duration: string;
  mood: ConcertMood[];
  story: string;
  listenFor: string;
  stageTip: string;
  color: "violet" | "sky" | "pink" | "mint" | "sun" | "coral";
  featured?: boolean;
};

export const PERFORMANCES: Performance[] = [
  {
    id: "p-asturias",
    title: "《阿斯图里亚斯》Asturias",
    composer: "伊萨克·阿尔贝尼兹",
    performer: "安娜·维多维奇 Ana Vidović",
    youtubeId: "inBKFMB-yPg",
    duration: "7:15",
    mood: ["激动", "故事"],
    story:
      "这首曲子原来是写给钢琴的，后来被改编成吉他曲。低音像马蹄，高音像风，听起来像一座西班牙古堡里正在发生冒险。",
    listenFor: "听到突然变快、变响的地方，举起一只手；听到安静下来时，把手放下。",
    stageTip: "Ana 的表情和身体很稳。注意她怎样在很快的音里保持坐姿不乱。",
    color: "coral",
    featured: true,
  },
  {
    id: "p-recuerdos",
    title: "《阿尔罕布拉宫的回忆》Recuerdos de la Alhambra",
    composer: "弗朗西斯科·塔雷加",
    performer: "安娜·维多维奇 Ana Vidović",
    youtubeId: "fwjX-m4LkYk",
    duration: "5:11",
    mood: ["安静", "梦幻"],
    story:
      "塔雷加想象着西班牙格拉纳达的阿尔罕布拉宫。高音像一颗颗水珠反复落下，其实那是吉他最著名的“轮指”魔法。",
    listenFor: "先找那条会唱歌的高音旋律，再听它下面轻轻流动的低音。",
    stageTip: "轮指听起来像一长条声音，但每个音都是手指单独拨出来的。",
    color: "violet",
    featured: true,
  },
  {
    id: "p-bwv999",
    title: "《c 小调前奏曲》BWV 999",
    composer: "约翰·塞巴斯蒂安·巴赫",
    performer: "玛丽莎·戈麦斯 Marisa Gómez",
    youtubeId: "L78_akS7mEc",
    duration: "2:13",
    mood: ["安静", "故事"],
    story:
      "巴赫生活在 300 多年前。这首前奏曲像一台不停转动的小时钟，音一个接一个，安安静静却有方向。",
    listenFor: "跟着低音走，像数着楼梯向下走。最后一句有没有回到“家”的感觉？",
    stageTip: "玛丽莎的演奏很安静。注意她怎样让每个音均匀地落下。",
    color: "sky",
    featured: true,
  },
  {
    id: "p-julia-florida",
    title: "《Julia Florida》",
    composer: "奥古斯丁·巴里奥斯",
    performer: "贝尔塔·罗哈斯 Berta Rojas",
    youtubeId: "Jae7yWM5W4A",
    duration: "4:28",
    mood: ["安静", "跳舞", "梦幻"],
    story:
      "巴拉圭作曲家巴里奥斯的作品，像一条在月光下轻轻摇晃的小船。三拍子的节奏让身体忍不住跟着摆。",
    listenFor: "用手在空中画小波浪：每一拍轻轻点一下，找出 1–2–3 的摇摆。",
    stageTip: "Berta Rojas 来自巴拉圭，特别擅长演奏巴里奥斯的音乐。",
    color: "mint",
  },
  {
    id: "p-torija",
    title: "《托里哈》Torija",
    composer: "费德里科·莫雷诺·托罗巴",
    performer: "塔季扬娜·雷日科娃 Tatyana Ryzhkova",
    youtubeId: "Tsqfnj-PC0k",
    duration: "3:47",
    mood: ["安静", "故事", "梦幻"],
    story:
      "托罗巴为西班牙的一座座古堡写了音乐。《托里哈》像黄昏时打开一扇旧窗，远处有钟声，也有一点点想念。",
    listenFor: "听到旋律换气的地方，轻轻吸一口气。你能找到几个乐句？",
    stageTip: "注意她右手的触弦位置变化，声音会变得更亮或更柔。",
    color: "sun",
  },
  {
    id: "p-libertango",
    title: "《自由探戈》Libertango",
    composer: "阿斯托尔·皮亚佐拉",
    performer: "杰利尔·雷菲克·卡亚 Celil Refik Kaya",
    youtubeId: "jno0YT7hX5I",
    duration: "3:19",
    mood: ["激动", "跳舞"],
    story:
      "皮亚佐拉把阿根廷探戈带进了音乐会。这首曲子有很鲜明的“脚步”，像有人在夜里跳舞，越跳越有劲。",
    listenFor: "用脚轻轻点地找重拍。哪一段突然变得更激动？",
    stageTip: "Celil 的版本只有一把吉他，却能让人听见整个探戈乐队。",
    color: "pink",
  },
  {
    id: "p-cavatina",
    title: "《卡瓦蒂娜》Cavatina",
    composer: "斯坦利·迈尔斯",
    performer: "安娜·维多维奇 Ana Vidović",
    youtubeId: "HSECkRnpsDE",
    duration: "3:00",
    mood: ["安静", "故事"],
    story:
      "这是一首很温柔的电影音乐，像一个人在月光下慢慢走。旋律简单，却很容易让人想起自己的故事。",
    listenFor: "闭眼听第一分钟，想一个你喜欢的画面。音乐有没有让你的画面变颜色？",
    stageTip: "Ana 的版本很安静。注意她怎样让旋律像呼吸一样起伏。",
    color: "sky",
  },
  {
    id: "p-capricho",
    title: "《阿拉伯风格随想曲》Capricho Árabe",
    composer: "弗朗西斯科·塔雷加",
    performer: "杨雪霏 Xuefei Yang",
    youtubeId: "2lAFKvJGcHA",
    duration: "4:24",
    mood: ["故事", "梦幻"],
    story:
      "塔雷加用旋律画出一幅西班牙南方的画：拱门、花纹、阳光和一点点神秘。它是古典吉他最受欢迎的曲子之一。",
    listenFor: "听到快速的装饰音时，想象那是墙上的花纹在闪动。",
    stageTip: "杨雪霏是活跃在世界舞台的中国古典吉他演奏家。",
    color: "violet",
    featured: true,
  },
  {
    id: "p-sauvages",
    title: "《野人》Les Sauvages",
    composer: "让-菲利普·拉莫",
    performer: "拉斐尔·弗亚尔特 Raphaël Feuillâtre",
    youtubeId: "rHtTEEejrbo",
    duration: "2:35",
    mood: ["跳舞", "激动"],
    story:
      "这是 18 世纪法国作曲家拉莫的舞曲，后来被改编成吉他版。名字叫“野人”，但音乐其实像一场非常整齐、非常快的舞蹈。",
    listenFor: "数一数开头主题出现了几次。每次回来，速度或力度有没有变化？",
    stageTip: "看演奏家的左手怎样轻巧地移动，像在指板上跳格子。",
    color: "mint",
  },
  {
    id: "p-parting-glass",
    title: "《离别之杯》The Parting Glass",
    composer: "苏格兰/爱尔兰传统歌曲",
    performer: "劳拉·斯诺登 Laura Snowden",
    youtubeId: "pJLte9a9fZc",
    duration: "2:19",
    mood: ["安静", "故事"],
    story:
      "这是一首告别的歌，常在聚会结束时唱。吉他把它变成了一个人的晚安，温柔但不悲伤。",
    listenFor: "它像一首歌。试着用“啦——”跟着哼，看看你能不能找到换气的地方。",
    stageTip: "这是 Laura Snowden 自己的改编。同一个旋律可以有很多种弹法。",
    color: "sun",
  },
  {
    id: "p-la-catedral",
    title: "《大教堂》La Catedral",
    composer: "奥古斯丁·巴里奥斯",
    performer: "安娜·维多维奇 Ana Vidović",
    youtubeId: "KCE5aPnB5aI",
    duration: "6:06",
    mood: ["安静", "故事", "梦幻"],
    story:
      "巴里奥斯想象自己走进一座大教堂：先是安静的祈祷，然后钟声和脚步越来越近。三个乐章像三段不同的光。",
    listenFor: "第一段很慢，像在祈祷；最后一段突然变得很快。听到速度变化时，用手指轻轻敲一下膝盖。",
    stageTip: "同一首曲子可以有完全不同的情绪。注意 Ana 怎样让快速的段落仍然清楚。",
    color: "violet",
  },
  {
    id: "p-sevilla",
    title: "《塞维利亚》Sevilla",
    composer: "伊萨克·阿尔贝尼兹",
    performer: "杰克森·威廉姆斯 Jaxon Williams",
    youtubeId: "iAi2dwa7FqA",
    duration: "5:31",
    mood: ["激动", "跳舞", "故事"],
    story:
      "阿尔贝尼兹用钢琴写下西班牙南方的舞蹈，吉他版像一场在塞维利亚宫殿下进行的节日。",
    listenFor: "找一找重复出现的旋律，它每次回来是不是更热闹？",
    stageTip: "Jaxon 的演奏很有舞蹈感。注意他怎样让低音推动节奏。",
    color: "coral",
  },
  {
    id: "p-romance",
    title: "《爱的罗曼史》Romance de Amor",
    composer: "西班牙传统曲调",
    performer: "罗布·麦基洛普 Rob MacKillop",
    youtubeId: "2EHW8c85i00",
    duration: "4:17",
    mood: ["安静", "梦幻"],
    story:
      "这是一首很多人第一次听就会记住的吉他曲。旋律像一条温柔的线，低音像脚步一样慢慢走。",
    listenFor: "先哼出高音旋律，再听低音。两条线是不是像两个人一起散步？",
    stageTip: "Rob 的版本很朴素。注意他怎样让旋律自然呼吸。",
    color: "sky",
  },
  {
    id: "p-lagrima",
    title: "《泪》Lágrima",
    composer: "弗朗西斯科·塔雷加",
    performer: "安德烈斯·马达里亚加 Andres Madariaga",
    youtubeId: "VYMLJ6J9HQ8",
    duration: "2:47",
    mood: ["安静", "故事"],
    story:
      "一首很短、很温柔的小品。名字叫《泪》，但音乐不一定是伤心，也可以是想念。",
    listenFor: "听第一句和最后一句。它们一样吗？音乐有没有回到开始的地方？",
    stageTip: "短曲子也可以有很大的呼吸。注意每个乐句结束时的停顿。",
    color: "sun",
  },
  {
    id: "p-el-colibri",
    title: "《蜂鸟》El Colibri",
    composer: "胡利奥·萨尔瓦多·萨格拉斯",
    performer: "杨雪霏 Xuefei Yang",
    youtubeId: "w-MxoAHWGIM",
    duration: "1:10",
    mood: ["激动", "跳舞"],
    story:
      "蜂鸟是世界上最会悬停的小鸟。这首曲子用很快的音符模仿它扇动翅膀的样子。",
    listenFor: "音乐停下来之前，你能听到几次“翅膀”的声音？",
    stageTip: "只有一分多钟，但每个音都很清楚。快，不等于乱。",
    color: "mint",
  },
  {
    id: "p-cancion-para-ti",
    title: "《给你的歌》Canción para ti",
    composer: "奥雷奥·普埃尔塔·卡雷尼奥",
    performer: "大卫·罗素 David Russell",
    youtubeId: "JiYnNTbFx4U",
    duration: "3:58",
    mood: ["安静", "故事", "梦幻"],
    story:
      "一首委内瑞拉作曲家的歌，像有人在黄昏里轻轻对你说话。旋律不长，却很有温度。",
    listenFor: "把它当成一首歌，试着用“啦”跟着唱。你会在哪里换气？",
    stageTip: "David Russell 的音色很温暖。注意他怎样让一个音慢慢消失。",
    color: "pink",
  },
  {
    id: "p-vals-venezolano",
    title: "《委内瑞拉圆舞曲第三号》Vals Venezolano No. 3",
    composer: "安东尼奥·劳罗",
    performer: "安娜·维多维奇 Ana Vidović",
    youtubeId: "fXwtIIpHlUE",
    duration: "2:44",
    mood: ["跳舞", "激动"],
    story:
      "劳罗把委内瑞拉的民间舞曲写成了吉他圆舞曲。三拍子的节奏像裙摆一样转起来。",
    listenFor: "用手画圆圈，找 1–2–3 的旋转。哪一段转得最快？",
    stageTip: "圆舞曲的重拍在第一拍。听 Ana 怎样让伴奏轻轻托住旋律。",
    color: "mint",
  },
  {
    id: "p-el-noi",
    title: "《圣母之子》El Noi de la Mare",
    composer: "加泰罗尼亚传统民谣",
    performer: "塔季扬娜·雷日科娃 Tatyana Ryzhkova",
    youtubeId: "2Q9KRbP2BRY",
    duration: "3:21",
    mood: ["安静", "故事"],
    story:
      "一首加泰罗尼亚的摇篮曲，被米格尔·柳贝特改编成吉他曲。像一位大人在孩子床边轻轻唱歌。",
    listenFor: "听它像不像摇篮曲。音乐有没有让你想慢慢摇？",
    stageTip: "民谣改编曲常常保留原来的歌。试着找出它的“歌词”在哪里呼吸。",
    color: "violet",
  },
];

export type Master = {
  id: string;
  name: string;
  zhName: string;
  country: string;
  keyword: string;
  bio: string;
  funFact: string;
  videoId: string;
  piece: string;
  color: "violet" | "sky" | "pink" | "mint" | "sun" | "coral";
  initials: string;
  photo: string;
  photoUrl: string;
  photoCredit: string;
  photoLicense: string;
};

export const MASTERS: Master[] = [
  {
    id: "segovia",
    name: "Andrés Segovia",
    zhName: "安德烈斯·塞戈维亚",
    country: "西班牙",
    keyword: "把吉他带进大音乐厅",
    bio: "20 世纪最有影响力的古典吉他演奏家之一。他到处巡演、委托作曲家写作品，让古典吉他不再只是客厅里的乐器。",
    funFact: "他一生都在巡演和教学，许多学生后来也成了重要的吉他演奏家。",
    videoId: "KQP0c17tqg0",
    piece: "巴赫《c 小调前奏曲》",
    color: "violet",
    initials: "AS",
    photo: "artists/segovia.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Andr%C3%A9s_Segovia_(1962).jpg",
    photoCredit: "Jack de Nijs / Anefo，荷兰国家档案馆",
    photoLicense: "CC0",
  },
  {
    id: "bream",
    name: "Julian Bream",
    zhName: "朱利安·布里姆",
    country: "英国",
    keyword: "让吉他会讲故事",
    bio: "英国古典吉他与鲁特琴演奏家。他的演奏像说话：有呼吸、有停顿、有幽默，也把很多古老的鲁特琴音乐带回了舞台。",
    funFact: "他既弹古典吉他，也弹鲁特琴，让很多几百年前的古老音乐重新被听见。",
    videoId: "PqfkMgVaOeY",
    piece: "塔雷加《阿尔罕布拉宫的回忆》",
    color: "sky",
    initials: "JB",
    photo: "artists/bream.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Julian_Bream_1964.JPG",
    photoCredit: "S. Hurok / Wikimedia Commons",
    photoLicense: "公有领域",
  },
  {
    id: "john-williams",
    name: "John Williams",
    zhName: "约翰·威廉姆斯",
    country: "澳大利亚 / 英国",
    keyword: "水晶一样清楚的声音",
    bio: "技术极其干净的古典吉他演奏家，也是让吉他跨界合作、走进更多音乐厅的人。他弹的《卡瓦蒂娜》是很多人的第一首古典吉他记忆。",
    funFact: "他和布里姆录过一张二重奏专辑，两位大师像两个好朋友在聊天。",
    videoId: "gGycDDqBuX8",
    piece: "迈尔斯《卡瓦蒂娜》",
    color: "mint",
    initials: "JW",
    photo: "artists/john-williams.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Guitarist_John_Williams_in_performance_(Cordoba,_1986).jpg",
    photoCredit: "Kealow / Wikimedia Commons",
    photoLicense: "公有领域",
  },
  {
    id: "pepe-romero",
    name: "Pepe Romero",
    zhName: "佩佩·罗梅罗",
    country: "西班牙",
    keyword: "节奏像跳舞",
    bio: "罗梅罗吉他家族的重要成员，既弹古典也弹弗拉门戈。他的演奏有强烈的歌唱性和西班牙舞蹈的呼吸。",
    funFact: "罗梅罗家族几代人都弹吉他，家里像一支小小的吉他乐队。",
    videoId: "bIa_-o2O1eQ",
    piece: "塔雷加《阿尔罕布拉宫的回忆》",
    color: "coral",
    initials: "PR",
    photo: "artists/pepe-romero.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Pepe_Romero_2000.JPG",
    photoCredit: "Hans Bernhard（Schnobby）/ Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
  },
  {
    id: "david-russell",
    name: "David Russell",
    zhName: "大卫·罗素",
    country: "苏格兰",
    keyword: "每个音都像在唱歌",
    bio: "以温暖音色和细腻分句著称的古典吉他演奏家。他让旋律自然呼吸，也让很多小作品闪闪发光。",
    funFact: "他常常把练习拆得很慢、很细，最看重的不是快，而是每个音的质量。",
    videoId: "JiYnNTbFx4U",
    piece: "Aureo Puerta Carreño《Canción para ti》",
    color: "sun",
    initials: "DR",
    photo: "artists/david-russell.jpg",
    photoUrl: "https://www.youtube.com/watch?v=JiYnNTbFx4U",
    photoCredit: "Guitar by Masters / YouTube 视频封面",
    photoLicense: "视频封面",
  },
  {
    id: "sharon-isbin",
    name: "Sharon Isbin",
    zhName: "莎朗·伊斯宾",
    country: "美国",
    keyword: "为吉他打开新曲目",
    bio: "格莱美奖得主、茱莉亚学院吉他系创办者。她委托许多作曲家写新作品，也常和不同乐器、不同风格的音乐家合作。",
    funFact: "她让古典吉他和管弦乐团、爵士乐手、甚至不同国家的音乐传统一起对话。",
    videoId: "1N77zyOXfIU",
    piece: "塔雷加《阿尔罕布拉宫的回忆》",
    color: "pink",
    initials: "SI",
    photo: "artists/sharon-isbin.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Sharon_Isbin_2011.jpg",
    photoCredit: "laembajada / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
  },
  {
    id: "ana-vidovic",
    name: "Ana Vidović",
    zhName: "安娜·维多维奇",
    country: "克罗地亚",
    keyword: "从小琴童到世界舞台",
    bio: "克罗地亚古典吉他演奏家，小时候就被称为“吉他神童”，后来在世界各地开音乐会。她的演奏清楚、明亮，舞台气质很稳。",
    funFact: "她很小就开始学琴，后来在国际比赛中被听见，一步步走到世界舞台。",
    videoId: "inBKFMB-yPg",
    piece: "阿尔贝尼兹《阿斯图里亚斯》",
    color: "coral",
    initials: "AV",
    photo: "artists/ana-vidovic.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Ana_Vidovic_with_Guitar_(cropped).jpg",
    photoCredit: "ChuckQuintero / Wikimedia Commons",
    photoLicense: "CC BY-SA 3.0",
  },
  {
    id: "milos",
    name: "Miloš Karadaglić",
    zhName: "米洛什·卡拉达格利奇",
    country: "黑山",
    keyword: "让更多年轻人听见古典吉他",
    bio: "黑山古典吉他演奏家，以亲切的舞台表达和流行、电影、探戈等跨界曲目吸引了很多新听众。",
    funFact: "他把探戈、电影音乐和古典作品带进同一个舞台，让不同年龄的听众都能找到入口。",
    videoId: "XU4qm2Esj7o",
    piece: "皮亚佐拉《自由探戈》",
    color: "violet",
    initials: "MK",
    photo: "artists/milos.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Milo%C5%A1_Karadagli%C4%87_(45235240994).jpg",
    photoCredit: "英国外交、联邦及发展事务部 / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
  },
  {
    id: "xuefei-yang",
    name: "Xuefei Yang",
    zhName: "杨雪霏",
    country: "中国",
    keyword: "把中国声音带上世界舞台",
    bio: "活跃在国际舞台的中国古典吉他演奏家。她演奏西班牙作品、巴赫，也首演和改编中国音乐，让吉他拥有更多东方色彩。",
    funFact: "她常把中国旋律和东方色彩带进吉他，让这件西班牙乐器说出新的语言。",
    videoId: "2lAFKvJGcHA",
    piece: "塔雷加《阿拉伯风格随想曲》",
    color: "sky",
    initials: "XY",
    photo: "artists/xuefei-yang.jpg",
    photoUrl: "https://commons.wikimedia.org/wiki/File:Yangxuefeiphoto.jpg",
    photoCredit: "Alterna2 / Wikimedia Commons",
    photoLicense: "CC BY 2.0",
  },
  {
    id: "alexandra",
    name: "Alexandra Whittingham",
    zhName: "亚历山德拉·惠廷厄姆",
    country: "英国",
    keyword: "在网络上分享古典吉他",
    bio: "新生代英国古典吉他演奏家，用 YouTube、短片和现场演出让更多年轻人认识古典吉他。她的改编和演奏都很亲切。",
    funFact: "她把很多大家熟悉的旋律改编成吉他曲，让古典吉他更容易被第一次听见的人喜欢。",
    videoId: "P7ZLcUYzvnc",
    piece: "塔雷加《阿拉伯风格随想曲》",
    color: "mint",
    initials: "AW",
    photo: "artists/alexandra.jpg",
    photoUrl: "https://www.youtube.com/watch?v=P7ZLcUYzvnc",
    photoCredit: "Alexandra Whittingham / YouTube 视频封面",
    photoLicense: "视频封面",
  },
];

export type Composer = {
  name: string;
  years: string;
  country: string;
  fact: string;
  listening: string;
};

export const COMPOSERS: Composer[] = [
  {
    name: "约翰·塞巴斯蒂安·巴赫",
    years: "1685–1750",
    country: "德国",
    fact: "巴洛克时期的大作曲家。他的音乐像一座精密又温暖的建筑，很多吉他曲都是从他的作品改编来的。",
    listening: "BWV 999 前奏曲；《G 弦上的咏叹调》",
  },
  {
    name: "费尔南多·索尔",
    years: "1778–1839",
    country: "西班牙",
    fact: "古典时期重要的吉他作曲家。他写的练习曲不只是手指训练，也有好听的旋律和清楚的声部。",
    listening: "Op.60 No.1；Op.31 No.1",
  },
  {
    name: "毛罗·朱利亚尼",
    years: "1781–1829",
    country: "意大利",
    fact: "19 世纪著名的吉他演奏家。他写了大量右手练习，让吉他像小乐队一样能同时弹旋律和伴奏。",
    listening: "《A 小调快板》；右手 120 条练习",
  },
  {
    name: "弗朗西斯科·塔雷加",
    years: "1852–1909",
    country: "西班牙",
    fact: "被称作“现代古典吉他之父”之一。他既是演奏家，也写了许多温柔的小品，还改编其他乐器的作品。",
    listening: "《阿尔罕布拉宫的回忆》；《阿拉伯风格随想曲》；《泪》",
  },
  {
    name: "伊萨克·阿尔贝尼兹",
    years: "1860–1909",
    country: "西班牙",
    fact: "他是钢琴家、作曲家，作品充满西班牙南方的色彩。很多吉他演奏家把他的钢琴曲改编成吉他曲。",
    listening: "《阿斯图里亚斯》；《格拉纳达》",
  },
  {
    name: "奥古斯丁·巴里奥斯",
    years: "1885–1944",
    country: "巴拉圭",
    fact: "巴拉圭吉他演奏家和作曲家，作品浪漫、旋律优美，把南美音乐的气质带进了古典吉他。",
    listening: "《Julia Florida》；《大教堂》",
  },
  {
    name: "海托尔·维拉-罗伯斯",
    years: "1887–1959",
    country: "巴西",
    fact: "巴西作曲家，为吉他写了 5 首前奏曲和 12 首练习曲。他的音乐里有巴西的民间节奏和雨林一样的色彩。",
    listening: "《前奏曲第一号》；《练习曲第一号》",
  },
  {
    name: "费德里科·莫雷诺·托罗巴",
    years: "1891–1982",
    country: "西班牙",
    fact: "西班牙作曲家，为吉他写了《西班牙城堡》等作品，音乐像在古老建筑里散步。",
    listening: "《托里哈》",
  },
];

export const LISTENING_GAMES = [
  {
    title: "故事侦探",
    body: "听之前先设定角色：这段音乐是森林、星空还是奔跑？听完说说你看到了什么。没有标准答案。",
    icon: "story",
  },
  {
    title: "高低雷达",
    body: "旋律高的时候举高手，低音出现时拍拍膝盖。用身体感受音乐的高低。",
    icon: "radar",
  },
  {
    title: "情绪温度计",
    body: "给音乐画温度：安静是蓝色，开心是黄色，激动是红色。音乐变化时，温度也跟着变。",
    icon: "temperature",
  },
  {
    title: "节奏脚步",
    body: "先找重拍，再用脚尖轻轻点。不要急着拍手，先让身体找到“走路”的感觉。",
    icon: "steps",
  },
  {
    title: "画一条旋律线",
    body: "拿一张纸，音乐升高就画高，降低就画低。听完你会得到一张只属于你的音乐地图。",
    icon: "draw",
  },
  {
    title: "二刷法",
    body: "第一遍只听整体，第二遍只盯一个细节：低音、速度或某一句。听两次比听十首更有效。",
    icon: "repeat",
  },
];

export const CONCERT_ETIQUETTE = [
  "音乐会开始前把手机调成静音，屏幕亮度调低。",
  "演奏进行中保持安静；需要说话时，先走到外面。",
  "一首曲子结束后再鼓掌。演奏者鞠躬时，可以热情地鼓掌。",
  "不要用闪光灯拍照或录像，先看场馆规定。",
  "小朋友坐不住很正常。可以准备一张小纸和铅笔，安静地画音乐，不要责怪。",
  "在线听音乐会时，音量不超过舒服的程度，每 20–30 分钟让耳朵休息一下。",
];

export const getPerformance = (id: string): Performance | undefined =>
  PERFORMANCES.find((performance) => performance.id === id);
