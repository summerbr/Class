const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid/v4')

router.get('/',(req,res) => {
  res.render('movies',{myMovies: myMovies})
})

router.post('/create', (req,res) => {
  console.log(req.body)
  let movies = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    posterURL: req.body.posterURL
  }
  myMovies.push(movies)
  res.redirect('/movies')
})

router.post('/delete', (req,res) => {
  let deleteMovie = req.body.deleteMovie 
  myMovies = myMovies.filter(movie => movie.title != deleteMovie)
  res.redirect('/movies')
})

// router.get('/movies/api', (req,res) => {
// })

// router.get('movies/:movieid', (req,res) => {
// })

router.get('movies/:genre', (req,res) => {
  console.log(req.params)
  res.send(req.params.genre)
})

router.get('/search', (req,res) => {
  const searchTerm = req.query.k 
  res.send(searchTerm)
})

module.exports = router