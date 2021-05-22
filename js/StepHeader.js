export function StepHeader(stepHeaderElement, stepNumber, stepHeaderText) {
  // Make the circle number object element
  let circleNumber = document.createElement('object');
  circleNumber.className = 'number-circle';
  circleNumber.id = 'circleNumber1';
  circleNumber.data = 'img/circle.svg';
  // Create the text
  let stepText = document.createElement('h2');
  stepText.textContent = stepHeaderText;
  // Append all to containing div
  stepHeaderElement.appendChild(circleNumber);
  stepHeaderElement.appendChild(stepText);
  // Change the number in the svg to be as desired
  setTimeout(initSVGValue, 50, circleNumber, stepNumber);
}

function initSVGValue(circleNumber, stepNumber) {
  let textElem = circleNumber.contentDocument.getElementById("number");
  if (textElem === null) setTimeout(initSVGValue, 50, circleNumber, stepNumber);
  else textElem.textContent = stepNumber;
}