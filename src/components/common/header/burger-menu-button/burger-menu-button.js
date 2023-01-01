import {burgerMenu, burgerBtn} from 'Utils/variables';

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_hidden');
})
