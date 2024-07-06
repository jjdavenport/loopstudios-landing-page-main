const navBtn = document.getElementById("navBtn");
const navDialogCloseBtn = document.getElementById("navDialogCloseBtn");

navBtn.addEventListener("click", () => {
  const navDialog = document.getElementById("navDialog");
  navDialog.classList.toggle("nav__dialog--active");
  document.body.style.overflow = "hidden";
});

navDialogCloseBtn.addEventListener("click", () => {
  const navDialog = document.getElementById("navDialog");
  navDialog.classList.remove("nav__dialog--active");
  document.body.style.overflow = "auto";
});
