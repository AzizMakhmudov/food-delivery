let menuHamburger = document.querySelector("[data-hamburger]");
let menu = document.querySelector(".menu");
menuHamburger.addEventListener("click", (evt) => {
  menuHamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
