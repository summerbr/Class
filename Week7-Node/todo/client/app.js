// class ToDos {
//   constructor(title, priority) {
//     this.title = title;
//     this.priority = priority;
//     this.dateCreated;
//     this.dateCompleted;
//     this.isCompleted = false;
//   }
// }

const url = 'http://localhost:3000/todos'

let todoItem = document.getElementById('todoItem')
let priority = document.getElementById('priority')
let list = document.getElementById('list')
let addButton = document.getElementById('addButton')

addButton.addEventListener(onclick, ()=> {
  let todoItem = todoItem.value
  let priority = priority.value

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todoItem: todoItem,
      priority: priority
    })
  })
})

function updateUI(todos) {
  let items = todos.map(item => {
    return `<li>
    ${item.title}
    ${item.priority}
    </li>`
  })
  list.innerHTML = items.join('')
}

// get all and display on the console 
fetch(url).then(response => response.json())
.then(json => updateUI(json))
