const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.render('users.mustache')
})

router.post('/add-user', (req,res) => {
  res.render('users.mustache')
})

module.exports = router