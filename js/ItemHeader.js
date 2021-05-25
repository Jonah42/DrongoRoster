import { createSVGMaskURL } from './svg.js';

export function ItemHeader(itemHeaderElement) {
  // Make the circle number object element
  const names = itemHeaderElement.getAttribute('data-headings').split(',');
  const weights = itemHeaderElement.getAttribute('data-weights').split(',');
  let urlString = '';
  let posString = '';
  let repeatString = '';
  const padding = parseInt(window.getComputedStyle(itemHeaderElement).getPropertyValue('padding').slice(0,-2));
  const width = itemHeaderElement.clientWidth-2*padding;
  // console.log(width);
  // console.log(window.getComputedStyle(itemHeaderElement).getPropertyValue('padding'));
  let posSum = 0;
  let svgWidth = 0;
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} ${weights[i]} ${posSum}`);
    svgWidth = weights[i]*width/100+(i===0?padding:0);
    const url = createSVGMaskURL(names[i], `${svgWidth}`, `100%`, i===0?`${padding}`:'0', '20', 'start', '24px');
    urlString += `url(${url}), `;
    posString += `${posSum}px 0px, `;
    repeatString += 'no-repeat, ';
    posSum += svgWidth;
  }
  if (posSum !== width + 2*padding) {
    svgWidth = width + 2*padding - posSum;
    const url = createSVGMaskURL('', `${svgWidth}`, `100%`, '0', '20', 'start', '24px')
    urlString += `url(${url}), `;
    posString += `${posSum}px 0px, `;
    repeatString += 'no-repeat, ';
    posSum += svgWidth;
  }
  itemHeaderElement.style.mask = urlString.slice(0,-2);
  itemHeaderElement.style.webkitMask = urlString.slice(0,-2);
  itemHeaderElement.style.maskRepeat = repeatString.slice(0,-2);
  itemHeaderElement.style.webkitMaskRepeat = repeatString.slice(0,-2);
  itemHeaderElement.style.maskPosition = posString.slice(0,-2);
  itemHeaderElement.style.webkitMaskPosition = posString.slice(0,-2);
  // itemHeaderElement.style.maskSize = 'contain';
  // itemHeaderElement.style.webkitMaskSize = 'contain';

}