const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

// tell express to read values
app.use(express.urlencoded())

// tell express to use mustache templating engine
app.engine('mustache', mustacheExpress())
//the pages will be located in views directory
app.set('views', './views')
//extension will be .mustache
app.set('view engine', 'mustache')

let myTrips = []

app.get('/', (req,res) => {
  res.render('index', {name: 'Alex'})
})

app.post('/addTrip', (req,res) => {
  let trip = {
    'city': req.body.myCity,
    'departureDate': req.body.myDeparture,
    'returnDate': req.body.myReturn,
    'imgURL': req.body.myImg
  }
  myTrips.push(trip)
  // console.log('trips posted...')
  // console.log(myTrips)
  res.redirect('/trips')
})

app.post('/remove', (req,res) => {
  let cityToRemove = req.body.removeCity
  let filteredCities = myTrips.filter((trip) => {
    if(trip.city != cityToRemove) {
      return trip
    }
  })
    myTrips = filteredCities
    res.redirect('/trips')
})

app.get('/trips', (req,res) => {
  // let trips = [{city: 'Denver', cost: 400}, {city: 'Houston', cost: 175}]
  // res.render('trips', {myTrips: trips})
  res.render('trips', {myTrips: myTrips} )
})

app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})