const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".toggle-icons");
const nav__links = document.querySelector('.nav__links');

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  nav__links.classList.toggle("collapse");
});