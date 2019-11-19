const express = require('express'),
  app = express(),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  Sequelize = require('sequelize'),
  bcrypt = require('bcrypt'),
  // Op = Sequelize.Op,
  models = require('./models'),
  SALT_ROUNDS = 10,
  PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'pug')

app.get('/',(req, res) => {
  res.render('index');
});

app.get('/register', (req, res) => {
  res.render('register');
})

app.post('/register', (req, res) => {
  let 
    first_name = req.body.first_name,
    last_name = req.body.last_name,
    email = req.body.email,
    password = req.body.password

  models.User.findOne({
    where: {
      email: email
    }
    //when you finish; proceed with the result(user is result)
  }).then((user) => {
      if (user) {
        res.status(500).json({message: 'email already exists'})
      } else {
        bcrypt.hash(password, SALT_ROUNDS, function(error, hash) {
          if (error == null) {
            let user = models.User.build({
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: hash
            })
            user.save()
          }
        })
      }
    })
    res.redirect("/register?registeredSuccessfully=true");
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});