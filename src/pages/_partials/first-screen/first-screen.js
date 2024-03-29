const inner = document.querySelector('.first-screen__parallax-inner');
const element = inner.querySelector('.first-screen__parallax-elem');
const body = document.querySelector('body');

import { isMediaQuery } from 'Utils/isMediaQuery.js';
import {mediaQueryDesktop} from 'Utils/variables.js';

if (isMediaQuery(mediaQueryDesktop)) {

  body.addEventListener("mousemove", (evt) => {
    const stepScale = 1000;
    const stepMove = 5;

    const clientX = evt.clientX - body.getBoundingClientRect().left - (0.5 * body.offsetWidth);

    const X = (clientX.toFixed(2)) / stepMove;
    const scale = ((X >= 0) ? Math.abs(1 - (X / stepScale)) : Math.abs(1 - (-X / stepScale)));

    element.setAttribute('style', `transform: scale(${scale}) translateX(${X}px);`);
  })

}

