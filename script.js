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

// Auto-play background music
function initBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.volume = 0.4; // Set to 40% volume
        // Try to play automatically
        audio.play().catch(err => {
            // If autoplay is blocked, play on first user interaction
            console.log('Autoplay blocked, will play on first interaction');
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }
}

// 365 Reasons Why I Love You
const reasons = [
    "Your smile lights up my entire world", "The way your eyes sparkle when you laugh", "How you make me feel like the luckiest person alive",
    "Your kindness touches everyone around you", "The sound of your laughter is my favorite melody", "How you believe in me even when I doubt myself",
    "Your strength inspires me every single day", "The way you care for others with such a pure heart", "How beautiful you look when you wake up",
    "Your intelligence amazes me constantly", "The way you listen when I need to talk", "How you make ordinary moments feel extraordinary",
    "Your compassion for those in need", "The way you hold my hand", "How you challenge me to be better",
    "Your creativity and unique perspective", "The way you dance like nobody's watching", "How you make me laugh even on my worst days",
    "Your determination to achieve your dreams", "The way you say my name", "How you love unconditionally",
    "Your beautiful soul that shines from within", "The way you comfort me when I'm down", "How you make every place feel like home",
    "Your passion for the things you love", "The way you bite your lip when you're concentrating", "How you stand up for what you believe in",
    "Your gentle touch that calms my worries", "The way you encourage my dreams", "How you make me want to be a better person",
    "Your sense of humor that brightens my days", "The way you look at me with those beautiful eyes", "How you accept me for who I am",
    "Your patience with my flaws", "The way you surprise me with little gestures", "How you make me feel safe and loved",
    "Your ambition and drive to succeed", "The way you play with your hair", "How you remember the little things I tell you",
    "Your loyalty and faithfulness", "The way you hug me like you never want to let go", "How you make me feel understood",
    "Your positive energy that's contagious", "The way you smell so amazing", "How you support my goals and aspirations",
    "Your honesty even when it's hard", "The way you kiss me goodnight", "How you make me feel cherished",
    "Your wisdom beyond your years", "The way you dance in the kitchen", "How you bring out the best in me",
    "Your selflessness in putting others first", "The way you scrunch your nose when you smile", "How you make me feel complete",
    "Your courage to face challenges", "The way you whisper 'I love you'", "How you make time stand still when we're together",
    "Your generosity with your time and love", "The way you look in my favorite dress", "How you make me believe in forever",
    "Your ability to forgive and move forward", "The way you hold me when I'm scared", "How you make every day an adventure",
    "Your dedication to your family", "The way you laugh at my silly jokes", "How you make me feel like I matter",
    "Your grace under pressure", "The way you look at me across a crowded room", "How you make me want to give you the world",
    "Your empathy for others' pain", "The way you sing in the shower", "How you make me feel invincible",
    "Your authenticity in being yourself", "The way you cuddle close to me", "How you make me believe in love",
    "Your resilience in tough times", "The way you blush when I compliment you", "How you make me feel appreciated",
    "Your thoughtfulness in everything you do", "The way you kiss my forehead", "How you make me feel like I'm enough",
    "Your confidence that's so attractive", "The way you play with my fingers", "How you make me want to be faithful forever",
    "Your humility despite your greatness", "The way you look at me when you think I'm not watching", "How you make me feel protected",
    "Your spontaneity that keeps life exciting", "The way you rest your head on my shoulder", "How you make me believe in us",
    "Your work ethic and dedication", "The way you say 'good morning'", "How you make me feel valued",
    "Your ability to see the good in everyone", "The way you intertwine your fingers with mine", "How you make me want to grow old with you",
    "Your love for learning new things", "The way you look in my hoodie", "How you make me feel at peace",
    "Your respect for my opinions", "The way you trace patterns on my skin", "How you make me believe in miracles",
    "Your adventurous spirit", "The way you look at me when you're happy", "How you make me feel chosen",
    "Your commitment to your values", "The way you lean into me", "How you make me want to protect you always",
    "Your ability to make friends anywhere", "The way you smile with your whole face", "How you make me feel grateful",
    "Your love for your passions", "The way you wrap your arms around me", "How you make me believe in destiny",
    "Your openness to new experiences", "The way you look when you're sleeping", "How you make me feel blessed",
    "Your independence and strength", "The way you kiss me hello", "How you make me want to be worthy of you",
    "Your playfulness that brings out my inner child", "The way you look in candlelight", "How you make me feel hopeful",
    "Your reliability when I need you", "The way you touch my face gently", "How you make me believe we're meant to be",
    "Your creativity in solving problems", "The way you laugh with your whole body", "How you make me feel secure",
    "Your warmth that melts my heart", "The way you look at me with love", "How you make me want to give you everything",
    "Your ability to forgive my mistakes", "The way you nestle into my arms", "How you make me feel understood",
    "Your passion for justice", "The way you bite your lip when you're shy", "How you make me believe in soulmates",
    "Your love for animals", "The way you hold my face when you kiss me", "How you make me feel important",
    "Your curiosity about the world", "The way you look in the morning light", "How you make me want to be better every day",
    "Your patience with my quirks", "The way you whisper secrets to me", "How you make me feel loved unconditionally",
    "Your determination to make a difference", "The way you play with my hair", "How you make me believe in happy endings",
    "Your ability to make me smile", "The way you look when you're concentrating", "How you make me feel like I'm home",
    "Your kindness to strangers", "The way you squeeze my hand", "How you make me want to protect your heart",
    "Your love for your dreams", "The way you look at me when I'm talking", "How you make me feel like the only person in the world",
    "Your strength in vulnerability", "The way you curl up next to me", "How you make me believe in forever love",
    "Your enthusiasm for life", "The way you smile just for me", "How you make me feel cherished every day",
    "Your honesty about your feelings", "The way you kiss my cheek", "How you make me want to be your everything",
    "Your dedication to growth", "The way you look in my arms", "How you make me feel like I can do anything",
    "Your compassion for the hurting", "The way you say 'I miss you'", "How you make me believe in true love",
    "Your ability to see beauty everywhere", "The way you rest against me", "How you make me feel needed",
    "Your courage to be vulnerable", "The way you look when you're happy", "How you make me want to make you proud",
    "Your love for your family", "The way you touch my arm gently", "How you make me feel complete",
    "Your wisdom in difficult situations", "The way you look at me with those eyes", "How you make me believe we can overcome anything",
    "Your gentleness with my heart", "The way you lean your head on me", "How you make me feel like I'm enough just as I am",
    "Your passion for your beliefs", "The way you smile when you see me", "How you make me want to spend forever with you",
    "Your ability to make me laugh", "The way you hold onto me", "How you make me feel like the luckiest person alive",
    "Your love for adventure", "The way you look in the sunset", "How you make me believe in magic",
    "Your respect for my dreams", "The way you kiss me softly", "How you make me feel adored",
    "Your strength in adversity", "The way you look when you're thinking", "How you make me want to be your safe place",
    "Your kindness to everyone", "The way you wrap yourself around me", "How you make me believe in us every single day",
    "Your ability to forgive", "The way you look at me with love in your eyes", "How you make me feel like I matter",
    "Your dedication to what you love", "The way you hold me close", "How you make me want to give you the moon and stars",
    "Your honesty even when it's hard", "The way you smile at me across the room", "How you make me feel protected and safe",
    "Your love for learning", "The way you kiss my hand", "How you make me believe in happily ever after",
    "Your ability to see the best in me", "The way you cuddle into me", "How you make me feel grateful for every moment",
    "Your passion for life", "The way you look when you laugh", "How you make me want to be the best version of myself",
    "Your patience with my growth", "The way you touch my face", "How you make me feel loved beyond measure",
    "Your strength of character", "The way you look in my eyes", "How you make me believe anything is possible",
    "Your kindness to those in need", "The way you hold me tight", "How you make me feel like I'm your world",
    "Your ability to make everything better", "The way you smile just because", "How you make me want to love you forever",
    "Your love for your passions", "The way you rest your hand on mine", "How you make me feel like I belong",
    "Your courage to chase your dreams", "The way you look when you're peaceful", "How you make me believe in destiny",
    "Your compassion for others", "The way you kiss me goodbye", "How you make me feel chosen every day",
    "Your ability to inspire me", "The way you look at me with those beautiful eyes", "How you make me want to be worthy of your love",
    "Your dedication to your goals", "The way you lean into my touch", "How you make me feel like I'm the only one",
    "Your love for simple moments", "The way you smile when I say I love you", "How you make me believe in miracles",
    "Your strength in being yourself", "The way you hold my hand in public", "How you make me feel proud to be yours",
    "Your ability to make me feel special", "The way you look when you're content", "How you make me want to protect you always",
    "Your passion for making a difference", "The way you kiss me hello", "How you make me feel like I'm home",
    "Your kindness that knows no bounds", "The way you nestle close to me", "How you make me believe we're perfect together",
    "Your ability to see through my walls", "The way you look in the moonlight", "How you make me feel understood completely",
    "Your love for your dreams", "The way you touch my heart", "How you make me want to spend every moment with you",
    "Your courage to be vulnerable with me", "The way you smile with your eyes", "How you make me feel like the luckiest person",
    "Your dedication to us", "The way you hold me when I cry", "How you make me believe in forever and always",
    "Your ability to make me smile", "The way you look at me with pure love", "How you make me feel cherished beyond words",
    "Your passion for what you believe in", "The way you kiss my forehead goodnight", "How you make me want to be everything you need",
    "Your strength in loving me", "The way you look when you're mine", "How you make me feel like I've found my person",
    "Your kindness that melts my heart", "The way you hold onto me like I'm precious", "How you make me believe in soulmates",
    "Your ability to make everything okay", "The way you smile when you think of us", "How you make me feel loved in every way",
    "Your love for life's little things", "The way you look at me like I'm your world", "How you make me want to love you for all my days",
    "Your courage to love me fully", "The way you rest in my arms", "How you make me feel like I'm exactly where I belong",
    "Your dedication to our future", "The way you kiss me like you mean it", "How you make me believe in true love's kiss",
    "Your ability to see my heart", "The way you look when you say I love you", "How you make me feel like I'm your forever",
    "Your passion for our love", "The way you hold me close at night", "How you make me want to give you my whole heart",
    "Your strength in choosing me", "The way you smile just for me", "How you make me feel like I'm your one and only",
    "Your kindness that fills my soul", "The way you look at me with forever in your eyes", "How you make me believe we're meant to be together",
    "Your ability to love me unconditionally", "The way you touch my soul", "How you make me feel like I'm the most important person",
    "Your love that completes me", "The way you look when you're happy with me", "How you make me want to be yours forever",
    "Your courage to build a life with me", "The way you hold my heart gently", "How you make me feel like I've found my home",
    "Your dedication to loving me", "The way you kiss me like I'm precious", "How you make me believe in our forever",
    "Your ability to be my everything", "The way you look at me with all your love", "How you make me feel like the most blessed person alive",
    "Your passion for our relationship", "The way you hold me like you'll never let go", "How you make me want to love you until my last breath",
    "Your strength in being my partner", "The way you smile when you think about our future", "How you make me feel like I'm your greatest treasure",
    "Your kindness that knows no end", "The way you love me with your whole heart", "How you make me believe in happily ever after with you",
    "Your ability to be my best friend", "The way you look at me like I'm your dream come true", "How you make me feel like I'm your always and forever",
    "Your love that makes me whole", "The way you choose me every single day", "How you make me want to spend eternity loving you",
    "Your courage to love me through everything", "The way you hold me like I'm your world", "How you make me feel like I'm your one true love",
    "Your dedication to our love story", "The way you kiss me like I'm your everything", "How you make me believe in our beautiful forever together"
];

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

let currentReasonIndex = 0;

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getDateFromDayOfYear(dayOfYear) {
    const year = new Date().getFullYear();
    const date = new Date(year, 0);
    date.setDate(dayOfYear);
    return date;
}

function formatDate(date) {
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
}

function displayReason(index) {
    if (index < 0) index = 364;
    if (index > 364) index = 0;

    currentReasonIndex = index;
    const date = getDateFromDayOfYear(index + 1);

    document.getElementById('reasonDate').textContent = formatDate(date);
    document.getElementById('reasonNumber').textContent = `Day ${index + 1} of 365`;
    document.getElementById('reasonText').textContent = reasons[index];

    // Add animation
    const reasonText = document.getElementById('reasonText');
    reasonText.style.animation = 'none';
    setTimeout(() => {
        reasonText.style.animation = 'fadeIn 0.5s ease-out';
    }, 10);
}

function init365Reasons() {
    // Start from today's day of year (January 1 = day 1)
    const todayIndex = getDayOfYear() - 1;
    displayReason(todayIndex);

    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', () => {
        displayReason(currentReasonIndex - 1);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        displayReason(currentReasonIndex + 1);
    });

    document.getElementById('randomBtn').addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * 365);
        displayReason(randomIndex);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    revealOnScroll();
    initBackgroundMusic();
    init365Reasons();
});
