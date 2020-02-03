const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080 

app.use(cors())
//body is undefined without json parser
app.use(express.json())

const db = require('./models')

app.post('/add-book', (req,res) => {
  const title = req.body.title
  const author = req.body.author
  const genre = req.body.genre
  // const year = req.body.year
  const imageURL = req.body.imageURL
  const publisher = req.body.publisher

  const book = db.Book.build({
    title: title,
    author: author,
    genre: genre,
    // year: year,
    imageURL: imageURL,
    publisher: publisher
  })
  book.save().then(savedBook => console.log(savedBook))
  res.redirect('/books')
})

app.get('/books',async(req,res) => {
  let allBooks = await db.Book.findAll()
  res.json(allBooks)
})



app.listen(PORT, () => {
  console.log('Server is running...')
})