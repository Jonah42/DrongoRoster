import { StepHeader } from './StepHeader.js';
import { ItemList } from './ItemList.js';
import { ItemHeader } from './ItemHeader.js';
import { Item } from './Item.js';
import { InputBar } from './InputBar.js';
import { createSVGMaskURL } from './svg.js';

document.addEventListener('DOMContentLoaded', function() {
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
});