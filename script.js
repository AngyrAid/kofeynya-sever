// Мобильное меню и демонстрационная форма обратной связи.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const opened = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.textContent = opened ? "×" : "☰";
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }
  const form = document.querySelector("#contactForm");
  const success = document.querySelector("#formSuccess");
  if (form && success) form.addEventListener("submit", event => {
    event.preventDefault();
    success.classList.add("show");
    form.reset();
  });
});
