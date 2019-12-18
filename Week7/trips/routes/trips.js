const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.render('trips', {myTrips: myTrips} )
})

router.post('/trips/addTrip', (req,res) => {
  let trip = {
    'city': req.body.myCity,
    'departureDate': req.body.myDeparture,
    'returnDate': req.body.myReturn,
    'imgURL': req.body.myImg
  }
  myTrips.push(trip)
  res.redirect('/trips')
})

router.post('/trips/remove', (req,res) => {
  let cityToRemove = req.body.removeCity
  let myTrips = myTrips.filter((trip) => {
    if(trip.city != cityToRemove) {
      return trip
    }
  })
    res.redirect('/trips')
})

module.exports = router