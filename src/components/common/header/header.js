import './burger-menu/burger-menu.js';
import './burger-menu-button/burger-menu-button.js';
import { isMediaQuery } from 'Utils/isMediaQuery.js';
import {
  burgerMenuBottomContainer,
  burgerMenuTopContainer,
} from 'Utils/variables.js';

import {
  mediaQueryTabletPortrait,
} from 'Utils/variables.js';

const headerInner = document.querySelector('.header__inner');
const rightNav = document.querySelector('.header__right-nav');
const centerNav = document.querySelector('.header__center-nav');

window.addEventListener('resize', () => {
  console.log('resize');
  if (isMediaQuery(mediaQueryTabletPortrait)) {
    console.log(isMediaQuery(mediaQueryTabletPortrait));
    movingElementsInBurger();
  } else {
    console.log(isMediaQuery(mediaQueryTabletPortrait));
    movingElementsFromBurger();
  }
})

window.addEventListener('DOMContentLoaded', () => {
  if (isMediaQuery(mediaQueryTabletPortrait)) {
    movingElementsInBurger();
  }
})


function movingElementsInBurger() {
  burgerMenuTopContainer.appendChild(centerNav);
  burgerMenuBottomContainer.appendChild(rightNav);
}

function movingElementsFromBurger() {
  headerInner.appendChild(centerNav);
  headerInner.appendChild(rightNav);
}
