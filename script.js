const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
    toggle.setAttribute("aria-label", isOpen ? "abrir menú" : "cerrar menú");
  });
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "abrir menú");
    });
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();

\n// reloj discreto con la hora de Colombia (sin segundos)
const colombiaClock = document.querySelector("#colombia-clock");
function updateColombiaClock() {
  if (!colombiaClock) return;
  colombiaClock.textContent = new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(new Date());
}
updateColombiaClock();
setInterval(updateColombiaClock, 15000);

// instala la experiencia PWA y registra caché básica para uso sin conexión
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
