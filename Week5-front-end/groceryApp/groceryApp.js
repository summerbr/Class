var database = firebase.database();
let root = database.ref()

let storeNameInput = document.getElementById('storeName')
let storeItemInput = document.getElementById('item')
let displayList = document.getElementById('storeList')
// let categoryInput = document.getElementById('category')

let shoppingListParent = root.child('shoppingList')

function removeItem(shoppingListId) {
  shoppingListParent.child(shoppingListId).remove()
  console.log(shoppingListId)
}

// how to loop through on return to display multiple store items seperate lines?
// zero index?

function displayUI(shoppingLists) {
  let listItems = shoppingLists.map((shoppingList) => {
    return `<li>
      <h3>${shoppingList.storeName}</h3>
      <label>${shoppingList.items}</label>
      <button class='removeBtn' onclick='removeItem("${shoppingList.shoppingListId}")'>Remove</button>
      </li>`
  })
  displayList.innerHTML = listItems.join(' ')
}

function setupObservers() {
  shoppingListParent.on('value',(snapshot) => {

    let shoppingLists = []
    let snapshotValue = snapshot.val()

    for(let key in snapshotValue) {
      let shoppingList = snapshotValue[key]
      shoppingList.shoppingListId = key
      shoppingLists.push(shoppingList)
    }
    displayUI(shoppingLists)
  })
}

let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
  let storeName = storeNameInput.value
  // let category = categoryInput.value
  let items = storeItemInput.value.split(',')

  shoppingListParent.push({
    storeName: storeName,
    // category: category,
    items: items
  })

})

setupObservers()