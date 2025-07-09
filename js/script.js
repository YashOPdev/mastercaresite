const counters = document.querySelectorAll('.counter');
let started = false;

function runCounters() {
  if (started) return;
  const statsSection = document.getElementById('stats');
  const triggerTop = statsSection.getBoundingClientRect().top;
  if (triggerTop < window.innerHeight - 100) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const update = () => {
        const increment = target / 100;
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
    });
    started = true;
  }
}
window.addEventListener('scroll', runCounters);
window.addEventListener('load', runCounters);

