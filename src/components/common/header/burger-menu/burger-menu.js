import {burgerMenu, closeBurgerBtn} from "Utils/variables";

window.addEventListener("DOMContentLoaded", () => {
  closeBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu_hidden');
  })
})
