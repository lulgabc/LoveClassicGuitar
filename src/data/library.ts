export type ResourceKind = "系统课程" | "YouTube" | "网站" | "乐谱" | "考级" | "中文资源" | "听力";

export type Resource = {
  id: string;
  name: string;
  url: string;
  kind: ResourceKind;
  price: "免费" | "免费 + 付费" | "付费";
  lang: "英文" | "中文" | "多语言";
  level: string;
  description: string;
  bestFor: string;
  tags: string[];
  featured?: boolean;
  note?: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "ticg-method",
    name: "This is Classical Guitar · Free Classical Guitar Method",
    url: "https://www.thisisclassicalguitar.com/free-classical-guitar-method-book-pdf/",
    kind: "系统课程",
    price: "免费",
    lang: "英文",
    level: "启蒙 → 进阶",
    description:
      "Bradford Werner 的免费入门教材，包含 PDF、视频、练习曲和曲目。结构清楚，适合作为一条主线，不必到处找零散视频。",
    bestFor: "想按顺序学、需要谱例和讲解的家庭",
    tags: ["主线", "PDF", "视频", "曲目"],
    featured: true,
  },
  {
    id: "cgs-start",
    name: "Classical Guitar Shed · Start Here",
    url: "https://classicalguitarshed.com/start/",
    kind: "系统课程",
    price: "免费 + 付费",
    level: "启蒙 → 初级",
    lang: "英文",
    description:
      "从第一课、练习安排到常见问题，有大量免费文章和视频。讲解亲切，适合家长先读，再挑一小段给孩子。",
    bestFor: "需要“每天到底练什么”的入门家庭",
    tags: ["入门", "练习安排", "免费课", "家长"],
    featured: true,
  },
  {
    id: "cgc",
    name: "Classical Guitar Corner",
    url: "https://www.classicalguitarcorner.com/",
    kind: "系统课程",
    price: "免费 + 付费",
    lang: "英文",
    level: "入门 → 高级",
    description:
      "Simon Powis 创办的古典吉他教育平台。网站有免费课程、播客和文章，完整学院课程为付费。",
    bestFor: "想要更学院派、长期系统学习的家庭",
    tags: ["学院", "播客", "课程", "曲目"],
  },
  {
    id: "tatyana-channel",
    name: "Tatyana Ryzhkova · Guitar",
    url: "https://www.youtube.com/@tatyanaryzhkova",
    kind: "YouTube",
    price: "免费",
    lang: "英文",
    level: "欣赏 + 入门",
    description:
      "演奏、练琴分享和教学片段。她的表达温柔、画面舒服，适合孩子把古典吉他当作“日常声音”。",
    bestFor: "喜欢看女演奏家演奏、想找练琴气氛的孩子",
    tags: ["演奏", "练琴", "女演奏家"],
  },
  {
    id: "tonebase",
    name: "tonebase Guitar",
    url: "https://www.tonebase.co/guitar",
    kind: "系统课程",
    price: "免费 + 付费",
    lang: "英文",
    level: "入门 → 高级",
    description:
      "世界级演奏家的大师课平台。YouTube 有免费片段，完整课程和大师课需要订阅。",
    bestFor: "家长想了解专业练习方法，或孩子已经进入进阶阶段",
    tags: ["大师课", "演奏家", "进阶"],
  },
  {
    id: "kids-dojo",
    name: "Kids Guitar Dojo",
    url: "https://www.youtube.com/@kidsguitardojo",
    kind: "YouTube",
    price: "免费",
    lang: "英文",
    level: "儿童启蒙",
    description:
      "用孩子的语言讲姿势、读谱和第一把琴。短小、节奏轻快，适合 6–9 岁。",
    bestFor: "注意力短、需要孩子语气讲解时",
    tags: ["儿童", "短课", "姿势", "读谱"],
    featured: true,
    note: "通用吉他内容。持琴、拨弦细节请让古典吉他老师检查。",
  },
  {
    id: "kasey",
    name: "Kasey's Music Method",
    url: "https://www.youtube.com/@KaseysMusicMethod",
    kind: "YouTube",
    price: "免费",
    lang: "英文",
    level: "儿童启蒙",
    description:
      "很多“给小朋友的第一课”，用游戏和短句建立“吉他很好玩”的第一印象。",
    bestFor: "还没开始上课、先培养兴趣的孩子",
    tags: ["儿童", "游戏", "第一课"],
    note: "通用吉他（可能为钢弦）示范，不是古典吉他专门课程。",
  },
  {
    id: "delcamp",
    name: "Classical Guitar Delcamp Forum",
    url: "https://www.classicalguitardelcamp.com/",
    kind: "乐谱",
    price: "免费",
    lang: "多语言",
    level: "启蒙 → 高级",
    description:
      "老牌古典吉他论坛，有分级曲谱、技术讨论和录音。下载和使用曲谱前请阅读网站规则与版权说明。",
    bestFor: "老师或家长找分级曲目、查看教学讨论",
    tags: ["论坛", "分级曲谱", "录音", "社区"],
    note: "部分内容需要注册或遵守特定使用条件，不建议让孩子独自下载。",
  },
  {
    id: "imslp",
    name: "IMSLP · Petrucci Music Library",
    url: "https://imslp.org/wiki/Category:For_guitar",
    kind: "乐谱",
    price: "免费",
    lang: "多语言",
    level: "全阶段",
    description:
      "最大的公共领域乐谱库之一。可以找到索尔、朱利亚尼、塔雷加、巴赫等作品的扫描谱。",
    bestFor: "找公版原谱、研究不同版本",
    tags: ["公版", "原谱", "PDF", "作曲家"],
    featured: true,
    note: "同一作品可能有多个版本，指法和编辑不同。给孩子用之前请老师挑选。",
  },
  {
    id: "mutopia",
    name: "Mutopia Project",
    url: "https://www.mutopiaproject.org/",
    kind: "乐谱",
    price: "免费",
    lang: "英文",
    level: "启蒙 → 高级",
    description:
      "由志愿者排版的自由版权乐谱，包含吉他、鲁特琴和古典作品。可以下载 PDF、MIDI 和源文件。",
    bestFor: "需要干净排版、可打印的免费乐谱",
    tags: ["公版", "排版", "PDF", "MIDI"],
  },
  {
    id: "ticg-sheet",
    name: "This is Classical Guitar · Sheet Music",
    url: "https://www.thisisclassicalguitar.com/sheet-music-for-classical-guitar/",
    kind: "乐谱",
    price: "免费 + 付费",
    lang: "英文",
    level: "启蒙 → 进阶",
    description:
      "大量免费与付费曲谱，按难度和风格分类，很多配有视频讲解。",
    bestFor: "找与课程配套的曲目、练习曲",
    tags: ["曲谱", "视频配套", "分级"],
  },
  {
    id: "8notes",
    name: "8notes · Classical Guitar",
    url: "https://www.8notes.com/guitar/",
    kind: "乐谱",
    price: "免费 + 付费",
    lang: "英文",
    level: "启蒙 → 中级",
    description:
      "按难度和风格分类的免费曲谱，适合找熟悉的旋律和轻松小品。部分功能需要会员。",
    bestFor: "找《欢乐颂》《小星星》这类熟悉旋律的简易版本",
    tags: ["简易曲", "旋律", "免费"],
  },
  {
    id: "musescore",
    name: "MuseScore",
    url: "https://musescore.com/",
    kind: "乐谱",
    price: "免费 + 付费",
    lang: "多语言",
    level: "全阶段",
    description:
      "用户上传的乐谱社区。资源很多，但质量、指法和版权状态参差，适合在老师指导下参考。",
    bestFor: "想找某个版本的指法或伴奏",
    tags: ["社区乐谱", "指法", "参考"],
    note: "注意版权。不要下载或传播未经授权的商业教材和改编。",
  },
  {
    id: "abrsm",
    name: "ABRSM · Classical Guitar",
    url: "https://www.abrsm.org/",
    kind: "考级",
    price: "付费",
    lang: "英文",
    level: "启蒙 → 高级",
    description:
      "英国皇家音乐学院联合委员会的考级体系。古典吉他分初始级到第 8 级，有音阶、曲目和视奏等环节。",
    bestFor: "想要外部目标、系统曲目库的家庭",
    tags: ["考级", "曲目库", "英国"],
    note: "考级不是必修。可以先和老师讨论，不要为了级别跳过基础。",
  },
  {
    id: "trinity",
    name: "Trinity College London · Music",
    url: "https://www.trinitycollege.com/",
    kind: "考级",
    price: "付费",
    lang: "英文",
    level: "启蒙 → 高级",
    description:
      "另一种国际音乐考级体系，古典吉他从入门级到高级都有。曲目选择相对灵活。",
    bestFor: "希望用演奏和作品集展示进步的家庭",
    tags: ["考级", "演奏", "国际"],
  },
  {
    id: "rcm",
    name: "The Royal Conservatory · Classical Guitar",
    url: "https://www.rcmusic.com/",
    kind: "考级",
    price: "付费",
    lang: "英文",
    level: "启蒙 → 高级",
    description:
      "加拿大皇家音乐学院的古典吉他考级与教材体系，分级曲集和练习曲编排清楚，常被老师用作曲目库。",
    bestFor: "想要一套循序渐进的曲目与练习曲",
    tags: ["考级", "分级曲集", "练习曲"],
  },
  {
    id: "cgm",
    name: "Classical Guitar Magazine",
    url: "https://classicalguitarmagazine.com/",
    kind: "网站",
    price: "免费 + 付费",
    lang: "英文",
    level: "家长/老师",
    description:
      "古典吉他新闻、访谈、唱片评论和教学文章。可以认识正在活跃的演奏家和新唱片。",
    bestFor: "家长拓展视野、了解古典吉他世界正在发生什么",
    tags: ["新闻", "访谈", "唱片"],
  },
  {
    id: "siccas",
    name: "Siccas Guitars · YouTube",
    url: "https://www.youtube.com/@SiccasGuitars",
    kind: "听力",
    price: "免费",
    lang: "英文",
    level: "全阶段",
    description:
      "高质量演奏视频和名琴录音，演奏家包括 Ana Vidović、Marcin Dylla、Tatyana Ryzhkova 等。",
    bestFor: "每天听一首、感受不同琴和演奏家的音色",
    tags: ["演奏", "音色", "名琴"],
    featured: true,
  },
  {
    id: "gsi",
    name: "Guitar Salon International · YouTube",
    url: "https://www.youtube.com/@Guitarsalon",
    kind: "听力",
    price: "免费",
    lang: "英文",
    level: "全阶段",
    description:
      "录音干净的演奏视频，曲目和演奏家很多，适合作为家庭音乐厅的片单。",
    bestFor: "听完整曲目、观察左右手",
    tags: ["演奏", "曲目", "名琴"],
  },
  {
    id: "bilibili",
    name: "B 站：古典吉他搜索",
    url: "https://search.bilibili.com/all?keyword=%E5%8F%A4%E5%85%B8%E5%90%89%E4%BB%96",
    kind: "中文资源",
    price: "免费",
    lang: "中文",
    level: "全阶段",
    description:
      "中文古典吉他视频入口。可以找中文讲解、演奏和课程片段，但质量参差，建议优先选择有系统目录、讲得慢、带谱例的 up 主。",
    bestFor: "需要中文术语和讲解的家庭",
    tags: ["中文", "视频", "搜索"],
    featured: true,
    note: "搜索结果不是本站推荐。请家长先筛选，避免广告、付费诱导和不适合儿童的内容。",
  },
  {
    id: "bilibili-kids",
    name: "B 站：儿童古典吉他搜索",
    url: "https://search.bilibili.com/all?keyword=%E5%84%BF%E7%AB%A5%E5%8F%A4%E5%85%B8%E5%90%89%E4%BB%96",
    kind: "中文资源",
    price: "免费",
    lang: "中文",
    level: "儿童启蒙",
    description:
      "更聚焦儿童古典吉他的中文视频入口，可能包含老师示范、陪练和演出。",
    bestFor: "想听中文讲解、找同龄孩子演奏灵感",
    tags: ["中文", "儿童", "演示"],
    note: "请家长陪同筛选；不要以“神童视频”作为孩子的比较标准。",
  },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  kind: "启蒙教材" | "曲集 / 练习曲" | "技术参考" | "分级曲集" | "家长 / 老师";
  level: string;
  description: string;
  why: string;
  link?: string;
  linkLabel?: string;
  free?: boolean;
  note?: string;
};

export const BOOKS: Book[] = [
  {
    id: "shearer",
    title: "Learning the Classic Guitar, Part 1",
    author: "Aaron Shearer",
    kind: "启蒙教材",
    level: "大孩子 / 成人 / 老师",
    description:
      "非常系统的古典吉他基础教材，从坐姿、右手靠弦到读谱，步骤细，练习设计严谨。",
    why: "如果老师采用传统体系，这是一本很好的技术地基。对 7 岁孩子可能偏“教材感”，适合家长和老师先读。",
    note: "Mel Bay 出版，付费教材。",
  },
  {
    id: "sagreras",
    title: "Las Primeras Lecciones de Guitarra",
    author: "Julio Salvador Sagreras",
    kind: "曲集 / 练习曲",
    level: "启蒙 → 初级",
    description:
      "阿根廷吉他教育家萨格拉斯的初级教程，短小练习和旋律很多，循序渐进。",
    why: "音乐性强、篇幅短，适合老师从里面挑选。许多曲子已经进入公共领域。",
    link: "https://imslp.org/wiki/Las_lecciones_de_guitarra_(Sagreras,_Julio_Salvador)",
    linkLabel: "IMSLP 免费乐谱",
    free: true,
    note: "原版说明为西班牙语，指法可能需要老师调整。",
  },
  {
    id: "carulli",
    title: "Méthode complète, Op.27",
    author: "Ferdinando Carulli",
    kind: "曲集 / 练习曲",
    level: "启蒙 → 中级",
    description:
      "古典主义时期的重要吉他教程，包含基础、音阶、和弦、练习曲和小品。",
    why: "想理解传统古典吉他教学体系时很有价值。对小朋友不必从头读到尾，可挑短练习。",
    link: "https://imslp.org/wiki/M%C3%A9thode_compl%C3%A8te,_Op.27_(Carulli,_Ferdinando)",
    linkLabel: "IMSLP 免费乐谱",
    free: true,
    note: "法文原版。不同版本编订差异较大。",
  },
  {
    id: "giuliani",
    title: "Studio per la chitarra, Op.1（120 条右手练习）",
    author: "Mauro Giuliani",
    kind: "曲集 / 练习曲",
    level: "启蒙 → 进阶",
    description:
      "古典吉他右手琶音练习的宝库。通过不同的弦组合训练 p、i、m、a 的分工和均匀。",
    why: "每天挑 2–4 条慢练，比一次性刷很多条更有效。是建立右手稳定性的经典材料。",
    link: "https://imslp.org/wiki/Studio_per_la_chitarra,_Op.1_(Giuliani,_Mauro)",
    linkLabel: "IMSLP 免费乐谱",
    free: true,
    note: "原版为早期吉他记谱；现代版本会重新标注指法。",
  },
  {
    id: "sor-op31",
    title: "24 Progressive Lessons, Op.31",
    author: "Fernando Sor",
    kind: "曲集 / 练习曲",
    level: "初级 → 中级",
    description:
      "索尔为初学者写的进阶练习曲，短小、音乐性很强，能同时训练旋律、低音和读谱。",
    why: "当孩子能完整弹 8–16 小节后，可以从最简单的几首开始。Sor Op.31 No.1 是很受欢迎的入门曲。",
    link: "https://imslp.org/wiki/24_Progressive_Lessons_For_Beginners,_Op.31_(Sor,_Fernando)",
    linkLabel: "IMSLP 免费乐谱",
    free: true,
    note: "不同版本指法差异很大，建议老师选版本。",
  },
  {
    id: "noad",
    title: "Solo Guitar Playing, Book 1",
    author: "Frederick Noad",
    kind: "启蒙教材",
    level: "大孩子 / 成人",
    description:
      "很完整的自学型古典吉他教材，读谱、技巧和曲目循序渐进，适合有一点自律的学习者。",
    why: "如果家长自己想入门或陪练，这会是一本解释清楚的参考书。",
    note: "付费教材，可在图书馆或正规书店寻找。",
  },
  {
    id: "parkening",
    title: "The Christopher Parkening Guitar Method, Vol. 1",
    author: "Christopher Parkening",
    kind: "启蒙教材",
    level: "大孩子 / 成人",
    description:
      "由著名演奏家 Christopher Parkening 编写的经典教材，技术和音乐性并重，配有示范录音。",
    why: "适合想要更传统、更重视音色的学习者。对 7 岁孩子，通常由老师挑选其中材料。",
    note: "Hal Leonard 出版，付费教材。",
  },
  {
    id: "paul-henry",
    title: "Classical Guitar Method",
    author: "Paul Henry",
    kind: "启蒙教材",
    level: "入门",
    description:
      "Hal Leonard 的古典吉他入门教程，谱例和曲目友好，适合作为第一本教材的候选。",
    why: "如果老师同时使用五线谱和 TAB，这本书的入门坡度比较平缓。",
    note: "付费教材。不同版本内容可能有调整，购买前确认。",
  },
  {
    id: "rcm-guitar",
    title: "Classical Guitar Repertoire and Etudes（Prep–Level 1）",
    author: "The Royal Conservatory",
    kind: "分级曲集",
    level: "预备级 → 初级",
    description:
      "RCM 考级体系的分级曲集与练习曲，选曲风格多样，编排清楚，适合作为长期曲目库。",
    why: "即使不考级，也可以按级别选曲，避免只弹一种风格。",
    note: "Frederick Harris Music 出版，付费。级别和曲目会更新，购买前确认版本。",
  },
  {
    id: "abrsm-pieces",
    title: "ABRSM Guitar Exam Pieces（Initial–Grade 1）",
    author: "ABRSM",
    kind: "分级曲集",
    level: "初始级 → 一级",
    description:
      "ABRSM 考级曲集，包含不同时期和风格的小曲，配有指法和演奏提示。",
    why: "想要外部目标和多样曲目时，是很好的参考。却不是每个孩子都必须考的级。",
    note: "付费曲集，考纲会换版。请以 ABRSM 官网当前信息为准。",
  },
  {
    id: "pumping-nylon",
    title: "Pumping Nylon",
    author: "Scott Tennant",
    kind: "技术参考",
    level: "中级 → 高级",
    description:
      "现代古典吉他技术训练书，包含热身、右手、左手、音阶和琶音练习。",
    why: "非常有用，但不是给初学者的第一本书。等孩子有稳定基础、由老师指导时再使用。",
    note: "Alfred 出版，付费。不要让孩子独自照书做高强度练习。",
  },
  {
    id: "duncan",
    title: "The Art of Classical Guitar Playing",
    author: "Charles Duncan",
    kind: "家长 / 老师",
    level: "老师 / 高阶家长",
    description:
      "从技术、声音和音乐性角度解释古典吉他演奏的经典参考书，适合老师和深度陪伴的家长。",
    why: "当你想知道“为什么老师这样要求”时，可以查它。",
    note: "付费/可能绝版，可在图书馆寻找。",
  },
];

export type SheetSource = {
  name: string;
  url: string;
  description: string;
  tags: string[];
};

export const SHEET_SOURCES: SheetSource[] = [
  {
    name: "This is Classical Guitar · Free Sheet Music",
    url: "https://www.thisisclassicalguitar.com/sheet-music-for-classical-guitar/",
    description: "按难度和风格整理的免费/付费曲谱，很多有配套讲解。",
    tags: ["分级", "视频配套", "免费 + 付费"],
  },
  {
    name: "IMSLP · Guitar",
    url: "https://imslp.org/wiki/Category:For_guitar",
    description: "公共领域原谱的大宝库；版本多，需要老师帮忙挑选。",
    tags: ["公版", "原谱", "历史版本"],
  },
  {
    name: "Mutopia · Guitar",
    url: "https://www.mutopiaproject.org/cgibin/make-table.cgi?Instrument=Guitar",
    description: "志愿者排版的自由版权乐谱，PDF 干净，适合打印。",
    tags: ["公版", "PDF", "MIDI"],
  },
  {
    name: "Delcamp Classical Guitar Forum",
    url: "https://www.classicalguitardelcamp.com/",
    description: "分级曲谱和教学讨论；下载前先看网站规则和版权说明。",
    tags: ["论坛", "分级", "社区"],
  },
  {
    name: "8notes · Guitar",
    url: "https://www.8notes.com/guitar/",
    description: "熟悉旋律的简易版本很多，适合补充曲目和娱乐。",
    tags: ["简易", "旋律", "免费"],
  },
  {
    name: "MuseScore",
    url: "https://musescore.com/",
    description: "社区乐谱；质量与版权状态不一，适合在老师指导下参考。",
    tags: ["社区", "参考", "版权需注意"],
  },
];

export type ExamBoard = {
  name: string;
  url: string;
  what: string;
  why: string;
  caveat: string;
};

export const EXAM_BOARDS: ExamBoard[] = [
  {
    name: "ABRSM 英皇考级",
    url: "https://www.abrsm.org/",
    what: "初始级到第 8 级，包含曲目、音阶、视奏、听力等。",
    why: "曲目库成熟，目标清晰，国际上认可度高。",
    caveat: "考纲会定期更新。不要为了赶级跳过基础；演奏考试也不是唯一的成长方式。",
  },
  {
    name: "Trinity 圣三一考级",
    url: "https://www.trinitycollege.com/",
    what: "入门级到高级，演奏、技术练习和音乐素养并重。",
    why: "曲目选择较灵活，适合想用作品展示进步的孩子。",
    caveat: "同样以当前官网信息为准。对孩子来说，准备过程比证书重要。",
  },
  {
    name: "RCM 加拿大皇家音乐学院",
    url: "https://www.rcmusic.com/",
    what: "分级教材、曲集和考级体系，从预备级到高级。",
    why: "分级曲集和练习曲编排清楚，很多老师直接把它当曲目库。",
    caveat: "不是每个国家都方便参加考试；教材和考纲也会更新。",
  },
];

export const LIBRARY_FEATURED = RESOURCES.filter((resource) => resource.featured);

export const RESOURCE_KINDS: ResourceKind[] = [
  "系统课程",
  "YouTube",
  "网站",
  "乐谱",
  "考级",
  "中文资源",
  "听力",
];
