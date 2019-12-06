
let showOrders = document.getElementById('showOrders')
let emailFilter = document.getElementById('emailFilter')
let submitBtn = document.getElementById('submit')
let searchBtn = document.getElementById('search')
let allOrderBtn = document.getElementById('all')

let emailForm = document.getElementById('email')
let coffeeForm = document.getElementById('coffeeText')

// let getUrl = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress'
let url = 'https://cors-anywhere.herokuapp.com/https://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let request = new XMLHttpRequest()

function remove(email) {
  let url = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`
  request.open('DELETE', url)
  request.send()
}

function getOrder() {
  request.open('GET', url)
  request.send()
  request.onload = function() {
  let orders = JSON.parse(this.responseText)
  let allOrders = Object.values(orders)
  
  let coffeeItems = allOrders.map((order) => {
    return `<li>
    <b>Email:</b> ${order.emailAddress}
    <b>Order:</b> ${order.coffee}
    <button class="removeBtn">Remove</button>
    <hr>
    </li>`
  })
  showOrders.innerHTML = coffeeItems.join(' ')
  }
}

submitBtn.addEventListener('click', () => {
  request.open('POST', url)
  request.setRequestHeader('Content-Type', 'application/json')
  let email = emailForm.value
  let coffee = coffeeForm.value
  
  let order = `{"emailAddress": "${email}", "coffee": "${coffee}"}`

  request.send(order)
  request.onload = () => {
    getOrder()
  }
})

// get order by email/GET with search --button to filter
searchBtn.addEventListener('click', () => {
  let email = emailForm.value
  let searchUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`

  request.open('GET', searchUrl)
  request.onload(function () {

  })
  request.send()
  //callback getOrder()? which url will it use?
  searchOrder(email)
})

//better to create separate function instead of inside button click
function searchOrder(email) {
  
}

//delete order by email 
