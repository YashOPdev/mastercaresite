function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Counter
let started = false;

function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const step = target / 100;
    const update = () => {
      count += step;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

window.addEventListener("scroll", () => {
  const impact = document.getElementById("impact");
  const top = impact.getBoundingClientRect().top;
  if (top < window.innerHeight && !started) {
    animateCounters();
    started = true;
  }
});

// ✅ ScrollReveal - Only once, not on scroll
const sr = ScrollReveal({
  distance: '40px',
  duration: 800,
  easing: 'ease-out',
  origin: 'bottom',
  reset: false,
  delay: 100,
  mobile: true
});

sr.reveal('.section-heading', { interval: 100 });
sr.reveal('.product-item', { interval: 100 });
sr.reveal('.impact-item', { interval: 100 });
sr.reveal('.contact-btn', { delay: 200, origin: 'top' });
sr.reveal('.navbar', { origin: 'top', duration: 1000 });
sr.reveal('.hero-text', { origin: 'bottom', distance: '60px', delay: 300 });
