import characteristics from 'JSON/characteristics.json';
import {isMediaQuery} from "Utils/isMediaQuery";
import {mediaQueryDesktop} from "Utils/variables";

window.addEventListener('DOMContentLoaded', () => {

  const rocket = document.querySelector('.second-screen__rocket');

  characteristicsFilling();
  rocketPositioning(rocket);

  if (isMediaQuery(mediaQueryDesktop)) {
    rocketEffect(rocket);
  }


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

function rocketEffect(rocket) {
  const startScale = 0.3;

  rocket.setAttribute('style', `transform: scale(${startScale})`);

  document.addEventListener('scroll', () => {
    let scale = (window.scrollY * startScale) / 400;
    rocket.setAttribute('style', `transform: scale(${scale}) translate(-20%, -50%)`);
  })
}
