export function Item(itemElement, deleteItem) {
  // extract props
  const input = itemElement.getAttribute('data-input').split(',');
  const weights = itemElement.getAttribute('data-weights').split(',');
  // Make the paragraph elements
  for (let i = 0; i < input.length; i++) {
    const elem = document.createElement('p');
    elem.textContent = input[i];
    elem.style.width = `${weights[i]}%`;
    itemElement.appendChild(elem);
  }
  // Create delete button
  let del = document.createElement('img');
  del.className = 'shift-icon delete';
  del.src = 'img/delete.svg';
  itemElement.appendChild(del);
  // Event listeners
  del.addEventListener('click', () => {
    deleteItem(itemElement);
  })
}