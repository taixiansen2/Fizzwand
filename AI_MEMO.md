# FizzWand 项目结构与上下文指南

这个文件是给 AI 阅读的，用于在开启新对话时快速恢复关于当前项目的记忆。请在每次启动新任务时优先参考此文档。

## 🛠 技术栈 (Tech Stack)
- **前端 (Frontend)**: Vue 3, Vite, Vue Router, Tailwind CSS (样式), GSAP (复杂动画).
- **后端 (Backend)**: Rust, Actix-web (高性能 Web 框架), Serde (JSON 序列化).

## 📂 项目目录结构 (Directory Structure)
```
fizzwand/
├── frontend/                 # 前端 Vue 项目
│   ├── package.json          # 包含 Vue, Tailwind, GSAP 等前端依赖
│   ├── src/
│   │   ├── main.js           # Vue 应用入口
│   │   ├── App.vue           # 根组件
│   │   ├── style.css         # 全局及 Tailwind CSS 样式文件
│   │   ├── components/       # 视图展示与组件模块 (主要页面区块)：
│   │   │                     # - Home, Overview, Vision, Inspiration
│   │   │                     # - Products, Artisan, Nucleation
│   │   │                     # - Technology, Marketing, Summary, Thanks
│   │   └── assets/           # 本地静态资源图片
└── backend/                  # 后端 Rust 项目
    ├── Cargo.toml            # Rust 依赖配置 (actix-web, serde, actix-cors)
    └── src/
        └── main.rs           # Actix-web 后端核心服务入口与 API 路由
```

## ⚙️ 核心业务逻辑与特征
1. **产品展示与宣传站点 (Landing Page)**:
   - FizzWand 项目目前核心是一个用于展示商业计划和产品特性的展示型网站（可能是路演、BP 宣讲的网页版）。
   - 前端使用了 `GSAP` 制作滚动或转场动画，结合 `Tailwind CSS` 进行快速响应式布局，各 `components/` 基本上对应了幻灯片/长滚动页面中的不同分P（如 Vision、Technology、Marketing 等）。
2. **后端服务**:
   - 后端是一个用 Rust 和 Actix-web 搭建的极简服务。
   - 运行端口为 `8081`。
   - 目前主要包含 `/api/status` 用于检测后端运行状态。项目配置了 `actix-cors` 解决前后端分离的跨域问题。
3. **前端状态与请求**:
   - 前端在结构上比较轻量，暂时不涉及复杂的状态管理（如 Pinia）。
   - 动画效果是该网站的重要视觉体验组成部分，修改相关组件时需注意不要破坏 GSAP 的 Timeline/ScrollTrigger 逻辑。

## 💡 给 AI 的提示
当你进入新对话并被要求修改 fizzwand 项目时，请先阅读本文件以快速构建对代码库的全局认知。这个项目侧重于视觉呈现与动画，若需调整页面内容，请定位到 `frontend/src/components` 目录下的具体展示模块区块进行更改。