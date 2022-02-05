const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

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
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keydown', (event) => {
  // keypress - Deprecated => beforeinput(explorer-X), keydown(vs keyup)
  // keydown을 사용하면 한글 입력 시 두 번 입력이 발생함 -> keyup으로 해결하거나 .isComposing으로 해결
  if (event.isComposing) {
    // 글자가 만들어지는 중간에 벌어지는 이벤트는 무시함
    return;
  }
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  const id = event.target.dataset.btnId;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
