let addTaskButton = document.getElementById('addTaskButton');
let taskNameText = document.getElementById('taskNameText');
let taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
  // console.log('button is clicked');
  document.body.style.background = 'yellow';
  addTaskButton.style.background = 'cyan';
  // console.log(taskNameText.value);
  let task = taskNameText.value;

  let liItem = document.createElement('li');
  liItem.innerHTML = task;
  taskList.appendChild(liItem);

  let btnRemove = document.createElement('button');
  liItem.appendChild('btnRemove');
  btnRemove.innerHTML = 'Remove';
})
