
let stockNameHeading = document.getElementById("stockNameHeading")
let stockPriceHeading = document.getElementById("stockPriceHeading")


window.setInterval(function() {

  let stock = getStockQuote('APLE')

  // display the stock name on the heading h3
  stockNameHeading.innerHTML = stock.name
  stockPriceHeading.innerHTML = `$${stock.price}`

},2000)
