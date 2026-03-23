// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
        }
    });
});

// ==================== MOUSE FOLLOW GLOW ==================== 
const cards = document.querySelectorAll('.pack-card');
const light = document.createElement('div');
light.style.cssText = `
    position: fixed;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0, 255, 159, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    mix-blend-mode: screen;
    display: none;
`;
document.body.appendChild(light);

document.addEventListener('mousemove', (e) => {
    light.style.left = (e.clientX - 100) + 'px';
    light.style.top = (e.clientY - 100) + 'px';
    light.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    light.style.display = 'none';
});

// ==================== HOVER ANIMATION ==================== 
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        cards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '0.7';
            }
        });
    });

    card.addEventListener('mouseleave', function() {
        cards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ==================== SCROLL ANIMATION ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.pack-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// ==================== BUTTON RIPPLE EFFECT ==================== 
document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== RIPPLE ANIMATION ==================== 
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== COUNTER ANIMATION ==================== 
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-count]');
    elements.forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const increment = Math.ceil(target / 30);
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            el.textContent = current;
        }, 50);
    });
};

// ==================== COPY LINK FUNCTION ==================== 
function copyLink(url) {
    navigator.clipboard.writeText(url);
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// ==================== DARK MODE TOGGLE (Optional) ==================== 
const toggleDarkMode = () => {
    document.body.classList.toggle('light-mode');
};

console.log('🎮 Gaming Bio loaded successfully!');