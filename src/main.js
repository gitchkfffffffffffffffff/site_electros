// Плавная прокрутка по якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Подсветка активной секции в меню
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.style.color =
                        link.getAttribute('href') === `#${id}` ? '#fbbf24' : '';
                });
            }
        });
    },
    { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

console.log('Сайт услуг электрика загружен ⚡');
