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
                    const terminal = document.getElementById('terminal');
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
