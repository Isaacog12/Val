// Floating Hearts Animation (Optimized)
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖'];
    let heartCount = 0;
    const maxHearts = 8; // Limit number of hearts

    setInterval(() => {
        if (heartCount >= maxHearts) return; // Prevent too many hearts

        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 12) + 's';

        container.appendChild(heart);
        heartCount++;

        setTimeout(() => {
            heart.remove();
            heartCount--;
        }, 17000);
    }, 5000); // Less frequent
}

// Reveal Animation on Scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimized Parallax Effect (throttled)
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    revealOnScroll();
});
