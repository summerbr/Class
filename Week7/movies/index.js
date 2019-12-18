const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')
const path = require('path')

global.myMovies = []

app.use(express.static('public'))

app.use(express.urlencoded())
app.use('/movies', moviesRouter)

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')



app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})