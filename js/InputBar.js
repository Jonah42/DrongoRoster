export function InputBar(inputBarElement, addItem) {
  // extract props
  const placeholders = inputBarElement.getAttribute('data-placeholders').split(',');
  const weights = inputBarElement.getAttribute('data-weights').split(',');
  // Make the paragraph elements
  for (let i = 0; i < placeholders.length; i++) {
    const elem = document.createElement('input');
    elem.placeholder = placeholders[i];
    elem.style.width = `${weights[i]}%`;
    inputBarElement.appendChild(elem);
  }
  // Create add button
  const width = inputBarElement.offsetWidth;
  const height = inputBarElement.offsetHeight;
  const padding = parseInt(window.getComputedStyle(inputBarElement).getPropertyValue('padding').slice(0,-2));
  let add = document.createElement('div');
  add.className = 'shift-icon';
  add.style.height = `${height-2*padding}px`;
  const margin = ((width-2*padding)*0.05-(height-2*padding))/2
  // add.style.marginLeft = `${margin>0?margin:0}px`;
  // add.style.marginRight = `${margin>0?margin:0}px`;
  inputBarElement.appendChild(add);
  // Create add icon
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" preserveAspectRatio="xMidYMid meet" version="1.0" width="100%" zoomAndPan="magnify">
    <defs>
      <mask id="myMask">
        <rect width="100%" height="100%" fill="white" stroke-width="0"></rect>
        <g transform='scale(0.6) translate(${(padding+(width-2*padding)*0.9625)/0.6},${height/2})'>
          <path id="color" d="M31 15H21V5c0-1.657-1.343-3-3-3s-3 1.343-3 3v10H5c-1.657 0-3 1.343-3 3s1.343 3 3 3h10v10c0 1.657 1.343 3 3 3s3-1.343 3-3V21h10c1.657 0 3-1.343 3-3s-1.343-3-3-3z" fill="black"/>
        </g>
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="blue" stroke-width="0" mask="url(#myMask)"/>
  </svg>`;
  const blob = new Blob([svg], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  inputBarElement.style.mask = `url(${url})`;
  inputBarElement.style.webkitMask = `url(${url})`;
  inputBarElement.style.maskRepeat = 'no-repeat';
  inputBarElement.style.webkitMaskRepeat = 'no-repeat';
  inputBarElement.style.maskPosition = `${0}px ${0}px`;
  inputBarElement.style.webkitMaskPosition = '0px 0px';
  // Event listeners
  add.addEventListener('click', () => {
    let input = '';
    for (let i = 0; i < inputBarElement.children.length-1; i++) {
      input += inputBarElement.children[i].value+','
    }
    addItem(input.slice(0,-1));
  })
}