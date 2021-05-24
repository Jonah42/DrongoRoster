import { ItemHeader } from './ItemHeader.js';
import { InputBar } from './InputBar.js';
import { Item } from './Item.js';

export function ItemList(itemListElement) {
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

  function addItem(input) {
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.setAttribute('data-input', input);
    newItem.setAttribute('data-weights', weights);
    curr.appendChild(newItem);
    new Item(newItem, deleteItem);
    console.log('Hiiiiiii');
  }

  function deleteItem(elem) {
    curr.removeChild(elem);
    console.log('deleted');
  }
}