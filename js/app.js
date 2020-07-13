"use strict";

window.addEventListener("scroll", navToggel);
const navigationBar = document.querySelector(".main-header");
function navToggel() {
  if (window.scrollY > 170) {
    navigationBar.classList.add("stickyNavbar");
  } else {
    navigationBar.classList.remove("stickyNavbar");
  }
}
