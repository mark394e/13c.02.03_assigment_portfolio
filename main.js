import "./style.css";

const menuBtn = document.querySelector(".menu-btn");
const navbarLinks = document.querySelector(".navbar-links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navbarLinks.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navbarLinks.classList.remove("active");
    menuOpen = false;
  }
});
