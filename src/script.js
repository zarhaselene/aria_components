const menuBtn = document.getElementById("menuButton");
const menuCloseBtn = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");

menuBtn.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuCloseBtn.classList.toggle("hidden");
});

menuCloseBtn.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuCloseBtn.classList.toggle("hidden");
});
