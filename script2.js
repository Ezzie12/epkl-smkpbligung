const btnNavbar = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".link");

btnNavbar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
