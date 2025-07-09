function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

let counted = false;
const counterElems = document.querySelectorAll('.counter');

function runCounters() {
  if (counted) return;
  const impactSection = document.getElementById('impact');
  if (!impactSection) return;

  const rect = impactSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    counterElems.forEach(el => {
      const target = +el.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 200);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = count;
        }
      }, 25);
    });
    counted = true;
  }
}

window.addEventListener('scroll', runCounters);
window.addEventListener('load', runCounters);
