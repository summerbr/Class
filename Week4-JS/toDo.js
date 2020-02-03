let addTaskBtn = document.getElementById('addTaskBtn');
let taskNameText = document.getElementById('taskNameText');
let taskList = document.getElementById('taskList');
let completed = document.getElementById('completed');

addTaskBtn.addEventListener('click', function() {
  let task = taskNameText.value;
  let taskNameLabel = document.createElement('label');
  taskNameLabel.innerHTML = task
  // Add check box
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  // Add remove button
  let removeBtn = document.createElement('button')
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => {
     // console.log(this)
    taskList.removeChild(li)
  })
  // Create li
  let li = document.createElement('li');

  li.appendChild(checkBox);
  li.appendChild(taskNameLabel)
  li.appendChild(removeBtn);

  taskList.appendChild(li);
});

checkBox.addEventListener('change', function() {
  if (this.checked) {

  } else {
    
  }
})