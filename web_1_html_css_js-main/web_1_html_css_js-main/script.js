// script.js
function addTask() {
  const input = document.getElementById('tf-input').value;
  const task = document.createElement('li');
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add('list-item');

  const taskText = document.createElement('span');
  taskText.textContent = input;
  taskText.classList.add('task-text');
  task.appendChild(taskText);

  const updateButton = document.createElement('button');
  updateButton.textContent = 'Update';
  updateButton.classList.add('update-button');
  updateButton.addEventListener('click', () => {
    updateTask(task.id);
  });
  task.appendChild(updateButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });
  task.appendChild(deleteButton);

  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function updateTask(id) {
  const task = document.getElementById(id);
  const taskText = task.querySelector('.task-text');
  const newText = prompt('Update your task:', taskText.textContent);
  if (newText !== null && newText.trim() !== '') {
    taskText.textContent = newText;
  }
} 