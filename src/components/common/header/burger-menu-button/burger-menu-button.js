import {burgerBtn, burgerMenu } from 'Utils/variables';

window.addEventListener("DOMContentLoaded", () => {
  burgerBtn.addEventListener('click', () => {
    showBurgerMenu();
  })
})

function showBurgerMenu() {
  burgerMenu.classList.remove('burger-menu_hidden');
}
