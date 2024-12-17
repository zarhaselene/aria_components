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

// Modal Logic
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");

let lastFocusedElement;

function openModal() {
  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
  document.addEventListener("keydown", handleModalKeyDown);
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  lastFocusedElement.focus(); // Return focus
  document.removeEventListener("keydown", handleModalKeyDown);
}

function handleModalKeyDown(event) {
  if (event.key === "Escape") closeModal();
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Dialog Logic
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialog = document.getElementById("accessibleDialog");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});
