export type GuitarPart = {
  id: string;
  n: number;
  name: string;
  en: string;
  short: string;
  detail: string;
  x: number;
  y: number;
};

export const GUITAR_PARTS: GuitarPart[] = [
  {
    id: "headstock",
    n: 1,
    name: "琴头",
    en: "Headstock",
    short: "吉他的小皇冠",
    detail:
      "最上面像小皇冠的部分。它不发出声音，却稳稳地托住调音器和琴弦，是每根弦出发的地方。",
    x: 50,
    y: 7,
  },
  {
    id: "pegs",
    n: 2,
    name: "弦轴",
    en: "Tuning machines",
    short: "让琴弦变紧或变松",
    detail:
      "转动弦轴，琴弦就会变紧（音变高）或变松（音变低）。调音时一定要慢慢地、一点点地转，像给小动物顺毛一样温柔。",
    x: 30,
    y: 8.5,
  },
  {
    id: "nut",
    n: 3,
    name: "上弦枕",
    en: "Nut",
    short: "琴弦的小桥",
    detail:
      "琴头和指板之间一条白色的小“桥”。六根弦从它的六个小槽里穿过，再一路走向琴桥。",
    x: 50,
    y: 13.5,
  },
  {
    id: "fretboard",
    n: 4,
    name: "指板",
    en: "Fretboard",
    short: "左手的工作台",
    detail:
      "深色的长条木板，是左手按弦的地方。手指要立起来，用指尖按在品丝的旁边，而不是正正地压在品丝上。",
    x: 50,
    y: 22,
  },
  {
    id: "frets",
    n: 5,
    name: "品丝",
    en: "Frets",
    short: "指板上的小银线",
    detail:
      "一条条银色金属线把指板分成一格一格。每一格叫一个“品”。第 1 品离琴头最近，数字越大，位置越往琴身走。",
    x: 54,
    y: 28,
  },
  {
    id: "neck",
    n: 6,
    name: "琴颈",
    en: "Neck",
    short: "左手的长跑道",
    detail:
      "琴颈让左手可以走到不同的位置。手腕要放松，不要折成直角；大拇指轻轻躲在琴颈后面，不要用力捏。",
    x: 50,
    y: 37,
  },
  {
    id: "strings",
    n: 7,
    name: "琴弦",
    en: "Strings",
    short: "六根会唱歌的线",
    detail:
      "古典吉他用尼龙弦，摸起来比民谣吉他的钢弦柔软。最粗的是第 6 弦，最低；最细的是第 1 弦，最高。",
    x: 50,
    y: 46,
  },
  {
    id: "soundhole",
    n: 8,
    name: "音孔",
    en: "Soundhole",
    short: "声音的门",
    detail:
      "琴弦的振动传给面板，声音再从音孔和琴身里跑出来。不要用手指去戳音孔，也不要把小东西放进去。",
    x: 50,
    y: 63.5,
  },
  {
    id: "soundboard",
    n: 9,
    name: "面板",
    en: "Soundboard",
    short: "会呼吸的木头",
    detail:
      "吉他正面的大块木头。它像鼓面一样振动，把细细的琴弦声变得温暖又响亮。不要让琴晒到太阳，也不要放在暖气旁边。",
    x: 30,
    y: 58,
  },
  {
    id: "bridge",
    n: 10,
    name: "琴桥与下弦枕",
    en: "Bridge & saddle",
    short: "琴弦的终点站",
    detail:
      "琴身下方的木块叫琴桥，上面白色的小条叫下弦枕。六根弦在这里被固定住，再把振动传给面板。",
    x: 50,
    y: 79,
  },
  {
    id: "body",
    n: 11,
    name: "琴身",
    en: "Body",
    short: "吉他的大肚子",
    detail:
      "琴身像一个小小的音箱。它由面板、背板和侧板围成，声音在里面回荡，所以只拨一根弦，也会有圆圆的、暖暖的声音。",
    x: 50,
    y: 88,
  },
];

export type GuitarType = {
  id: "classical" | "acoustic" | "electric" | "jazz" | "bass" | "flamenco";
  name: string;
  en: string;
  tagline: string;
  detail: string;
  color: "sun" | "sky" | "violet" | "coral" | "mint" | "pink";
  audio: string;
  audioCredit: string;
  audioLicense: string;
  audioLicenseUrl: string;
  audioUrl: string;
};

export const GUITAR_TYPES: GuitarType[] = [
  {
    id: "classical",
    name: "古典吉他",
    en: "Classical guitar",
    tagline: "尼龙弦，声音温柔",
    detail: "用手指弹，声音圆润。你正在学的就是它。",
    color: "sun",
    audio: "audio/guitars/classical.mp3",
    audioCredit: "Elmatute / Freesound",
    audioLicense: "CC0",
    audioLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    audioUrl: "https://freesound.org/people/Elmatute/sounds/679746/",
  },
  {
    id: "acoustic",
    name: "民谣吉他",
    en: "Acoustic guitar",
    tagline: "钢弦，声音明亮",
    detail: "常用来弹唱，扫弦会发出清脆的声音。",
    color: "sky",
    audio: "audio/guitars/acoustic.mp3",
    audioCredit: "Jason Shaw / Wikimedia Commons",
    audioLicense: "CC BY 3.0 US",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/3.0/us/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Jason_Shaw_-_SOLO_ACOUSTIC_GUITAR.ogg",
  },
  {
    id: "electric",
    name: "电吉他",
    en: "Electric guitar",
    tagline: "插上音箱，声音可以很酷",
    detail: "摇滚、流行和电影音乐里都能听到它。",
    color: "violet",
    audio: "audio/guitars/electric.mp3",
    audioCredit: "afgbeveridge / Freesound",
    audioLicense: "CC BY 4.0",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    audioUrl: "https://freesound.org/people/afgbeveridge/sounds/758469/",
  },
  {
    id: "jazz",
    name: "爵士吉他",
    en: "Jazz guitar",
    tagline: "圆润、温暖的“嗡嗡”声",
    detail: "琴身像一把小提琴，适合爵士和布鲁斯。",
    color: "coral",
    audio: "audio/guitars/jazz.mp3",
    audioCredit: "Serolillo / Wikimedia Commons",
    audioLicense: "CC BY 2.5",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/2.5/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Jazz-Guitar.ogg",
  },
  {
    id: "bass",
    name: "电贝斯",
    en: "Bass guitar",
    tagline: "四根粗弦，稳住低音",
    detail: "和鼓一起打底，让音乐站得更稳。",
    color: "mint",
    audio: "audio/guitars/bass.mp3",
    audioCredit: "Serolillo / Wikimedia Commons",
    audioLicense: "CC BY 2.5",
    audioLicenseUrl: "https://creativecommons.org/licenses/by/2.5/",
    audioUrl: "https://commons.wikimedia.org/wiki/File:Funky_Slap_Bass_line.ogg",
  },
  {
    id: "flamenco",
    name: "弗拉门戈吉他",
    en: "Flamenco guitar",
    tagline: "更轻、更亮，会跳舞",
    detail: "和古典吉他是亲戚，常为歌唱和舞蹈伴奏。",
    color: "pink",
    audio: "audio/guitars/flamenco.mp3",
    audioCredit: "Manitas de Plata / Mi espacio Flamenco",
    audioLicense: "CC0",
    audioLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    audioUrl: "https://archive.org/details/ManitasDePlata",
  },
];

export type GuitarString = {
  number: number;
  note: string;
  solfege: string;
  frequency: number;
  nickname: string;
  detail: string;
  color: string;
};

export const GUITAR_STRINGS: GuitarString[] = [
  {
    number: 1,
    note: "E",
    solfege: "mi",
    frequency: 329.63,
    nickname: "小鸟弦",
    detail: "最细、最高的弦。常常唱旋律。",
    color: "var(--string-1)",
  },
  {
    number: 2,
    note: "B",
    solfege: "si",
    frequency: 246.94,
    nickname: "云朵弦",
    detail: "柔和又明亮，旋律的好朋友。",
    color: "var(--string-2)",
  },
  {
    number: 3,
    note: "G",
    solfege: "sol",
    frequency: 196,
    nickname: "星星弦",
    detail: "不高不低，像中间的一颗星。",
    color: "var(--string-3)",
  },
  {
    number: 4,
    note: "D",
    solfege: "re",
    frequency: 146.83,
    nickname: "小溪弦",
    detail: "低低地流淌，给音乐铺路。",
    color: "var(--string-4)",
  },
  {
    number: 5,
    note: "A",
    solfege: "la",
    frequency: 110,
    nickname: "大树弦",
    detail: "是很多曲子的低音支柱。",
    color: "var(--string-5)",
  },
  {
    number: 6,
    note: "E",
    solfege: "mi",
    frequency: 82.41,
    nickname: "大象弦",
    detail: "最粗、最低的弦，声音像大象的脚步。",
    color: "var(--string-6)",
  },
];

export const STRING_CHANT = [
  "六弦 E，像大象慢慢走",
  "五弦 A，像大树摇一摇",
  "四弦 D，像小溪哗啦啦",
  "三弦 G，挂着一颗星",
  "二弦 B，云朵软绵绵",
  "一弦 E，小鸟飞上天",
];

export type PostureStep = {
  n: string;
  title: string;
  body: string;
  check: string;
  icon: "chair" | "footstool" | "guitar" | "arm" | "hand" | "smile";
};

export const POSTURE_STEPS: PostureStep[] = [
  {
    n: "01",
    title: "坐稳，脚踩地",
    body:
      "坐在椅子前半部分，双脚都能踩到地面。屁股坐太里面容易驼背，坐太外面又会滑。椅子高度让膝盖大约和屁股一样高。",
    check: "我能坐 20 秒不晃来晃去。",
    icon: "chair",
  },
  {
    n: "02",
    title: "左脚踩小凳子",
    body:
      "把左脚放在小脚凳上，膝盖自然抬高一点点。吉他腰部的凹处放在左大腿上，琴身轻轻靠住胸口。",
    check: "吉他没有滑下去，左腿也没有麻。",
    icon: "footstool",
  },
  {
    n: "03",
    title: "琴头抬起来",
    body:
      "琴颈向上倾斜约 30–45°，琴头像抬头看星星。不要平平地躺在大腿上，那样左手会很累。",
    check: "琴头和我的眼睛差不多高，或者稍微低一点。",
    icon: "guitar",
  },
  {
    n: "04",
    title: "右臂搭好",
    body:
      "右手前臂轻轻搭在琴身较宽的地方，靠近琴桥但不压住它。手腕伸直，手掌悬在琴弦上方，像在摸一只睡着的小猫。",
    check: "右肩能掉下来，手臂不酸，手能自由地动。",
    icon: "arm",
  },
  {
    n: "05",
    title: "左手放松",
    body:
      "左手指尖立起来，按在品丝的左边；大拇指在琴颈后面，不要捏紧。先从第 1 弦、第 1 品开始，像按一颗小按钮。",
    check: "按弦时手腕没有折成直角，虎口有空隙。",
    icon: "hand",
  },
  {
    n: "06",
    title: "身体是软软的",
    body:
      "肩膀放松，下巴微收，眼睛能看见琴弦和左手。弹一会儿觉得酸，就停下来抖抖手、看看远处。",
    check: "我的肩膀没有耸到耳朵旁边，呼吸是自然的。",
    icon: "smile",
  },
];

export const FIT_NOTES = [
  "7 岁孩子常见 1/2 或 3/4 尺寸，但年龄只是参考，不能只看年龄。",
  "坐好后，琴头大约到眼睛/肩膀高度，左臂能轻松够到第 1 品，琴身不会挡住脸。",
  "优先选择尼龙弦古典吉他，琴弦软、张力低，手指更舒服。新琴或旧琴都要检查弦距，太高会按得疼。",
  "不要为了“长大一点还能用”硬买全尺寸。琴太大，姿势会被迫变形，兴趣也容易受伤。",
];

export type Technique = {
  id: string;
  label: string;
  title: string;
  en: string;
  description: string;
  kidTip: string;
  color: "violet" | "sky" | "pink" | "mint";
};

export const RIGHT_HAND = [
  { finger: "p", name: "大拇指", en: "pulgar", role: "低音、和弦的低音根" },
  { finger: "i", name: "食指", en: "índice", role: "旋律、第三/第二弦的常客" },
  { finger: "m", name: "中指", en: "medio", role: "旋律、和 i 轮流值班" },
  { finger: "a", name: "无名指", en: "anular", role: "高音、和弦与轮指的后备军" },
];

export type GlossaryEntry = {
  term: string;
  en: string;
  category: "琴与手" | "读谱" | "声音" | "练习";
  definition: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  { term: "古典吉他", en: "Classical guitar", category: "琴与手", definition: "用尼龙弦、以手指拨弦的吉他。琴颈较宽，声音温暖，有 500 多年的音乐故事。" },
  { term: "尼龙弦", en: "Nylon strings", category: "琴与手", definition: "古典吉他的 1–3 弦通常是尼龙，4–6 弦是尼龙芯外缠金属丝，比钢弦软。" },
  { term: "空弦", en: "Open string", category: "琴与手", definition: "左手不按品丝，直接拨响一根弦，叫作空弦。" },
  { term: "品", en: "Fret", category: "琴与手", definition: "指板上金属线分出来的一格。第一品在最靠近琴头的位置。" },
  { term: "把位", en: "Position", category: "琴与手", definition: "左手所在的位置。第一把位就是食指大致对着第一品的位置。" },
  { term: "靠弦", en: "Rest stroke / apoyando", category: "琴与手", definition: "拨弦后手指停靠在相邻的下一根弦上，声音更厚、更结实。" },
  { term: "勾弦 / 勾弹", en: "Free stroke / tirando", category: "琴与手", definition: "拨弦后手指向掌心方向收回，不碰到下一根弦，声音更轻巧。" },
  { term: "琶音", en: "Arpeggio", category: "琴与手", definition: "把和弦的音一个接一个弹出来，像竖琴的水波。" },
  { term: "轮指", en: "Tremolo", category: "声音", definition: "p–a–m–i 快速重复，让一个高音听起来像在持续歌唱，常见于《阿尔罕布拉宫的回忆》。" },
  { term: "旋律", en: "Melody", category: "声音", definition: "最容易跟着哼唱的那条线。可以把它想象成故事里的主角。" },
  { term: "低音", en: "Bass", category: "声音", definition: "音乐里最低的那条线，像房子的地基，也像故事里的大地。" },
  { term: "和声", en: "Harmony", category: "声音", definition: "几个音一起响，给旋律加上颜色和心情。" },
  { term: "音色", en: "Tone color", category: "声音", definition: "同一个音的不同“颜色”。靠近琴桥更亮，靠近音孔更圆，手指角度也会改变它。" },
  { term: "强弱", en: "Dynamics", category: "声音", definition: "音乐整天在说悄悄话和大喊。p 是弱，f 是强，mf 是中等偏强。" },
  { term: "渐强 / 渐弱", en: "Crescendo / diminuendo", category: "声音", definition: "慢慢地变响或变轻，像太阳升起又落下。" },
  { term: "速度", en: "Tempo", category: "声音", definition: "音乐走路的快慢。慢速不是“不厉害”，慢练是高手的基本功。" },
  { term: "节拍", en: "Beat", category: "读谱", definition: "音乐稳定的脉搏。节拍器就是在帮我们数这个脉搏。" },
  { term: "拍号", en: "Time signature", category: "读谱", definition: "写在曲子开头的分数，比如 4/4 表示每小节 4 拍，以四分音符为一拍。" },
  { term: "小节", en: "Bar / measure", category: "读谱", definition: "两条竖线之间的音乐，可以把它当成一句话。" },
  { term: "五线谱", en: "Staff", category: "读谱", definition: "五条线组成的音乐地图。线和线之间的空间也能放音符。" },
  { term: "高音谱号", en: "Treble clef", category: "读谱", definition: "像一个小漩涡，告诉我们音符要住在高一点的位置。" },
  { term: "全音符", en: "Whole note", category: "读谱", definition: "一个空心圆圈，没有符干，通常唱 4 拍。" },
  { term: "二分音符", en: "Half note", category: "读谱", definition: "空心圆圈加一根符干，通常唱 2 拍。" },
  { term: "四分音符", en: "Quarter note", category: "读谱", definition: "实心圆点加符干，通常唱 1 拍。" },
  { term: "八分音符", en: "Eighth note", category: "读谱", definition: "实心音符加一根小尾巴，通常唱半拍；两个八分音符像小跑步。" },
  { term: "休止符", en: "Rest", category: "读谱", definition: "音乐里安静的空白。空白不是没内容，是让声音呼吸。" },
  { term: "TAB 谱", en: "Tablature", category: "读谱", definition: "六条线代表六根弦，线上的数字代表按第几品。0 就是空弦。" },
  { term: "乐句", en: "Phrase", category: "练习", definition: "一段有开始、有呼吸、有结束的音乐，像说话时的一句话。" },
  { term: "慢练", en: "Slow practice", category: "练习", definition: "用能保证正确的速度练习，再一点点加速。慢不是笨，是把路铺平。" },
  { term: "视奏", en: "Sight reading", category: "练习", definition: "第一次看到谱子就慢慢弹出来。每天读一小段就会越来越顺。" },
];

export const CARE_TIPS = [
  "弹琴前先洗手，擦干。甜甜的果汁和琴弦不是好朋友。",
  "左手指甲剪短，右手指甲按老师的方法修圆；小朋友先以舒服、能出清楚声音为准。",
  "弹完用软布轻轻擦琴弦和琴身，尤其擦掉手汗。",
  "调音要慢慢转弦轴，听到声音接近就好，不要一下子拧太紧。换弦请大人帮忙。",
  "不要把琴放在太阳直晒、暖气、汽车后备箱或很潮湿的地方。",
  "琴盒或琴包是吉他的小床。放进去前检查里面没有小玩具和杂物。",
  "手指酸痛先休息，出现刺痛、麻木或持续疼痛时告诉大人，不要硬撑。",
];

export const TIMELINE = [
  { year: "16 世纪", title: "拨弦乐器的大家族", body: "鲁特琴、比维拉琴等拨弦乐器在欧洲流行。它们像古典吉他的远方亲戚，常为歌唱和舞蹈伴奏。" },
  { year: "19 世纪", title: "六根弦定下来", body: "古典吉他的六根弦和现代外形逐渐确定。西班牙制琴家安东尼奥·托雷斯让琴身比例更适合独奏，声音也更饱满。" },
  { year: "19 世纪末", title: "塔雷加让吉他会唱歌", body: "西班牙作曲家、吉他演奏家弗朗西斯科·塔雷加写了许多温柔的小品，也改编钢琴曲，让吉他的表现力被更多人听见。" },
  { year: "20 世纪", title: "走进大音乐厅", body: "安德烈斯·塞戈维亚等演奏家带着古典吉他巡回世界，委托作曲家写新作品，让古典吉他成为音乐厅里的独奏乐器。" },
  { year: "1940s", title: "尼龙弦出现", body: "尼龙弦逐渐取代早期的羊肠弦，音准更稳定、手感更友好，也让今天的小朋友更容易开始学习。" },
  { year: "今天", title: "从西班牙到全世界", body: "古典吉他连接着巴赫、西班牙、南美和当代音乐。中国演奏家杨雪霏等也活跃在世界舞台，把新的声音带给大家。" },
];

export const MODERN_TIMELINE = [
  { year: "1930s", title: "电吉他出现", body: "插上音箱，声音可以变得很大。摇滚乐开始热闹起来。" },
  { year: "1950s", title: "电贝斯加入乐队", body: "四根粗弦的低音和鼓一起打底，让乐队站得更稳。" },
];

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export const BASICS_QUIZ: QuizQuestion[] = [
  {
    q: "古典吉他的第 6 弦（最粗的一根）是什么音？",
    options: ["高音 E", "低音 E", "A"],
    answer: 1,
    explain: "第 6 弦是最低的 E（低音 mi），像大象慢慢走路。第 1 弦才是高音 E。",
  },
  {
    q: "左手按弦时，手指应该按在哪里？",
    options: ["正正地压在品丝上", "品丝的旁边、靠近品丝", "两根弦中间的木头上"],
    answer: 1,
    explain: "按在品丝旁边，声音最清楚。压在品丝上会闷，离得太远又会费劲。",
  },
  {
    q: "尼龙弦和钢弦比，摸起来通常……",
    options: ["更软", "更硬", "一样硬"],
    answer: 0,
    explain: "古典吉他的尼龙弦张力较低，指尖更舒服。但还是要用正确的方法按弦。",
  },
  {
    q: "如果今天只有 10 分钟，怎样练更有效？",
    options: ["把整首曲子弹 30 遍", "分成 2–3 个小任务，慢练并听声音", "先看 10 分钟视频，不弹"],
    answer: 1,
    explain: "短而专注的练习，比一遍遍从头冲更有效。听自己的声音也是练习的一部分。",
  },
  {
    q: "弹错了一个音，表演时最好的做法是？",
    options: ["立刻停下来，从头再来", "假装没发生，继续把音乐接下去", "生气地拍琴"],
    answer: 1,
    explain: "演出时保持节奏和音乐的流动最重要。练习时再来慢慢找问题。",
  },
  {
    q: "吉他谱听起来和写出来的音高有什么关系？",
    options: ["完全一样", "听起来低一个八度", "听起来高两个八度"],
    answer: 1,
    explain: "吉他用高音谱号记谱，但实际发出的声音比谱面低一个八度。这是吉他的小秘密，知道就好，不用急着背。",
  },
];
