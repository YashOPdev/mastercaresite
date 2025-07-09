function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Scroll-triggered counters
const counters = document.querySelectorAll(".counter");
let started = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    let count = 0;
    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener("scroll", () => {
  const impactSection = document.querySelector("#impact");
  if (!started && isInViewport(impactSection)) {
    animateCounters();
    started = true;
  }
});
