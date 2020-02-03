const express = require('express')
const app = express()

const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

const models = require('./models')

// create a new post
app.post('/posts',(req,res) => {
  const title = req.body.title
  const body = req.body.body
  const category = req.body.category
    
  const post = models.Post.build({
    title: title, 
    body: body,
    category: category
  })
  post.save().then(()=> { 
    res.redirect('/')
  })
})

// remove post
app.post('/remove-post', (req,res)=> {
  const byePost = parseInt(req.body.id)
  models.Post.destroy(
    {
      where:{
        id: byePost
      }
    }
  ).then(deletedPost => console.log(deletedPost))
  res.redirect('/')
})

// update post
app.post('/update-post', (req,res)=> {
  const id = parseInt(req.body.id)
  const title = req.body.title
  const body = req.body.body
  const category = req.body.category

  models.Post.update({
    title: title,
    body: body,
    category: category
  },
    {
      where: {id: id} 
    }
  ).then(()=> {res.redirect('/')
  })
})

app.get('/', (req,res)=> {
  models.Post.findAll().then((posts) => {
    res.render('index', {posts: posts})
  })
})



app.listen(3000,() => {
  console.log('SERVER is running...')
})