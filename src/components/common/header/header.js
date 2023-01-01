import './burger-menu/burger-menu.js';
import './burger-menu-button/burger-menu-button.js';
import { isMediaQuery } from 'Utils/isMediaQuery.js';
import {
  burgerBtn,
  burgerMenuBottomContainer,
  burgerMenuTopContainer,
  mediaQueryTabletPortrait
} from 'Utils/variables.js';


window.addEventListener('DOMContentLoaded', () => {
  const headerInner = document.querySelector('.header__inner');
  const rightNav = document.querySelector('.header__right-nav');
  const centerNav = document.querySelector('.header__center-nav');
  movingElements(rightNav, centerNav, headerInner);
})


function movingElements(rightNav, centerNav, headerInner) {
  if (isMediaQuery(mediaQueryTabletPortrait)) {
    console.log('mediaQueryTabletPortrait');
    headerInner.appendChild(burgerBtn);
    burgerMenuTopContainer.appendChild(centerNav);
    burgerMenuBottomContainer.appendChild(rightNav);
  }
}
