const openMenuElement = document.querySelector(".open-menu");
const closeMenuElement = document.querySelector(".close-menu");
const menuElement = document.querySelector(".menu");
openMenuElement.addEventListener("click", (event) => {
  event.preventDefault();

  openMenuElement.classList.add("hide");
  menuElement.classList.remove("hide");
});

closeMenuElement.addEventListener("click", (event) => {
  event.preventDefault();

  openMenuElement.classList.remove("hide");
  menuElement.classList.add("hide");
});
