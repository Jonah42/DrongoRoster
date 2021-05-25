import { createSVGMaskURL } from './svg.js';

export function DrongoButton(buttonElement, onClick) {
  // extract props
  const text = buttonElement.getAttribute('data-text');
  // make mask
  const url = createSVGMaskURL(text, `${buttonElement.offsetWidth}`, `100%`, '50%', '50%', 'middle', '24px');
  buttonElement.style.mask = `url(${url})`;
  buttonElement.style.webkitMask = `url(${url})`;
  buttonElement.style.maskRepeat = 'no-repeat';
  buttonElement.style.webkitMaskRepeat = 'no-repeat';
  buttonElement.style.maskPosition = '0px 0px';
  buttonElement.style.webkitMaskPosition = '0px 0px';
  // event listeners
  buttonElement.addEventListener('click', onClick);
}