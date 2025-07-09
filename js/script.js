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
