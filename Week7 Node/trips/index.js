const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')
const accountRouter = require('./routes/account')
const path = require('path')
var session = require('express-session')

global.users = [{username: 'summer', password: 'pass'}, 
{username: 'tom', password: 'password'}]

global.myTrips = []

app.use(express.static('public'))
app.use(express.urlencoded())

app.use(session({
  secret: '007 James Bond style',
  resave: false,
  saveUnitialized: true,
}))

// authenticate via middleware
function authenticate(req,res,next) {
  console.log(req.session)
  if(req.session) {
    if(req.session.isAuthenticated) {
      next()
    } else {
        res.redirect('/')
    }
  } else {
      res.redirect('/')
  }
}

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.use('/account', authenticate, accountRouter)
app.use('/trips', authenticate, tripsRouter)

app.get('/', (req,res) => {
  res.render('login')
})

app.post('/login', (req,res) => {
  let username = req.body.username
  let password = req.body.password
  
  let sessionUser = users.find((user) => {
    return user.username == username && user.password == password
  })
  console.log(sessionUser)
  if(sessionUser) {
    if(req.session) {
      req.session.isAuthenticated = true
    }
    res.redirect('/account/dashboard')
  } else {
    res.redirect('/')
  }
})

app.post('/register', (req,res) => {
  res.render('register')
})


app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})