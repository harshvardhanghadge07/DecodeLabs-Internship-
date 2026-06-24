// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  const isActive = mainNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isActive);
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ===========================
// Image Fallback (graceful degrade if any hotlinked image breaks)
// ===========================
document.querySelectorAll('.menu-card-img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
