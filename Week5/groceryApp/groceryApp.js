var database = firebase.database();
let root = database.ref()

let storeNameInput = document.getElementById('storeName')
let storeItemInput = document.getElementById('item')
let displayList = document.getElementById('storeList')
// let categoryInput = document.getElementById('category')

let shoppingList = root.child('shoppingList')

let stores = []

function removeItem(listId) {
  // console.log(event.target.previousElementSibling.previousElementSibling)
  shoppingList.child(storeId).remove()
}

// how to loop through on return to display multiple store items seperate lines?
// zero index?

function display(stores) {
  let storeItems = stores.map((store) => {
    return `<li>
      <h3>${store.storeName}</h3>
      <label>${store.items}</label>
      <button class='removeBtn' onclick='removeItem()'>Remove</button>
      </li>`
  })
  displayList.innerHTML = storeItems.join(' ')
}

function setupObservers() {
  shoppingList.on('child_added',(snapshot) => {
    let store = snapshot.val()
    console.log(store)
    //need to grab key from element and assign to storeId for loop?
    stores.push(store)

    display(stores)
  })
}

let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
  let storeName = storeNameInput.value
  // let category = categoryInput.value
  let items = storeItemInput.value.split(',')

  shoppingList.push({
    storeName: storeName,
    // category: category,
    items: [items]
  })

})

setupObservers()