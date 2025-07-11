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

// Slow scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }

  // Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',
  duration: 1200,
  easing: 'ease-out',
  origin: 'bottom',
  reset: false,  // true = animates again on re-scroll
});

// Animate whole sections
sr.reveal('.section', {
  interval: 200
});

// Animate individual cards (like products, services, etc.)
sr.reveal('.product-item', {
  interval: 150,
  origin: 'bottom'
});

// Animate impact stats (if you want)
sr.reveal('.impact-item', {
  interval: 150,
  origin: 'top'
});

}

sr.reveal('.navbar', { origin: 'top', duration: 1000 });
sr.reveal('.hero-text', { origin: 'bottom', distance: '60px', delay: 300 });


