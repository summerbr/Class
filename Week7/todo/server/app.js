const express = require('express') //ES6: import express from 'express'; 
const cors = require('cors')
const app = express()

let todos = []

// middleware = gatekeeper
app.use(cors())

app.use(express.json())

app.post('/todos',(req,res) => {
  todos.push(req.body)
})

// GET; define Routes
app.get('/todos',(req, res) => {
  todos.push({title: "wash the car"})
  res.json(todos)
})

// start server
app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})