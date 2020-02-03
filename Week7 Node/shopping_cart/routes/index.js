const express = require('express')
const router = express.Router()

router.get('/login', (req,res) =>{
  res.render('login')
})

router.post('/login', (req,res)=>{
  let username = req.body.username
  let password = req.body.password
  
  let persistedUser = users.find((user) => {
    return user.username == username && user.password == password
  })
  if(persistedUser) {
    //start session
    if(req.session) {
      req.session.isAuthenticated = true
    }
    res.redirect('/dashboard')
  } else {
    res.redirect('/login')
  }
})

//only authorized users can access
router.get('/dashboard', (req,res)=> {
  if(req.session) {
    if(req.session.isAuthenticated) {
      res.send('DASHBOARD')
    } else {
      res.redirect('/login')
    }
  }
})

// middleware to authenticate
function authenticate(req,res,next) {
  if(req.session) {
    if(req.session.isAuthenticated) {
      next()
    } else {
      res.redirect('/login')
    }
  } else {
    res.redirect('/login')
  }
}



module.exports = router