const menuToggle = document.querySelector(".menu-toggle");
const link = document.querySelector(".link");

menuToggle.addEventListener("click", () => {
  link.classList.toggle("active");
});
