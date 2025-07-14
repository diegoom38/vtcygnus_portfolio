function downloadProject(path, name) {
  const link = document.createElement("a");
  link.href = path; // caminho do arquivo (ex: 'gato-preto.pdf')
  link.download = name; // força o download
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Menu hamburger functionality
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fechar o menu quando um link for clicado (opcional)
const menuLinks = document.querySelectorAll("#mobile-menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
