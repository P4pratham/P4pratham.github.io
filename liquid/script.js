/* ==========================================================================
   APPLE LIQUID GLASS UI - INTERACTIVE ENGINE
   Developer: Prathamesh Shelke
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initLiquidCanvas();
    initGlassTiltAndShine();
    initTypewriter();
    initScrollSpy();
    initMobileMenu();
    initSkillFilters();
    initStatCounters();
    initThemeSwitcher();
    initDimensionDropdown();
    initContactForm();
});

/* --------------------------------------------------------------------------
   1. FLUID LIQUID BACKGROUND CANVAS ENGINE
   -------------------------------------------------------------------------- */
function initLiquidCanvas() {
    const canvas = document.getElementById('liquidCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null, radius: 200 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 4 + 2;
            this.alpha = Math.random() * 0.4 + 0.1;
            this.baseAlpha = this.alpha;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse repulsion / liquid ripple effect
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    let angle = Math.atan2(dy, dx);
                    let force = (mouse.radius - distance) / mouse.radius;
                    this.x -= Math.cos(angle) * force * 3;
                    this.y -= Math.sin(angle) * force * 3;
                    this.alpha = Math.min(0.8, this.baseAlpha + force * 0.4);
                } else {
                    this.alpha = this.baseAlpha;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor(width / 25), 60);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw liquid connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 140)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    resize();
    animate();
}

/* --------------------------------------------------------------------------
   2. GLASS PANEL 3D TILT & SPECULAR SHINE TRACKING
   -------------------------------------------------------------------------- */
function initGlassTiltAndShine() {
    const tiltCards = document.querySelectorAll('.tilt-card, .glass-panel');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            card.style.setProperty('--mouse-x', `${percentX}%`);
            card.style.setProperty('--mouse-y', `${percentY}%`);

            if (card.classList.contains('tilt-card')) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card.classList.contains('tilt-card')) {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            }
        });
    });
}

/* --------------------------------------------------------------------------
   3. HERO TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
function initTypewriter() {
    const element = document.getElementById('dynamicRole');
    if (!element) return;

    const roles = [
        'Business Analyst',
        'Azure Data Engineer',
        'Databricks Associate',
        'SQL & PySpark Expert',
        'Delta Lake Architect'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at full text
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* --------------------------------------------------------------------------
   4. FLOATING DOCK SCROLL SPY
   -------------------------------------------------------------------------- */
function initScrollSpy() {
    const sections = document.querySelectorAll('.liquid-section');
    const navLinks = document.querySelectorAll('.dock-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   5. SKILL MATRIX FILTERING
   -------------------------------------------------------------------------- */
function initSkillFilters() {
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   6. CONFIG-DRIVEN STAT COUNTERS ANIMATION
   -------------------------------------------------------------------------- */
async function initStatCounters() {
    const heroStatsGrid = document.getElementById('heroStatsGrid');
    if (!heroStatsGrid) return;

    const defaultConfig = [
        { id: "experience", icon: "fas fa-clock-rotate-left", target: 7, prefix: "", suffix: "+", label: "Years Experience" },
        { id: "data_processed", icon: "fas fa-server", target: 100, prefix: "", suffix: " TB+", label: "Data Processed" },
        { id: "etl_pipelines", icon: "fas fa-cubes", target: 50, prefix: "", suffix: "+", label: "ETL Pipelines" }
    ];

    let statsList = defaultConfig;

    try {
        const response = await fetch('config.json');
        if (response.ok) {
            const configData = await response.json();
            if (configData && Array.isArray(configData.stats)) {
                statsList = configData.stats;
            }
        }
    } catch (err) {
        console.warn('Using default stats config due to fetch fallback:', err);
    }

    // Render stats dynamically from config JSON
    heroStatsGrid.innerHTML = statsList.map(stat => `
        <div class="glass-stat-card">
            <div class="stat-icon"><i class="${stat.icon}"></i></div>
            <div class="stat-info">
                <div class="stat-number" 
                     data-target="${stat.target}" 
                     data-prefix="${stat.prefix || ''}" 
                     data-suffix="${stat.suffix || ''}">0</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        </div>
    `).join('');

    let animated = false;
    const statNumbers = heroStatsGrid.querySelectorAll('.stat-number');

    function startCounting() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const prefix = stat.getAttribute('data-prefix') || '';
            const suffix = stat.getAttribute('data-suffix') || '';

            if (isNaN(target)) return;

            let count = 0;
            const increment = Math.ceil(target / 45);
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = `${prefix}${target}${suffix}`;
                    clearInterval(timer);
                } else {
                    stat.textContent = `${prefix}${count}${suffix}`;
                }
            }, 35);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                startCounting();
                animated = true;
            }
        });
    }, { threshold: 0.3 });

    observer.observe(heroStatsGrid);
}

/* --------------------------------------------------------------------------
   7. THEME SWITCHER
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    const themes = ['midnight', 'sapphire', 'emerald'];
    let currentThemeIndex = 0;

    // Load saved theme
    const savedTheme = localStorage.getItem('liquid_theme');
    if (savedTheme && themes.includes(savedTheme)) {
        currentThemeIndex = themes.indexOf(savedTheme);
        document.body.setAttribute('data-theme', savedTheme);
    }

    themeBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('liquid_theme', newTheme);
    });
}

/* --------------------------------------------------------------------------
   8. DIMENSION SWITCHER DROPDOWN
   -------------------------------------------------------------------------- */
function initDimensionDropdown() {
    const trigger = document.getElementById('dimensionTrigger');
    const dropdown = document.querySelector('.dimension-dropdown');

    if (!trigger || !dropdown) return;

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
}

/* --------------------------------------------------------------------------
   9. CONTACT FORM INTERACTIVITY
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('liquidContactForm');
    const toast = document.getElementById('formToast');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form send animation
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();

            if (toast) {
                toast.classList.add('active');
                setTimeout(() => {
                    toast.classList.remove('active');
                }, 5000);
            }
        }, 1200);
    });
}

/* --------------------------------------------------------------------------
   10. MOBILE MENU TOGGLE HANDLER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const mobileToggleBtn = document.getElementById('mobileDockToggle');
    const dockMenu = document.querySelector('.dock-menu');
    const liquidDock = document.getElementById('liquidDock');

    if (!mobileToggleBtn || !dockMenu) return;

    mobileToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dockMenu.classList.toggle('mobile-open');
        mobileToggleBtn.classList.toggle('active', isOpen);
        
        const icon = mobileToggleBtn.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking any nav link
    const navLinks = dockMenu.querySelectorAll('.dock-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            dockMenu.classList.remove('mobile-open');
            mobileToggleBtn.classList.remove('active');
            const icon = mobileToggleBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    // Close when clicking outside dock
    document.addEventListener('click', (e) => {
        if (liquidDock && !liquidDock.contains(e.target)) {
            dockMenu.classList.remove('mobile-open');
            mobileToggleBtn.classList.remove('active');
            const icon = mobileToggleBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    });
}

