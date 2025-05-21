// Animation on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-fadein, .animate-slideup, .animate-zoom').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
});

// Simple form handler
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
  });
}
