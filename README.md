# 爱古典吉他 · Love Classic Guitar

给一位 7 岁小音乐家的古典吉他星空练习室。把基础知识、学习路线、免费课程、名曲音乐厅和互动练习，做成了一个孩子可以自己点开的小世界。

**在线地址**：<https://lulgabc.github.io/LoveClassicGuitar/>  
**仓库**：<https://github.com/lulgabc/LoveClassicGuitar>

---

## 这个网站有什么

- **吉他小百科**：11 个可点击的吉他部位、六根弦试听、坐姿检查、左右手、读谱、护理、历史、术语搜索和互动小测验。
- **6 站学习地图**：38 个可勾选的小任务，从认识琴、空弦、第一把位，到双手配合、音乐性和家庭小音乐会。进度保存在本机浏览器，不需要注册。
- **星空练习室**：10 / 15 / 20 分钟计时器、节拍器、调弦参考音、音符游戏、耳朵游戏、热身动作和可打印练习卡。
- **音乐厅**：10 首精选演奏、YouTube 隐私增强播放器、按心情筛选、演奏家故事、作曲家小档案和听音乐的小游戏。
- **资源宝库**：免费课程、YouTube 频道、教材书籍、公版乐谱、考级信息和中文资源入口，标注语言、费用与适合阶段。
- **给爸爸妈妈**：选琴、找老师、15 分钟陪练、面对“不想练”、屏幕与听力安全，以及可打印/可保存的家长清单。
- **原创角色与动态内容**：小蝙蝠 Momo、水豚 Capi、月亮、星星、音符和页脚小剧场。动画尊重系统的“减少动态效果”设置。

### 设计原则

- 面向 7 岁孩子的较大字号、清楚层级和 44px 左右的主要触控目标。
- 紫色、蓝色、奶油色和星星主题；不使用外部字体、追踪脚本或广告。
- 所有音频只在用户点击后播放。
- YouTube 视频默认不加载；点击后才连接 `youtube-nocookie.com`。
- 名字、任务勾选和练习记录只存在 `localStorage`，可以随时清空。

---

## 技术栈

- [Astro 7](https://astro.build/)（静态输出）
- 原生 CSS / TypeScript，无前端框架、无运行时依赖
- GitHub Pages（GitHub Actions 自动部署）
- 原创 SVG 角色和图形
- Playwright + axe + Lighthouse 用于本地视觉、交互和无障碍检查（开发依赖）

## 本地运行

需要 Node.js **22.23.4 或更高版本**（本仓库的 GitHub Actions 使用 Node 24）。

```bash
npm install
npm run dev
```

开发服务器默认在 `http://localhost:4321/LoveClassicGuitar/`。

```bash
npm run build     # 生成 dist/
npm run preview   # 预览静态产物
npm run check     # Astro 类型/模板检查
npm run check:links
```

`check:links` 会构建网站并检查：

- 站内链接是否指向真实页面
- YouTube 视频是否仍然可用（通过 oEmbed）
- 外部资源是否可访问；被 Cloudflare / 反爬保护的站点会标记为“需要人工确认”，不算硬失败

> 如果系统里同时安装了多种 Node 版本，而 `npm run build` 报 “Node.js is not supported by Astro”，请切换到 Node 24 或更高版本。仓库提供了 `.nvmrc`。

## 目录

```text
src/
  components/       UI、互动工具、原创角色
  data/             基础知识、路线图、视频、音乐厅、资源、练习内容
  layouts/          全站布局与 SEO
  lib/              音频、进度存储、范围样式、庆祝动画
  pages/            首页 / 百科 / 地图 / 练习 / 音乐厅 / 资源 / 家长 / 关于 / 打印
  styles/           设计系统与全局样式
  scripts/          导航、主题、滚动揭示等全站交互
scripts/
  check-links.mjs   站内/YouTube/外链检查
public/             图标、manifest、robots、OG 图
.github/workflows/  GitHub Pages 自动部署
```

## 内容与版权

- 原创文字、插画、练习卡与交互设计：**CC BY-NC-SA 4.0**。可以署名、非商业地分享和改编，衍生作品需使用相同许可。
- 代码：**MIT License**。
- 外部 YouTube 视频、教材、乐谱、商标和录音归各自权利人。本站只提供链接、介绍和原创学习笔记，不提供商业教材/受版权保护谱子的下载。
- YouTube 是 Google LLC 的商标。本站与 YouTube、ABRSM、Trinity、RCM 或任何课程平台无隶属关系。

详细来源、隐私和可访问性说明见网站 `/about/` 与 `/parents/#privacy`。

## 内容参考

课程与教学：

- [This is Classical Guitar](https://www.thisisclassicalguitar.com/)
- [Classical Guitar Shed](https://classicalguitarshed.com/)
- [Classical Guitar Corner](https://www.classicalguitarcorner.com/)
- [tonebase Guitar](https://www.tonebase.co/guitar)

乐谱与历史：

- [IMSLP](https://imslp.org/wiki/Category:For_guitar)
- [Mutopia Project](https://www.mutopiaproject.org/)
- [Classical Guitar Delcamp Forum](https://www.classicalguitardelcamp.com/)
- [Classical Guitar Magazine](https://classicalguitarmagazine.com/)

演奏视频：

- [Siccas Guitars](https://www.youtube.com/@SiccasGuitars)
- [Guitar Salon International](https://www.youtube.com/@Guitarsalon)
- 各演奏家官方频道（见音乐厅页面）

考级（仅供参考）：

- [ABRSM](https://www.abrsm.org/)
- [Trinity College London](https://www.trinitycollege.com/)
- [The Royal Conservatory](https://www.rcmusic.com/)

## 部署

仓库包含 `.github/workflows/deploy.yml`，推送到 `main` 后自动构建并部署到 GitHub Pages。

```bash
git push origin main
```

首次部署时，在 GitHub 仓库的 **Settings → Pages** 中选择 **GitHub Actions** 作为来源。Astro 的 `base` 已设为 `/LoveClassicGuitar`，与项目页面地址一致。

## 内容维护清单

- 每季度检查一次外部视频和课程链接（`npm run check:links`）。
- 新增曲目/资源时，标注语言、是否免费和适合阶段；不确定的内容不要写成事实。
- 演奏家、作曲家生平和作品信息尽量交叉核对公开资料。
- 任何涉及孩子隐私、疼痛、听力、焦虑的内容，都优先安全而不是进度。
- 如果新增互动组件，请给动态创建的元素调用 `src/lib/scope.ts` 的 `copyScope`，否则 Astro 的 scoped CSS 不会作用于运行时元素。

## 免责声明

本站是家庭自制的学习与陪伴参考，不构成医疗、心理或专业教学建议。孩子出现持续疼痛、麻木、听力不适或明显焦虑时，请咨询老师或相应专业人士。

---

用 ❤️ 和 🎸 做给一位 7 岁小音乐家。慢一点，也是在向前。
