const mobileMenuButton = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");

mobileMenuButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  mobileMenuButton.classList.toggle("is-active");
});
