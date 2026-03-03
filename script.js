const elements = document.querySelectorAll(".card, .stats div");

function revealOnScroll() {
  elements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 120);
    }
  });
}

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
