let addTaskBtn = document.getElementById('addTaskBtn');
let taskNameText = document.getElementById('taskNameText');
let taskList = document.getElementById('taskList');
let completed = document.getElementById('completed');

addTaskBtn.addEventListener('click', function() {
  let task = taskNameText.value;
  
  let liItem = document.createElement('li');
  liItem.innerHTML = task;
  taskList.appendChild(liItem);
});