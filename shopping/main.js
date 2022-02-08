const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd(event) {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}
let id = 0; // Bad. UUID를 이용하거나 오브젝트에 있는 해시코드를 이용.
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item" >
          <span class="item__name">${text}</span>
          <button class="item__delete" >
            <i class="fas fa-trash-alt" data-btn-id=${id}></i>
          </button>
        </div>
        <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.btnId;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
