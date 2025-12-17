
// ------------------------------
// Smooth Scroll for Nav Links
// ------------------------------
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ------------------------------
// Navbar Shadow on Scroll
// ------------------------------
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-shadow');
  } else {
    navbar.classList.remove('nav-shadow');
  }
});

// ------------------------------
// Mobile Menu Toggle (future use)
// ------------------------------
const mobileBtn = document.querySelector('.mobile-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
