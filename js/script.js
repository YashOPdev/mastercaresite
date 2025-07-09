function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Scroll-triggered counter
let countersStarted = false;

function startCounters() {
  if (countersStarted) return;

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.ceil(target / 200); // slower

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30); // slow frame rate
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  countersStarted = true;
}

// Detect when impact section is in view
window.addEventListener("scroll", () => {
  const impact = document.querySelector(".impact");
  const top = impact.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    startCounters();
  }
});
