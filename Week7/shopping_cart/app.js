const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const mustacheExpress = require('mustache-express')
const session = require("express-session") 

global.users = [{username: 'john', password: 'password'}]

app.use(express.urlencoded())
app.use('/index', authenticate, indexRouter)

app.use(session ({
  secret: 'Double 07 Bond',
  resave: false,
  saveUninitialized: true,
}))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')



app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})