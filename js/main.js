// === Particles.js ===
document.addEventListener('DOMContentLoaded', function () {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles')) {
        particlesJS('particles', {
            particles: {
                number: { value: 50, density: { enable: true, value_area: 800 } },
                color: { value: '#94a3b8' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#94a3b8',
                    opacity: 0.25,
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
    if (typeof Typed !== 'undefined' && document.getElementById('typed')) {
        const options = {
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
                    const hint = document.querySelector('.scroll-hint');
                    if (hint) {
                        hint.classList.add('visible');
                    }
                }, 400);
            }
        };
        new Typed('#typed', options);
    }
});

// === Navigation Click-to-Scroll ===
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// === Intersection Observer — Active Nav Highlight ===
document.addEventListener('DOMContentLoaded', function () {
    const screens = document.querySelectorAll('.screen');
    const navItems = document.querySelectorAll('.nav-item');

    if (!screens.length || !navItems.length) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.id;
                navItems.forEach(function (item) {
                    if (item.getAttribute('data-target') === id) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    screens.forEach(function (screen) {
        observer.observe(screen);
    });
});

// === Blog Timeline Loader ===
document.addEventListener('DOMContentLoaded', function () {
    var tl = document.getElementById('blog-timeline');
    if (!tl) return;

    function renderTimeline(articles) {
        if (!articles.length) {
            tl.innerHTML = '<span class="blog-soon-text">暂无文章</span>';
            return;
        }
        tl.innerHTML = '';
        articles.forEach(function (a) {
            var item = document.createElement('div');
            item.className = 'blog-tl-item';
            var dateStr = a.date || '';
            item.innerHTML =
                '<span class="blog-tl-dot"></span>' +
                '<span class="blog-tl-text">' +
                '<div class="blog-tl-title">' + escapeHtml(a.title) + '</div>' +
                '<div class="blog-tl-desc">' + escapeHtml(a.description) + '</div>' +
                '</span>' +
                (dateStr ? '<span class="blog-tl-date">' + escapeHtml(dateStr) + '</span>' : '');
            item.addEventListener('click', function () {
                if (a.link) window.open(a.link, '_blank', 'noopener noreferrer');
            });
            tl.appendChild(item);
        });
    }

    var isLocal = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    if (isLocal) {
        renderTimeline([
            { title: '智能体时代的降维打击：这5种工作流模式你认识几个？', description: '本文深入探讨了AI Agentic时代的Workflow与Agent演进，对比了两种核心模式的适配差异，并重点拆解了5大经典Agentic Workflow模式', link: 'https://blog.csdn.net/m0_58782205/article/details/161367378', date: '05-28' },
            { title: 'GPT-6与DeepSeek V4巅峰对决：AI行业迎来全新变革', description: '2026年4月，AI领域迎来史诗级对决：OpenAI推出代号"土豆"的GPT-6，投入20亿美元打造AGI终极武器，采用革命性Symphony架构', link: 'https://blog.csdn.net/m0_58782205/article/details/159964745', date: '04-24' },
            { title: '龙虾智能体不是玩具！国家安全部提醒：这3个防护步骤必做', description: 'OpenClaw（"龙虾"）作为2026年现象级开源AI智能体，凭借自主执行任务、插件扩展和持续进化的特性迅速流行', link: 'https://blog.csdn.net/m0_58782205/article/details/159172563', date: '04-18' },
            { title: 'Spring AI 1.0 正式发布：Java 开发者的 AI 原生时代来了', description: 'Spring AI 从孵化器毕业正式发布 1.0 版本，为 Java 生态带来完整的 AI 集成能力，包括 Chat、Embedding、Vector Store 等核心模块', link: 'https://blog.csdn.net/m0_58782205', date: '03-12' },
            { title: '从零构建一个 MCP Server：让 LLM 也能调用你的工具', description: '手把手教你用 Java/Spring Boot 构建一个 MCP Server，实现 Tool 注册、资源暴露和 Prompt 模板', link: 'https://blog.csdn.net/m0_58782205', date: '02-28' },
            { title: 'Canal + Kafka + ES：亿级数据实时同步方案实践', description: '基于 Canal 监听 MySQL binlog，经 Kafka 异步消峰，最终写入 Elasticsearch 实现搜索，完整踩坑记录与性能调优方案', link: 'https://blog.csdn.net/m0_58782205', date: '02-10' },
            { title: 'PostgreSQL pgvector 向量检索性能调优指南', description: '深入 pgvector 索引机制，对比 IVFFlat 与 HNSW 的实际表现，分享百万级向量数据下的查询优化经验', link: 'https://blog.csdn.net/m0_58782205', date: '01-22' },
            { title: '2025 年终总结：一名在读硕士的 AI Agent 探索之路', description: '回顾一年来的技术成长：从 Spring Boot 到 AI Agent，从个人项目到开源贡献，分享学习路径与未来规划', link: 'https://blog.csdn.net/m0_58782205', date: '01-05' }
        ]);
    } else {
        fetch('/csdn_articles.json')
            .then(function (res) { return res.ok ? res.json() : []; })
            .then(renderTimeline)
            .catch(function () { tl.innerHTML = '<span class="blog-soon-text">加载失败</span>'; });
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
});


