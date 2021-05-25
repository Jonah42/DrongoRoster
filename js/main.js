import { StepHeader } from './StepHeader.js';
import { ItemList } from './ItemList.js';
import { DrongoButton } from './DrongoButton.js';

document.addEventListener('DOMContentLoaded', function() {
  // Make some state here!! And then feed set functions into the components below
  ``
  // Step Headers
  const stepHeaders = document.querySelectorAll('[role=StepHeader]');
  stepHeaders.forEach(stepHeader => {
    new StepHeader(stepHeader);
  });
  // ItemList
  const itemLists = document.querySelectorAll('[role=ItemList]');
  itemLists.forEach((itemList) => {
    new ItemList(itemList);
  });
  // Button
  const buttons = document.querySelectorAll('[role=DrongoButton]');
  buttons.forEach(button => {
    new DrongoButton(button, generateRoster);
  });
});

function generateRoster() {
  console.log('Now you have to do the algo :-P');
}