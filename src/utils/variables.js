// breakpoints
export const maxSmartphoneWidth = 576;
export const maxTabletPortraitWidth = 768;
export const maxTabletLandscapeWidth = 1024;
export const maxTabletLargeWidth = 1200;
export const minDesktopWidth = 1201;


// mediaQuery
export const mediaQuerySmartphone = window.matchMedia(`(max-width: ${maxSmartphoneWidth}px)`);
export const mediaQueryTabletPortrait = window.matchMedia(`(max-width: ${maxTabletPortraitWidth}px)`);
export const mediaQueryTabletLandscape = window.matchMedia(`(max-width: ${maxTabletLandscapeWidth}px)`);
export const mediaQueryTabletLarge = window.matchMedia(`max-width: ${maxTabletLargeWidth}px)`);
export const mediaQueryDesktop = window.matchMedia(`min-width: ${minDesktopWidth}px)`);

// Burger Menu
export const burgerBtn = document.querySelector('.burger-menu-icon');
export const burgerMenu = document.querySelector('.burger-menu');
export const burgerMenuTopContainer = burgerMenu.querySelector('.burger-menu__center-nav-container');
export const burgerMenuBottomContainer = burgerMenu.querySelector('.burger-menu__right-nav-container');
export const closeBurgerBtn = burgerMenu.querySelector('.burger-menu__close-btn');

