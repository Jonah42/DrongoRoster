import { ItemHeader } from './ItemHeader.js';
import { InputBar } from './InputBar.js';
import { Item } from './Item.js';

export function ItemList(itemListElement, state) {
  // extract props
  const headings = itemListElement.getAttribute('data-headings');
  const placeholders = itemListElement.getAttribute('data-placeholders');
  const weights = itemListElement.getAttribute('data-weights');
  // Make the current items list
  let curr = document.createElement('div');
  curr.className = 'current-items';
  curr.setAttribute('role', 'ItemHeader');
  curr.setAttribute('data-headings', headings);
  curr.setAttribute('data-weights', weights);
  let spacer = document.createElement('div');
  spacer.className = 'item-header';
  curr.appendChild(spacer);
  itemListElement.appendChild(curr);
  new ItemHeader(curr);
  // Make input bar
  let bar = document.createElement('div');
  bar.className = 'input-bar';
  bar.setAttribute('role', 'InputBar');
  bar.setAttribute('data-placeholders', placeholders);
  bar.setAttribute('data-weights', weights);
  itemListElement.appendChild(bar);
  new InputBar(bar, addItem);

  if (state !== []) state.forEach(data => addItem(data, false));

  function addItem(input, updateState=true) {
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.setAttribute('data-input', input);
    newItem.setAttribute('data-weights', weights);
    curr.appendChild(newItem);
    new Item(newItem, deleteItem);
    if (updateState) state.push(input);
  }

  function deleteItem(elem) {
    for (let i = 0; i < curr.children.length; i++) {
      if (curr.children[i] === elem) state.splice(i, 1);
    }
    curr.removeChild(elem);
    console.log('deleted');
  }
}