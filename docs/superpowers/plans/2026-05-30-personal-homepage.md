# Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimalist tech-style personal homepage on GitHub Pages to replace the CSDN blog link on the resume.

**Architecture:** Single static page — `index.html` with external `css/style.css` and `js/main.js`. External libraries (Particles.js, Typed.js, Devicon) loaded via CDN. No build tools.

**Tech Stack:** HTML5, CSS3, vanilla JS, Particles.js (CDN), Typed.js (CDN), Devicon (CDN)

---

## File Structure

```
swing-g.github.io/
├── index.html          # Main page — all semantic content
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Particles init, typed init, hover effects, blog fetch
└── assets/
    └── images/         # Project screenshots, avatar placeholder
```

---

### Task 1: HTML Semantic Structure

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write the complete HTML skeleton**

Replace the entire content of `index.html`:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="王烁 — AI Agent / 后端开发工程师">
    <title>王烁 | AI Agent Engineer</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Particles container (Hero only) -->
    <div id="particles"></div>

    <main class="container">

        <!-- 1. Hero -->
        <section id="hero">
            <div class="hero-avatar">
                <div class="avatar-placeholder">WS</div>
            </div>
            <h1>王烁</h1>
            <p class="hero-tagline">AI Agent / 后端开发工程师</p>
            <p class="hero-sub">中国石油大学（华东） 软件工程硕士 · 2027 届</p>
            <div class="hero-links">
                <a href="mailto:wangshuoyf@163.com" class="hero-link">wangshuoyf@163.com</a>
                <a href="https://github.com/Swing-G" target="_blank" class="hero-link">GitHub</a>
                <span class="hero-link muted">青岛</span>
            </div>
        </section>

        <!-- 2. Terminal Easter Egg -->
        <section id="terminal">
            <div class="terminal-window">
                <div class="terminal-dots"><span></span><span></span><span></span></div>
                <div class="terminal-body">
                    <span class="terminal-prompt">$ </span><span id="typed"></span>
                </div>
            </div>
        </section>

        <!-- 3. Tech Stack -->
        <section id="tech" class="section">
            <h2>// Tech Stack</h2>
            <div class="tech-grid">
                <div class="tech-item"><i class="devicon-java-plain colored"></i><span>Java</span></div>
                <div class="tech-item"><i class="devicon-spring-plain colored"></i><span>Spring Boot</span></div>
                <div class="tech-item"><i class="devicon-python-plain colored"></i><span>Python</span></div>
                <div class="tech-item"><i class="devicon-postgresql-plain colored"></i><span>PostgreSQL</span></div>
                <div class="tech-item"><i class="devicon-redis-plain colored"></i><span>Redis</span></div>
                <div class="tech-item"><i class="devicon-apachekafka-plain colored"></i><span>Kafka</span></div>
                <div class="tech-item"><i class="devicon-docker-plain colored"></i><span>Docker</span></div>
                <div class="tech-item"><i class="devicon-mysql-plain colored"></i><span>MySQL</span></div>
                <div class="tech-item"><i class="devicon-git-plain colored"></i><span>Git</span></div>
                <div class="tech-item"><i class="devicon-linux-plain"></i><span>Linux</span></div>
            </div>
            <p class="tech-more">Spring AI · LangChain · MCP · Canal · Elasticsearch · Caffeine · Tauri · Rust</p>
        </section>

        <!-- 4. Projects - Bento Grid -->
        <section id="projects" class="section">
            <h2>// Projects</h2>
            <div class="bento-grid">
                <!-- 流光 - large card -->
                <div class="bento-card bento-large" data-project="liuguang">
                    <div class="bento-img">
                        <div class="bento-img-placeholder">流光 截图</div>
                    </div>
                    <div class="bento-body">
                        <div class="bento-meta">2026.01 - 2026.05</div>
                        <h3>流光 — AI Agent 编排系统</h3>
                        <p>面向企业复杂任务的 Agent Workflow 与运行时编排系统。DAG 任务图 + 多策略驱动 + 分层记忆 + MCP 工具网关。</p>
                        <div class="bento-tags">
                            <span>Spring Boot</span><span>Spring AI</span><span>MCP</span><span>pgvector</span><span>Redis</span>
                        </div>
                        <div class="bento-links">
                            <a href="https://github.com/Swing-G/LiuGuang" target="_blank">GitHub →</a>
                            <a href="http://liuguangyf.top" target="_blank">演示站 →</a>
                        </div>
                    </div>
                </div>

                <!-- 灵析 - medium card -->
                <div class="bento-card bento-medium" data-project="lingxi">
                    <div class="bento-img">
                        <div class="bento-img-placeholder">灵析 截图</div>
                    </div>
                    <div class="bento-body">
                        <div class="bento-meta">2025.09 - 2026.01</div>
                        <h3>灵析 — 开发者技术互动平台</h3>
                        <p>高并发技术社区。Feed 流三级缓存 + 关注链路解耦 + 计数系统优化。</p>
                        <div class="bento-tags">
                            <span>Spring Boot</span><span>Redis</span><span>Kafka</span><span>Canal</span><span>ES</span>
                        </div>
                        <div class="bento-links">
                            <a href="https://github.com/Swing-G/LingXi" target="_blank">GitHub →</a>
                            <a href="http://lingxiyf.top" target="_blank">演示站 →</a>
                        </div>
                    </div>
                </div>

                <!-- Prism - small card -->
                <div class="bento-card bento-small" data-project="prism">
                    <div class="bento-body">
                        <h3>Prism 棱镜</h3>
                        <p>全局 AI 意图转译桌面端。Tauri + Rust + React，全局快捷键唤起，自然语言 → 高质量 Prompt。</p>
                        <div class="bento-tags">
                            <span>Tauri</span><span>Rust</span><span>React</span>
                        </div>
                        <a href="https://github.com/Swing-G/Prism" target="_blank">GitHub →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. Open Source -->
        <section id="opensource" class="section">
            <h2>// Open Source</h2>
            <div class="os-grid">
                <div class="os-card">
                    <div class="os-header">
                        <span class="os-name">GitMCP</span>
                        <span class="os-stars">8.1k ⭐</span>
                    </div>
                    <p>贡献 Zed Editor 支持与编辑器接入规范，统一 UI 展示与配置结构</p>
                    <span class="os-status status-pending">PR 已提交</span>
                </div>
                <div class="os-card">
                    <div class="os-header">
                        <span class="os-name">GitHub 个人项目</span>
                        <span class="os-stars">40+ ⭐</span>
                    </div>
                    <p>Prism · Gemini-Context-Navigator 等开源项目</p>
                </div>
            </div>
            <div class="github-stats" id="github-stats">
                <!-- GitHub stats image loaded by JS -->
            </div>
        </section>

        <!-- 6. Papers -->
        <section id="papers" class="section">
            <h2>// Research</h2>
            <div class="papers-list">
                <div class="paper-item">
                    <div class="paper-title">因果多模态人格识别</div>
                    <div class="paper-meta"><span class="status-pending">一区期刊在投</span></div>
                </div>
                <div class="paper-item">
                    <div class="paper-title">多模态情绪识别</div>
                    <div class="paper-meta"><span class="status-done">中文期刊已录用</span></div>
                </div>
            </div>
        </section>

        <!-- 7. Internship -->
        <section id="internship" class="section">
            <h2>// Experience</h2>
            <div class="exp-card">
                <div class="exp-header">
                    <span class="exp-company">歌尔 Alpha Labs</span>
                    <span class="exp-date">2026.04 - 2026.05</span>
                </div>
                <p class="exp-role">AI Agent 研发实习生</p>
                <p class="exp-desc">参与技术成果智能管理平台升级，围绕安全RAG、智能Agent与知识图谱能力建设。</p>
                <div class="bento-tags">
                    <span>RAG</span><span>Agent</span><span>知识图谱</span><span>PG-RLS</span><span>Function Calling</span>
                </div>
            </div>
        </section>

        <!-- 8. Blog -->
        <section id="blog" class="section">
            <h2>// Blog</h2>
            <div class="blog-grid">
                <a href="https://blog.csdn.net/m0_58782205" target="_blank" class="blog-card">
                    <span class="blog-platform">CSDN</span>
                    <span class="blog-stat">20w+ 阅读</span>
                    <span class="blog-arrow">→</span>
                </a>
                <a href="#" class="blog-card">
                    <span class="blog-platform">掘金</span>
                    <span class="blog-arrow">→</span>
                </a>
                <a href="#" class="blog-card">
                    <span class="blog-platform">腾讯云开发者</span>
                    <span class="blog-arrow">→</span>
                </a>
            </div>
        </section>

        <!-- 9. Status Bar -->
        <footer id="status-bar">
            <div class="status-item"><span class="status-dot green"></span> 正在学习：知识图谱与多模态 Agent</div>
            <div class="status-item"><span class="status-dot yellow"></span> 论文在投：一区期刊</div>
            <div class="status-item"><span class="status-dot blue"></span> 开放合作：欢迎 MCP/Skill 相关交流</div>
        </footer>

    </main>

    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify the HTML file is valid**

Open `index.html` in a browser — should show raw content without styling.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add semantic HTML structure for personal homepage"
```

---

### Task 2: Base CSS — Layout, Typography, Colors

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create the base stylesheet**

Write `css/style.css`:

```css
/* === Reset & Base === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
    --bg: #fafafa;
    --text: #1a1a1a;
    --text-secondary: #666;
    --text-muted: #999;
    --accent: #2563eb;
    --accent-dim: #dbeafe;
    --border: #e5e5e5;
    --card-bg: #fff;
    --code-bg: #f5f5f5;
    --radius: 8px;
    --max-width: 680px;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

/* === Typography === */
h1 { font-size: 36px; font-weight: 700; letter-spacing: -0.5px; }
h2 {
    font-family: "SF Mono", "Fira Code", "Consolas", monospace;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
}
h3 { font-size: 17px; font-weight: 600; }

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

.section { padding: 48px 0; border-top: 1px solid var(--border); }

/* === Hero === */
#hero {
    position: relative;
    text-align: center;
    padding: 80px 0 48px;
    border: none;
}
.hero-avatar { margin-bottom: 24px; }
.avatar-placeholder {
    width: 72px; height: 72px;
    border-radius: 50%;
    background: var(--text);
    color: var(--bg);
    font-size: 24px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto;
}
.hero-tagline { font-size: 18px; color: var(--text); margin-bottom: 4px; }
.hero-sub { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }
.hero-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.hero-link {
    font-size: 13px;
    background: var(--code-bg);
    padding: 4px 14px;
    border-radius: 20px;
    color: var(--text-secondary);
}
.hero-link:hover { background: var(--accent-dim); color: var(--accent); text-decoration: none; }
.hero-link.muted { color: var(--text-muted); }

/* === Particles === */
#particles {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 320px;
    z-index: 0;
    pointer-events: none;
}
.container { position: relative; z-index: 1; }

/* === Terminal === */
#terminal { margin-bottom: 16px; }
.terminal-window {
    background: #1e1e1e;
    border-radius: var(--radius);
    overflow: hidden;
    font-family: "SF Mono", "Fira Code", "Consolas", monospace;
    font-size: 14px;
}
.terminal-dots {
    display: flex; gap: 6px;
    padding: 12px 16px 0;
}
.terminal-dots span {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: #ff5f56;
}
.terminal-dots span:nth-child(2) { background: #ffbd2e; }
.terminal-dots span:nth-child(3) { background: #27c93f; }
.terminal-body {
    padding: 16px;
    color: #d4d4d4;
}
.terminal-prompt { color: #6a9955; }
#typed { color: #d4d4d4; }

/* === Tech Stack === */
.tech-grid {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 12px;
}
.tech-item {
    display: flex; align-items: center; gap: 6px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 13px;
    font-family: "SF Mono", "Fira Code", monospace;
}
.tech-item i { font-size: 18px; }
.tech-more { font-size: 12px; color: var(--text-muted); }

/* === Bento Grid === */
.bento-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}
.bento-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: default;
}
.bento-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.bento-large { grid-column: 1 / -1; }
.bento-medium { grid-column: span 1; }
.bento-small { grid-column: span 1; }
.bento-img {
    background: var(--code-bg);
    height: 160px;
    display: flex; align-items: center; justify-content: center;
}
.bento-large .bento-img { height: 220px; }
.bento-img-placeholder {
    color: var(--text-muted);
    font-size: 14px;
}
.bento-body { padding: 20px; }
.bento-meta { font-size: 12px; color: var(--text-muted); margin-bottom: 4px; }
.bento-body h3 { margin-bottom: 6px; }
.bento-body p { font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.6; }

/* === Tags === */
.bento-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-bottom: 12px;
}
.bento-tags span {
    font-size: 11px;
    background: var(--code-bg);
    padding: 2px 8px;
    border-radius: 4px;
    color: var(--text-secondary);
    font-family: "SF Mono", "Fira Code", monospace;
}
.bento-links { display: flex; gap: 16px; font-size: 13px; }

/* === Open Source === */
.os-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    margin-bottom: 24px;
}
.os-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}
.os-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 8px;
}
.os-name { font-weight: 600; }
.os-stars { font-size: 13px; color: var(--text-secondary); }
.os-card p { font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.6; }
.github-stats { text-align: center; }
.github-stats img { max-width: 100%; }

/* === Status Badges === */
.status-pending {
    font-size: 11px;
    background: #fef3c7;
    color: #92400e;
    padding: 2px 10px;
    border-radius: 12px;
}
.status-done {
    font-size: 11px;
    background: #d1fae5;
    color: #065f46;
    padding: 2px 10px;
    border-radius: 12px;
}

/* === Papers === */
.papers-list { display: flex; flex-direction: column; gap: 12px; }
.paper-item {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 20px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
}
.paper-title { font-weight: 500; }

/* === Experience === */
.exp-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
}
.exp-header {
    display: flex; justify-content: space-between; align-items: baseline;
    margin-bottom: 4px;
}
.exp-company { font-weight: 600; font-size: 16px; }
.exp-date { font-size: 12px; color: var(--text-muted); }
.exp-role { font-size: 14px; color: var(--accent); margin-bottom: 8px; }
.exp-desc { font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.6; }

/* === Blog === */
.blog-grid { display: flex; gap: 12px; flex-direction: column; }
.blog-card {
    display: flex; align-items: center;
    padding: 16px 20px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    transition: border-color 0.2s;
}
.blog-card:hover { border-color: var(--accent); text-decoration: none; }
.blog-platform { font-weight: 500; flex: 1; }
.blog-stat { font-size: 13px; color: var(--text-muted); margin-right: 12px; }
.blog-arrow { color: var(--text-muted); }

/* === Status Bar === */
#status-bar {
    display: flex; gap: 24px; flex-wrap: wrap;
    padding: 32px 0 60px;
    font-size: 13px;
    color: var(--text-secondary);
    border-top: 1px solid var(--border);
    margin-top: 48px;
}
.status-item { display: flex; align-items: center; gap: 6px; }
.status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    display: inline-block;
}
.status-dot.green { background: #22c55e; }
.status-dot.yellow { background: #eab308; }
.status-dot.blue { background: var(--accent); }

/* === Responsive === */
@media (max-width: 600px) {
    .container { padding: 0 20px; }
    h1 { font-size: 28px; }
    #hero { padding: 60px 0 36px; }
    .bento-grid { grid-template-columns: 1fr; }
    .bento-medium, .bento-small, .bento-large { grid-column: 1 / -1; }
    .os-grid { grid-template-columns: 1fr; }
    .paper-item { flex-direction: column; align-items: flex-start; gap: 8px; }
    .exp-header { flex-direction: column; }
    #status-bar { flex-direction: column; gap: 8px; }
}
```

- [ ] **Step 2: Verify styles load**

Open `index.html` in browser — the page should look styled with proper layout, colors, and typography.

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add base CSS — layout, typography, colors, responsive"
```

---

### Task 3: JavaScript — Particles, Typed, Hover

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Write main.js**

```javascript
// === Particles.js ===
document.addEventListener('DOMContentLoaded', function () {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: '#cbd5e1' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true },
                size: { value: 2, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#cbd5e1',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: true,
                    out_mode: 'bounce'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: false },
                    resize: true
                },
                modes: {
                    grab: { distance: 180, line_linked: { opacity: 0.4 } }
                }
            },
            retina_detect: true
        });
    }
});

// === Typed.js Terminal ===
document.addEventListener('DOMContentLoaded', function () {
    if (typeof Typed !== 'undefined') {
        var options = {
            strings: ['whoami^500', 'AI Agent / Backend Engineer ^400'],
            typeSpeed: 60,
            backSpeed: 20,
            backDelay: 800,
            startDelay: 600,
            loop: false,
            showCursor: true,
            cursorChar: '|',
            onComplete: function () {
                setTimeout(function () {
                    var terminal = document.getElementById('terminal');
                    if (terminal) {
                        terminal.style.transition = 'opacity 0.4s ease, max-height 0.4s ease';
                        terminal.style.maxHeight = terminal.offsetHeight + 'px';
                        requestAnimationFrame(function () {
                            terminal.style.opacity = '0';
                            terminal.style.maxHeight = '0';
                            terminal.style.overflow = 'hidden';
                            terminal.style.marginBottom = '0';
                        });
                    }
                }, 800);
            }
        };
        new Typed('#typed', options);
    }
});

// === Bento Card Hover Preview (placeholder) ===
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.bento-card');
    cards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            // Future: show project preview tooltip
            // For now, the CSS hover effect handles visual feedback
        });
    });
});

// === GitHub Stats ===
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('github-stats');
    if (!container) return;
    var img = document.createElement('img');
    img.src = 'https://github-readme-stats.vercel.app/api?username=Swing-G&show_icons=true&hide_title=true&hide_border=true&bg_color=fafafa&text_color=1a1a1a&icon_color=2563eb';
    img.alt = 'GitHub Stats';
    img.loading = 'lazy';
    img.style.maxWidth = '100%';
    container.appendChild(img);
});
```

- [ ] **Step 2: Verify interactivity**

Open `index.html` in browser:
- Particle animation should appear behind Hero area
- Terminal should type out text then fade away
- Project cards should lift on hover
- GitHub stats image should load

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JS — particles animation, terminal typing, github stats"
```

---

### Task 4: Content Polish & Placeholder Assets

**Files:**
- Modify: `index.html` (fine-tune text content)
- Create: `assets/images/` directory for future screenshots

- [ ] **Step 1: Create assets directory with placeholder**

```bash
mkdir -p assets/images
```

- [ ] **Step 2: Review and polish content accuracy**

Verify in `index.html`:
- GitHub Star count: "40+ ⭐" (not "200+")
- GitMCP PR status: "PR 已提交" (not "已合并")
- Paper details are correct placeholder text
- Blog links match actual platforms

- [ ] **Step 3: Add .gitignore for superpowers folder**

```bash
echo ".superpowers/" >> .gitignore
```

- [ ] **Step 4: Final review in browser**

Open `index.html`, scroll through entire page, verify all sections render correctly.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/ .gitignore
git commit -m "chore: polish content, add assets dir, gitignore superpowers"
```

---

### Verification Checklist

Before declaring done:
- [ ] Page loads without console errors
- [ ] Hero particle animation works
- [ ] Terminal types and fades out smoothly
- [ ] Bento grid cards hover correctly
- [ ] GitHub stats image loads
- [ ] All external links open in new tabs
- [ ] Mobile viewport (<600px) stacks to single column
- [ ] Content accuracy: Star count, PR status, paper details correct
