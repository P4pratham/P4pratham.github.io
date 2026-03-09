/* ==========================================================
   SPIDER-VERSE PORTFOLIO - JavaScript
   Canvas web, glitch effects, scroll reveals, counters,
   comic pops, dimension portal, parallax
   ========================================================== */

// ---- PAGE LOADER ----
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('pageLoader').classList.add('hidden');
    }, 1500);
});

// ---- SPIDER WEB CANVAS ----
const canvas = document.getElementById('spiderCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class WebParticle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + .5;
        this.speedX = (Math.random() - .5) * .5;
        this.speedY = (Math.random() - .5) * .5;
        this.opacity = Math.random() * .3 + .1;
        this.color = ['#e91e63','#00e5ff','#aa00ff','#ffea00'][Math.floor(Math.random()*4)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

for (let i = 0; i < 80; i++) particles.push(new WebParticle());

function drawWeb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(233,30,99,${.08 * (1 - dist/150)})`;
                ctx.lineWidth = .5;
                ctx.stroke();
            }
        }
        const dmx = particles[i].x - mouse.x;
        const dmy = particles[i].y - mouse.y;
        const distM = Math.sqrt(dmx*dmx + dmy*dmy);
        if (distM < 200) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0,229,255,${.15 * (1 - distM/200)})`;
            ctx.lineWidth = .8;
            ctx.stroke();
        }
    }
    requestAnimationFrame(drawWeb);
}
drawWeb();

// ---- MOUSE TRACKING ----
const portal = document.getElementById('dimensionPortal');

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    portal.style.left = e.clientX + 'px';
    portal.style.top = e.clientY + 'px';
    portal.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    portal.style.opacity = '0';
});

// ---- HAMBURGER ----
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ---- SCROLL REVEAL ----
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        const windowH = window.innerHeight;
        if (top < windowH - 80) {
            setTimeout(() => {
                el.classList.add('active');
                el.classList.add('pop');
            }, i % 3 * 100);
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ---- COUNTER ANIMATION ----
const counters = document.querySelectorAll('.stat-num');
let counterStarted = false;

const startCounters = () => {
    if (counterStarted) return;
    const heroSection = document.getElementById('home');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        counterStarted = true;
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + '+';
                }
            };
            update();
        });
    }
};
window.addEventListener('scroll', startCounters);
startCounters();

// ---- SKILL BARS ----
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.progress + '%';
        }
    });
};
window.addEventListener('scroll', animateSkills);
animateSkills();

// ---- COMIC POP ON CLICK ----
const comicWords = ['POW!','ZAP!','THWIP!','BANG!','WHAM!','CRACK!','BOOM!','SNAP!','DATA!','SQL!','SPARK!'];

document.addEventListener('click', (e) => {
    const pop = document.createElement('div');
    pop.className = 'comic-pop';
    pop.textContent = comicWords[Math.floor(Math.random() * comicWords.length)];
    pop.style.left = e.clientX + 'px';
    pop.style.top = (e.clientY + window.scrollY) + 'px';
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 600);
});

// ---- CONTACT FORM ----
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'SENT! THWIP!';
    btn.style.background = 'var(--sv-green)';
    btn.style.borderColor = 'var(--sv-green)';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> SEND MESSAGE';
        btn.style.background = 'var(--sv-magenta)';
        btn.style.borderColor = 'var(--sv-magenta)';
        e.target.reset();
    }, 3000);
});

// ---- RANDOM INK SPLATTERS ----
function createSplatters() {
    const colors = ['var(--sv-magenta)', 'var(--sv-cyan)', 'var(--sv-purple)', 'var(--sv-yellow)'];
    const sections = document.querySelectorAll('.comic-section');
    sections.forEach(section => {
        for (let i = 0; i < 3; i++) {
            const splatter = document.createElement('div');
            splatter.className = 'ink-splatter';
            const size = Math.random() * 200 + 50;
            splatter.style.width = size + 'px';
            splatter.style.height = size + 'px';
            splatter.style.background = colors[Math.floor(Math.random() * colors.length)];
            splatter.style.top = Math.random() * 80 + 10 + '%';
            splatter.style.left = Math.random() * 80 + 10 + '%';
            splatter.style.borderRadius = `${Math.random()*50+20}% ${Math.random()*50+20}% ${Math.random()*50+20}% ${Math.random()*50+20}%`;
            section.appendChild(splatter);
        }
    });
}
createSplatters();

// ---- SMOOTH SCROLL for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---- PARALLAX on hero profile ----
const profileFrame = document.querySelector('.profile-frame');
if (profileFrame) {
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - .5) * 20;
        const y = (e.clientY / window.innerHeight - .5) * 20;
        profileFrame.style.transform = `translateY(${Math.sin(Date.now()/1000)*10}px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
}

// ---- ACTIVE NAV LINK HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--sv-cyan)';
        }
    });
});

// ---- WEB-SHOOTER TRAIL (mouse trail) ----
const trailDots = [];
const TRAIL_LENGTH = 12;

for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.className = 'web-trail-dot';
    dot.style.opacity = '0';
    document.body.appendChild(dot);
    trailDots.push({ el: dot, x: 0, y: 0 });
}

let trailMouse = { x: 0, y: 0 };
document.addEventListener('mousemove', (e) => {
    trailMouse.x = e.clientX;
    trailMouse.y = e.clientY;
});

function updateTrail() {
    let prevX = trailMouse.x, prevY = trailMouse.y;
    trailDots.forEach((dot, i) => {
        const speed = .35 - (i * .015);
        dot.x += (prevX - dot.x) * speed;
        dot.y += (prevY - dot.y) * speed;
        dot.el.style.left = dot.x + 'px';
        dot.el.style.top = dot.y + 'px';
        dot.el.style.opacity = (1 - i / TRAIL_LENGTH) * .4;
        const scale = 1 - (i / TRAIL_LENGTH) * .6;
        dot.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        dot.el.style.background = i % 2 === 0 ? '#e91e63' : '#00e5ff';
        prevX = dot.x;
        prevY = dot.y;
    });
    requestAnimationFrame(updateTrail);
}
updateTrail();

// ---- SPIDER-SENSE INDICATOR ----
const spiderSense = document.getElementById('spiderSense');
let senseTimeout;

window.addEventListener('scroll', () => {
    const scrollSpeed = Math.abs(window.scrollY - (window._lastScroll || 0));
    window._lastScroll = window.scrollY;

    if (scrollSpeed > 80) {
        spiderSense.classList.add('active');
        clearTimeout(senseTimeout);
        senseTimeout = setTimeout(() => {
            spiderSense.classList.remove('active');
        }, 1500);
    }
});

// ---- RANDOM DIMENSION GLITCH ----
const glitchOverlay = document.getElementById('dimensionGlitch');

function triggerDimensionGlitch() {
    glitchOverlay.classList.add('active');
    setTimeout(() => glitchOverlay.classList.remove('active'), 300);

    const nextGlitch = Math.random() * 12000 + 6000;
    setTimeout(triggerDimensionGlitch, nextGlitch);
}
setTimeout(triggerDimensionGlitch, 4000);

// ---- COMIC DIVIDER REVEAL (slam-in on scroll) ----
const dividers = document.querySelectorAll('.comic-divider');
const observerOptions = { threshold: 0.5 };
const dividerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const text = entry.target.querySelector('.divider-text');
            if (text) text.style.animation = 'dividerSlam .6s cubic-bezier(.25,.1,.25,1.4)';
        }
    });
}, observerOptions);
dividers.forEach(d => dividerObserver.observe(d));

// ---- EASTER EGG: Konami Code reveals hidden message ----
const konamiCode = [38,38,40,40,37,39,37,39,66,65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            const msg = document.createElement('div');
            msg.className = 'comic-pop';
            msg.textContent = 'GREAT POWER = GREAT RESPONSIBILITY!';
            msg.style.left = '50%';
            msg.style.top = (window.scrollY + window.innerHeight / 2) + 'px';
            msg.style.transform = 'translateX(-50%)';
            msg.style.fontSize = '3rem';
            msg.style.whiteSpace = 'nowrap';
            msg.style.animation = 'comicPop 2s forwards';
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2000);
        }
    } else {
        konamiIndex = 0;
    }
});
