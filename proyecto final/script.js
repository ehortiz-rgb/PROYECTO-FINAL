// Botón de donación
document.getElementById("btn-donar").addEventListener("click", () => {
  alert("Gracias por tu interés en apoyar a EcoVida 🌱. Próximamente habilitaremos esta opción.");
});

// Formulario de contacto
const form = document.getElementById("contact-form");
const mensajeEstado = document.getElementById("mensaje-estado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensajeEstado.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
  form.reset();
});
// Función para ocultar y mostrar la navbar al hacer clic
const navbar = document.querySelector(".navbar");

document.querySelectorAll("a.nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Oculta navbar
    navbar.classList.add("hide-navbar");

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = navbar.offsetHeight;
      const elementPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });

      // Después de 800ms (tiempo del scroll) vuelve a aparecer
      setTimeout(() => {
        navbar.classList.remove("hide-navbar");
      }, 800);
    }
  });
});