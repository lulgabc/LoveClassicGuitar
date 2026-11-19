export const SITE = {
  name: "Love Classic Guitar",
  nameZh: "爱古典吉他",
  nameFr: "Guitare classique",
  tagline: "小音乐家的星空练习室",
  taglineFr: "Le studio des étoiles",
  description:
    "给 7 岁小音乐家的古典吉他启蒙世界：有趣的基础知识、6 站学习地图、免费课程、名曲音乐厅、互动练习工具和家长指南。",
  descriptionFr:
    "Un monde de guitare classique pour une enfant de 7 ans : bases illustrées, parcours en 6 étapes, cours gratuits, salle de concert avec lecteur intégré, outils interactifs et guide parents.",
  url: "https://lulgabc.github.io/LoveClassicGuitar",
  repo: "https://github.com/lulgabc/LoveClassicGuitar",
  author: "lulgabc",
  updated: "2026-11-19",
};

export const NAV = [
  { href: "/", label: "首页", short: "首页" },
  { href: "/basics/", label: "吉他小百科", short: "百科" },
  { href: "/roadmap/", label: "学习地图", short: "地图" },
  { href: "/practice/", label: "练习室", short: "练习" },
  { href: "/concert/", label: "音乐厅", short: "音乐" },
  { href: "/scores/", label: "乐谱库", short: "乐谱" },
] as const;

export const NAV_FR = [
  { href: "/fr/", label: "Accueil", short: "Accueil" },
  { href: "/fr/basics/", label: "Découvrir", short: "Découvrir" },
  { href: "/fr/roadmap/", label: "Parcours", short: "Parcours" },
  { href: "/fr/practice/", label: "Pratique", short: "Pratique" },
  { href: "/fr/concert/", label: "Écouter", short: "Écouter" },
  { href: "/fr/scores/", label: "Partitions", short: "Partitions" },
] as const;

export const HERO_CHIPS = ["零基础", "每天 10–15 分钟", "免费资源", "可打印练习卡"];
export const HERO_CHIPS_FR = ["Débutant", "10–15 min par jour", "Ressources gratuites", "Fiche à imprimer"];
