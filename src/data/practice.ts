export type PracticeStep = {
  id: string;
  title: string;
  short: string;
  minutes: number;
  instruction: string;
  mascot: string;
  icon: "breathe" | "fingers" | "music" | "star";
};

export type PracticePreset = {
  minutes: number;
  label: string;
  sub: string;
  steps: PracticeStep[];
};

export const PRACTICE_PRESETS: PracticePreset[] = [
  {
    minutes: 10,
    label: "10 分钟",
    sub: "今天有点忙，也能摸到琴",
    steps: [
      {
        id: "p10-1",
        title: "空弦呼吸",
        short: "空弦",
        minutes: 1,
        instruction: "坐好，肩膀放松。从第 6 弦到第 1 弦，每根弦轻轻拨 2 次。",
        mascot: "先听声音，不急着弹下一根。",
        icon: "breathe",
      },
      {
        id: "p10-2",
        title: "手指热身",
        short: "热身",
        minutes: 3,
        instruction: "i–m 交替 8 次，或左手 1–2–3–4 爬格子。只求均匀，不求快。",
        mascot: "慢一点，星星会等你。",
        icon: "fingers",
      },
      {
        id: "p10-3",
        title: "曲目慢练",
        short: "曲目",
        minutes: 4,
        instruction: "只练最难的 2–4 小节，连续弹对 3 次，再连前后一小句。",
        mascot: "小小一段，也算一次大冒险。",
        icon: "music",
      },
      {
        id: "p10-4",
        title: "听一听 / 玩一玩",
        short: "收尾",
        minutes: 2,
        instruction: "听一首 2 分钟的曲子，或即兴 4 小节。最后给今天贴一颗星。",
        mascot: "今天也谢谢你，让琴发出声音。",
        icon: "star",
      },
    ],
  },
  {
    minutes: 15,
    label: "15 分钟",
    sub: "最推荐的每日节奏",
    steps: [
      {
        id: "p15-1",
        title: "呼吸与空弦",
        short: "空弦",
        minutes: 2,
        instruction: "坐好，做 3 次慢呼吸。然后每根空弦轻轻拨 4 次，听声音从响到消失。",
        mascot: "肩膀掉下来，脚踩稳，我们开始。",
        icon: "breathe",
      },
      {
        id: "p15-2",
        title: "一个技术小任务",
        short: "技术",
        minutes: 4,
        instruction: "从 i–m 交替、左手落指、靠弦/勾弦中选一个。今天只盯一个目标。",
        mascot: "一个任务做好，比十个任务路过多。",
        icon: "fingers",
      },
      {
        id: "p15-3",
        title: "曲目慢练",
        short: "曲目",
        minutes: 6,
        instruction: "找出 2–4 个小节，慢到不会错。连续对了 3 次，再把前后接起来。",
        mascot: "错了就停下来看看地图，不用从头再走。",
        icon: "music",
      },
      {
        id: "p15-4",
        title: "听一听 / 玩一玩",
        short: "收尾",
        minutes: 3,
        instruction: "完整弹一遍今天的小曲，或听一首音乐厅的曲子。为今天点亮一颗星。",
        mascot: "演奏结束记得保持 2 秒，再微笑。",
        icon: "star",
      },
    ],
  },
  {
    minutes: 20,
    label: "20 分钟",
    sub: "周末或有精神的时候",
    steps: [
      {
        id: "p20-1",
        title: "呼吸与空弦",
        short: "空弦",
        minutes: 3,
        instruction: "每根空弦拨 4 次，再做一个“渐强—渐弱”的呼吸练习。",
        mascot: "让声音像太阳升起又落下。",
        icon: "breathe",
      },
      {
        id: "p20-2",
        title: "技术与音阶",
        short: "技术",
        minutes: 5,
        instruction: "i–m 交替 + 左手 1–3 指落指，或者 C 大调音阶一小段。保持慢速。",
        mascot: "手指不是跑步机，是在学跳舞。",
        icon: "fingers",
      },
      {
        id: "p20-3",
        title: "曲目与音乐性",
        short: "曲目",
        minutes: 8,
        instruction: "先练难点 2–4 小节，再完整弹一遍。加入一个强弱变化或一次呼吸。",
        mascot: "先弹对，再让它会说话。",
        icon: "music",
      },
      {
        id: "p20-4",
        title: "听 / 玩 / 记录",
        short: "收尾",
        minutes: 4,
        instruction: "录音听 30 秒，或听一首新曲子，写下今天的一个小发现。",
        mascot: "今天的星星，会记住你的努力。",
        icon: "star",
      },
    ],
  },
];

export type NoteQuestion = {
  id: string;
  stringNumber: number;
  fret: number;
  answer: string;
  solfege: string;
  options: string[];
  hint: string;
};

export const NOTE_QUESTIONS: NoteQuestion[] = [
  {
    id: "n1",
    stringNumber: 1,
    fret: 0,
    answer: "E",
    solfege: "mi",
    options: ["E", "F", "G"],
    hint: "第 1 弦空弦，是我们唱的“mi”，也是六根弦里最高的音。",
  },
  {
    id: "n2",
    stringNumber: 1,
    fret: 1,
    answer: "F",
    solfege: "fa",
    options: ["E", "F", "A"],
    hint: "从 E 往上走一格，就来到 F。它住在第 1 品。",
  },
  {
    id: "n3",
    stringNumber: 1,
    fret: 3,
    answer: "G",
    solfege: "sol",
    options: ["G", "B", "D"],
    hint: "第 1 弦第 3 品是 G。可以记成“一弦三颗星，第三颗是 G”。",
  },
  {
    id: "n4",
    stringNumber: 2,
    fret: 0,
    answer: "B",
    solfege: "si",
    options: ["A", "B", "C"],
    hint: "第 2 弦空弦是 B，像一朵软软的云。",
  },
  {
    id: "n5",
    stringNumber: 2,
    fret: 1,
    answer: "C",
    solfege: "do",
    options: ["B", "C", "D"],
    hint: "从 B 往上走一格是 C，住在第 2 弦第 1 品。",
  },
  {
    id: "n6",
    stringNumber: 2,
    fret: 3,
    answer: "D",
    solfege: "re",
    options: ["C", "D", "E"],
    hint: "第 2 弦第 3 品是 D，像小溪的“re”。",
  },
  {
    id: "n7",
    stringNumber: 3,
    fret: 0,
    answer: "G",
    solfege: "sol",
    options: ["E", "G", "A"],
    hint: "第 3 弦空弦是 G，不高也不低，像中间的一颗星。",
  },
  {
    id: "n8",
    stringNumber: 3,
    fret: 2,
    answer: "A",
    solfege: "la",
    options: ["A", "B", "G"],
    hint: "第 3 弦第 2 品是 A，用 1 指按，像大树摇一摇。",
  },
];

export const PRACTICE_TIPS = [
  "今天只练一个小目标，就已经很棒。",
  "先把一个音弹好听，再弹下一个音。",
  "如果手指打结，速度减半。",
  "错了没关系，停下来看看是哪一小节。",
  "弹之前先唱一遍节奏，手指会更聪明。",
  "肩膀放松，脚踩稳，吉他会更听话。",
  "今天不想练琴？听一首曲子也算音乐时间。",
  "把最难的 2 小节练 3 次，比从头弹 10 次有用。",
  "弹完一个音，等它完全消失再弹下一个。",
  "今天试试把一首曲子弹得更轻一点。",
  "把眼睛从左手移开 3 秒，感受手指的位置。",
  "在家开一场 30 秒的迷你音乐会。",
  "如果你笑了，今天的练习就成功了。",
  "不用和视频里的神童比，你只和昨天的自己比。",
  "先慢到不会错，再快一点点。",
  "休息也是练习的一部分。",
  "用耳朵找答案，不要只看手指。",
  "今天给自己一个“最会唱歌的音”。",
  "弹错后继续，是舞台魔法。",
  "记录一个今天新发现的声音。",
];

export const WARMUPS = [
  { title: "抖抖手", body: "像甩掉小水珠一样，轻轻抖手 10 秒。" },
  { title: "蝴蝶翅膀", body: "手指张开再合拢，像蝴蝶慢慢飞 5 次。" },
  { title: "大拇指散步", body: "用拇指轻碰其他四根手指，每个碰 2 次。" },
  { title: "肩膀升降机", body: "耸肩吸气，呼气放下，做 3 次。" },
  { title: "小猫伸懒腰", body: "双手向前伸，背部轻轻伸展，不要憋气。" },
];

export const PRACTICE_RULES = [
  "不痛才继续。刺痛、麻木、持续酸痛时立刻休息，并告诉大人。",
  "每次 10–20 分钟足够，中间可以休息。每天练不等于每天很久。",
  "先慢后快，先小段后整首。慢练是加速的捷径。",
  "不用把每个错误都纠正。一次只抓一个重点，留下好心情。",
  "录音前先问孩子可以不可以。只给家人看，也可以完全不给别人看。",
];
