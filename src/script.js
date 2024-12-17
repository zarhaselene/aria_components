// Menu Toggle Logic
const menuBtn = document.getElementById("menuButton");
const menuCloseBtn = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");

function toggleMenu() {
  menuContent.classList.toggle("hidden");
  menuCloseBtn.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
