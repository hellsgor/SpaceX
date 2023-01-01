import {burgerMenu, closeBurgerBtn} from "Utils/variables";

window.addEventListener("DOMContentLoaded", () => {
  closeBurgerBtn.addEventListener('click', () => {
    hideBurgerMenu();
  })
})

function hideBurgerMenu () {
  burgerMenu.classList.add('burger-menu_hidden');
}
