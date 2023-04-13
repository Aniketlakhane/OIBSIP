const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = todoText;
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', () => li.remove());
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    input.value = '';
  }
});
