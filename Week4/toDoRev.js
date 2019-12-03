let addTaskBtn = document.getElementById('addTaskBtn');
let taskNameText = document.getElementById('taskNameText');
let taskList = document.getElementById('taskList');
let completed = document.getElementById('completed');

function removeTask(obj) {
  let li = obj.parentElement
  if (completed.contains(obj)) {
    completed.removeChild(li);
  } else {
    taskList.removeChild(li)
  }
}

function completedTask(obj) {
  let task = obj.parentElement
  if (obj.checked == true) {
    completed.appendChild(task);
  } else {
    taskList.appendChild(task);
  }
}

addTaskBtn.addEventListener('click', function() {
  let taskName = taskNameText.value
  
  let liItem = `
    <li>
      <input type='checkbox' onClick='completedTask(this)' />
      <label>${taskName}</label>
      <button onClick='removeTask(this)'>Remove</button>
    </li>`

  taskList.insertAdjacentHTML('beforeend', liItem)
})
