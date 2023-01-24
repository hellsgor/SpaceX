import characteristics from 'JSON/characteristics.json';

window.addEventListener('DOMContentLoaded', () => {

  characteristicsFilling();
  rocketPositioning();

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

function rocketPositioning() {
  const rocketRight = (window.innerWidth - document.querySelector('.second-screen .container').offsetWidth) / 2;
  document.querySelector('.second-screen__rocket').style.right = `${rocketRight}px`;
}
