
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = ''; 
  }
});
function createTodoItem(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Delete';
  removeButton.classList.add('remove-btn');
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
  removeButton.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeButton);
  return li;
}
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});
