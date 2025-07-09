// script.js

// Scroll-triggered counters
const counters = document.querySelectorAll('.counter');
let triggered = false;

function animateCounters() {
  if (triggered) return;
  const scrollY = window.scrollY + window.innerHeight;
  const impactTop = document.querySelector('.impact').offsetTop;

  if (scrollY > impactTop + 100) {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 150;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    triggered = true;
  }
}

window.addEventListener('scroll', animateCounters);

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
