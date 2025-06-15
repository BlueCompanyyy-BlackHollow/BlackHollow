// Nawigacja mobilna - toggle menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('active');
    // Animacja hamburgera
    if(navToggle.classList.contains('active')) {
        navToggle.querySelector('.hamburger').style.transform = 'rotate(45deg)';
        navToggle.querySelector('.hamburger').style.backgroundColor = '#1869c7';
        navToggle.querySelector('.hamburger::before').style.display = 'none';
        navToggle.querySelector('.hamburger::after').style.display = 'none';
    } else {
        navToggle.querySelector('.hamburger').style.transform = 'rotate(0deg)';
        navToggle.querySelector('.hamburger').style.backgroundColor = '#1e90ff';
        navToggle.querySelector('.hamburger::before').style.display = 'block';
        navToggle.querySelector('.hamburger::after').style.display = 'block';
    }
});

// FAQ - toggle answers
const faqButtons = document.querySelectorAll('.faq-item button');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        const answer = document.getElementById(button.getAttribute('aria-controls'));
        if (answer) {
            answer.hidden = expanded;
        }
    });
});
