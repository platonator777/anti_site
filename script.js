// ===== NAVBAR SCROLL =====
const nav = document.getElementById('nav');
function updateNav() {
  const onDetail = document.getElementById('pd-1').classList.contains('active')
                || document.getElementById('pd-2').classList.contains('active');
  if (onDetail || window.scrollY > 40) {
    nav.classList.remove('top'); nav.classList.add('solid');
  } else {
    nav.classList.remove('solid'); nav.classList.add('top');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ===== HAMBURGER =====
function toggleMob() {
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mob').classList.toggle('open');
}
function closeMob() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
}

// ===== HERO IMAGE LOAD =====
(function() {
  const bg = document.getElementById('hero-img');
  const img = new Image();
  img.src = 'images/hero.jpg';
})();

// ===== PRODUCT DETAIL TOGGLE =====
function showDetail(n) {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('pd-1').classList.remove('active');
  document.getElementById('pd-2').classList.remove('active');
  document.getElementById('pd-' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  nav.classList.remove('top'); nav.classList.add('solid');
}
function showMain() {
  document.getElementById('pd-1').classList.remove('active');
  document.getElementById('pd-2').classList.remove('active');
  document.getElementById('main-page').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNav();
}

// ===== FADE-IN ON SCROLL =====
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('on'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(function(el) { observer.observe(el); });

// ===== FORM SUBMIT =====
function submitForm(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-ok').style.display = 'block';
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el && document.getElementById('main-page').style.display !== 'none') {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      closeMob();
    }
  });
});
