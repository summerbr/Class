const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())


app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

//connect to postgresSQL db
var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/blog';
var db = pgp(connectionString);

app.get('/', async (req,res)=> {
  const results = await db.any('SELECT post_id, title, body FROM posts;')
  res.render('index', {posts: results})
})

app.post('/posts',(req,res) => {
  const title = req.body.title
  const body = req.body.body

  db.none('INSERT INTO posts(title,body) VALUES($1,$2)', [title,body]).then(()=> {
    res.redirect('/')
  })
})

app.post('/remove-post', (req,res)=> {
  let byePost = req.body.id
  console.log(byePost)
  db.one('DELETE FROM posts WHERE post_id = $1 RETURNING *', byePost).then(()=> {
    res.redirect('/')
  })
})


app.listen(3000, ()=> {
  console.log('server is running...')
})