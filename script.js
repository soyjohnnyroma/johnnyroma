// Menú móvil: abrir y cerrar.
const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
    toggle.setAttribute(
      "aria-label",
      isOpen ? "abrir menú" : "cerrar menú"
    );
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "abrir menú");
    });
  });
}

// Reloj con hora de Colombia.
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

// Año del pie de página.
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Registro de la aplicación PWA.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .catch(() => {});
  });
}