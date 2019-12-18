const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')
const usersRouter = require('./routes/users')
const path = require('path')

app.use(express.static('public'))

app.use(express.urlencoded())
app.use('/trips', tripsRouter)
app.use('/users', usersRouter)

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

global.myTrips = []

// app.get('/', (req,res) => {
//   res.render('trips', {myTrips: myTrips} )
// })

// app.post('/addTrip', (req,res) => {
//   let trip = {
//     'city': req.body.myCity,
//     'departureDate': req.body.myDeparture,
//     'returnDate': req.body.myReturn,
//     'imgURL': req.body.myImg
//   }
//   myTrips.push(trip)
//   res.redirect('/')
// })

// app.post('/remove', (req,res) => {
//   let cityToRemove = req.body.removeCity
//   let myTrips = myTrips.filter((trip) => {
//     if(trip.city != cityToRemove) {
//       return trip
//     }
//   })
//     res.redirect('/')
// })

app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})