var database = firebase.database();
let root = database.ref()

let storeNameInput = document.getElementById('storeName')
let storeItemInput = document.getElementById('item')
let storeList = document.getElementById('storeList')
// let usersRef = root.child('users')
// usersRef.push({
//   name: 'name', 
// })

let shoppingList = root.child('shoppingList')
let storeRef = shoppingList.child('store')
let stores = []

function displayStores(stores) {
  let storeItems = stores.map((store) => {
    return `<li><h3>${store.name}</h3>
    <input type="checkbox">${store.item}
    </li>`
  })
  storeList.innerHTML = storeItems.join(' ')
}

function setupObservers() {
  storeRef.on('child_added',(snapshot) => {
    let snapshotValue = snapshot.val()

    let store = snapshotValue
    stores.push(store)

    displayStores(stores)
  })
}

let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
  let name = storeNameInput.value
  let item = storeItemInput.value

  storeRef.push({
    name: name,
    item: item
  })
})

setupObservers()