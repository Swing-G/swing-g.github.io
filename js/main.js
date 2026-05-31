// === Particles.js ===
document.addEventListener('DOMContentLoaded', function () {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles')) {
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

// === GitHub Stats ===
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('github-stats');
    if (!container) return;
    const img = document.createElement('img');
    img.src = 'https://github-readme-stats.vercel.app/api?username=Swing-G&show_icons=true&hide_title=true&hide_border=true&bg_color=fafafa&text_color=1a1a1a&icon_color=2563eb';
    img.alt = 'GitHub Stats';
    img.loading = 'lazy';
    img.style.maxWidth = '100%';
    container.appendChild(img);
});
