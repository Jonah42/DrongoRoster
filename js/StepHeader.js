import { createSVGMaskURL } from './svg.js';

export function StepHeader(stepHeaderElement) {
  // Make the circle number object element
  let circleNumber = document.createElement('div');
  circleNumber.className = 'number-circle';
  circleNumber.id = `circleNumber${stepHeaderElement.getAttribute('data-number')}`;
  const url = createSVGMaskURL(stepHeaderElement.getAttribute('data-number'), '100%', '100%', '50%', '50%', 'middle', '30px')
  circleNumber.style.mask = `url(${url})`;
  circleNumber.style.webkitMask = `url(${url})`;
  circleNumber.style.maskRepeat = 'no-repeat';
  circleNumber.style.webkitMaskRepeat = 'no-repeat';
  // Create the text
  let stepText = document.createElement('h2');
  stepText.textContent = stepHeaderElement.getAttribute('data-text');
  // Append all to containing div
  stepHeaderElement.appendChild(circleNumber);
  stepHeaderElement.appendChild(stepText);
}