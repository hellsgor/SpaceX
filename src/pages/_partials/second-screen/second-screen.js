import characteristics from 'JSON/characteristics.json';
import {isMediaQuery} from "Utils/isMediaQuery";
import {mediaQueryDesktop, mediaQueryTabletLarge, mediaQueryTabletLandscape, mediaQueryTabletPortrait} from "Utils/variables";

window.addEventListener('DOMContentLoaded', () => {

  const rocket = document.querySelector('.second-screen__rocket');

  let translateX;
  let translateY;
  let scaleDivider;

  if (isMediaQuery(mediaQueryDesktop)) {
    translateX = '-25%';
    translateY = '-100%';
    scaleDivider = 1000;
  }
  if(isMediaQuery(mediaQueryTabletLarge)) {
    translateX = '-10%';
    translateY = '-100%';
    scaleDivider = 1000;
  }
  if(isMediaQuery(mediaQueryTabletLandscape)) {
    translateX = '40%';
    translateY = '-100%';
    scaleDivider = 1000;
  }
  if(isMediaQuery(mediaQueryTabletPortrait)) {
    translateX = '70%';
    translateY = '-100%';
    scaleDivider = 1000;
  }

  characteristicsFilling();
  rocketPositioning(rocket);
  rocketEffect(rocket, translateX, translateY, scaleDivider);

})

function characteristicsFilling() {
  const rowTemplate = document.getElementById('characteristics-row').content;
  const characteristicsTable = document.querySelector('.characteristics__table');

  for (let i = 0; i < Object.keys(characteristics).length; i++) {
    const clone = rowTemplate.cloneNode(true);
    clone.querySelector('.characteristics__name').innerText = Object.keys(characteristics)[i];
    clone.querySelector('.characteristics__metr').innerText = Object.values(characteristics)[i][0];
    clone.querySelector('.characteristics__lat').innerText = Object.values(characteristics)[i][1];
    characteristicsTable.appendChild(clone);
  }
}

function rocketPositioning(rocket) {
  const rocketRight = (window.innerWidth - document.querySelector('.second-screen .container').offsetWidth) / 2;
  rocket.style.right = `${rocketRight}px`;
}

function rocketEffect(rocket, x, y, divider) {
  const startScale = 0.3;

  rocket.setAttribute('style', `transform: scale(${startScale})`);

  document.addEventListener('scroll', () => {
    let scale = (window.scrollY * startScale) / divider;
    rocket.setAttribute('style', `transform: scale(${scale}) translate(${x}, ${y})`);
  })
}
