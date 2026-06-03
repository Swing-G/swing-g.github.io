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

// === Blog Articles Loader ===
document.addEventListener('DOMContentLoaded', function () {
    var listEl = document.getElementById('blog-list');
    var coverImg = document.getElementById('blog-cover-img');
    if (!listEl || !coverImg) return;

    fetch('./csdn_articles.json')
        .then(function (res) { return res.json(); })
        .then(function (articles) {
            if (!articles.length) {
                listEl.innerHTML = '<span class="blog-soon-text">暂无文章</span>';
                return;
            }
            listEl.innerHTML = '';

            // Default: show first article's cover (or placeholder)
            showCover(coverImg, articles[0].coverImage);

            articles.forEach(function (article, index) {
                var item = document.createElement('div');
                item.className = 'blog-item' + (index === 0 ? ' active' : '');
                item.innerHTML =
                    '<div class="blog-item-title">' + escapeHtml(article.title) + '</div>' +
                    '<div class="blog-item-desc">' + escapeHtml(article.description) + '</div>';

                item.addEventListener('click', function () {
                    window.open(article.link, '_blank', 'noopener noreferrer');
                });
                item.addEventListener('mouseenter', function () {
                    var items = listEl.querySelectorAll('.blog-item');
                    items.forEach(function (el) { el.classList.remove('active'); });
                    item.classList.add('active');
                    showCover(coverImg, article.coverImage);
                });

                listEl.appendChild(item);
            });
        })
        .catch(function () {
            listEl.innerHTML = '<span class="blog-soon-text">加载失败</span>';
        });

    function showCover(img, src) {
        if (src) {
            img.src = src;
        } else {
            img.src = 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="260" height="180" fill="%23f5f5f5"><rect width="260" height="180"/><text x="130" y="95" text-anchor="middle" fill="%23999" font-size="14" font-family="sans-serif">CSDN</text></svg>'
            );
        }
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
});

