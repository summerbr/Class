const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Sequelize = require('sequelize'),
  Op = Sequelize.Op,
  models = require('./models'),
  SALT_ROUNDS = 10,
  PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
