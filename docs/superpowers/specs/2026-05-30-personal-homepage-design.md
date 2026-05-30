# Personal Homepage Design Spec

## Context

替换简历上 CSDN 博客链接的个人 GitHub Pages 主页。目标受众是面试官，需要 10 秒内传达技术方向和段位。

## Design Decisions

- **风格**: 极简技术风 — 白底 + 黑色 + 蓝色强调色
- **布局**: 单栏居中 ~680px，纵向滚动
- **技术**: 纯 HTML/CSS/JS + Particles.js + Typed.js，无构建工具，直接部署 GitHub Pages

## Page Structure (top to bottom)

### 1. Hero
- 头像/插画 + "王烁" + 定位语"AI Agent / 后端开发工程师"
- 联系方式标签（邮箱、GitHub、地点）
- 顶部粒子连线动画背景（仅限 Hero 区域）

### 2. 终端彩蛋
- Typed.js 自动敲入 `$ whoami` → `AI Agent Engineer`
- 3 秒后自动收起，不影响后续内容

### 3. 技术栈
- devicon 图标化，代码美学风格标题 `// Tech Stack`
- 主要技术：Java, Spring Boot, Spring AI, LangChain, PostgreSQL, Redis, Kafka, MCP, Docker 等

### 4. 精选项目 (Bento Grid)
- 流光 — AI Agent 编排系统（最大卡片，含截图/GIF）
- 灵析 — 开发者技术互动平台（含截图/GIF）
- Prism — 全局 AI 意图转译桌面端
- 可能加 Gemini-Context-Navigator
- Hover 微抬 + 项目预览弹出

### 5. 开源贡献
- GitHub stats 热力图嵌入
- GitMCP (8.1k Star) — PR 已提交：新增 Zed Editor 支持
- 个人项目累计 40+ Star

### 6. 学术论文
- 因果多模态人格识别 — 一区期刊在投（细节待补充）
- 多模态情绪识别 — 中文期刊已录用（细节待补充）

### 7. 实习经历
- 歌尔 Alpha Labs — AI Agent 研发实习生 (2026.04 - 2026.05)
- 关键词标签：企业知识安全隔离 · RAG 检索链路 · 智能 Agent 研发 · 知识图谱

### 8. 博客 & 链接
- CSDN (20w+ 阅读)、掘金、腾讯云开发者
- 动态拉取最近文章标题

### 9. 动态状态栏
- 底部固定：正在学什么 · 论文状态 · 开放合作

## Content Accuracy Notes
- GitHub Star 数：~40（非 200+）
- GitMCP PR：已提交，未合并
- 论文细节：待用户补充

## Assets Needed
- 项目截图/GIF：流光、灵析、Prism
- 头像/插画
- 论文详细信息
