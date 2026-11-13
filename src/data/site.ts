export const SITE = {
  name: "Love Classic Guitar",
  nameZh: "爱古典吉他",
  tagline: "小音乐家的星空练习室",
  description:
    "给 7 岁小音乐家的古典吉他启蒙世界：有趣的基础知识、6 站学习地图、免费课程、名曲音乐厅、互动练习工具和家长指南。",
  url: "https://lulgabc.github.io/LoveClassicGuitar",
  repo: "https://github.com/lulgabc/LoveClassicGuitar",
  author: "lulgabc",
  updated: "2026-11-13",
};

export const NAV = [
  { href: "/", label: "首页", short: "首页" },
  { href: "/basics/", label: "吉他小百科", short: "百科" },
  { href: "/roadmap/", label: "学习地图", short: "地图" },
  { href: "/practice/", label: "练习室", short: "练习" },
  { href: "/concert/", label: "音乐厅", short: "音乐" },
  { href: "/library/", label: "资源宝库", short: "资源" },
  { href: "/parents/", label: "给爸妈", short: "爸妈" },
] as const;

export const HERO_CHIPS = ["零基础", "每天 10–15 分钟", "免费资源", "可打印练习卡"];
