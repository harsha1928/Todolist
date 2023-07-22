// Get references to the elements
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(taskItem);
  newTaskInput.value = '';
}

// Delete task function
function deleteTask(btn) {
  const taskItem = btn.parentElement;
  taskList.removeChild(taskItem);
}
