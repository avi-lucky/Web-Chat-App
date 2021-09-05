const express = require('express')
const db = require('./src/db/mongoose')
const userRouter = require('./src/routers/user')
const path = require('path')
const http = require('http')

const app = express();

const publicDirectoryPath = path.join(__dirname, '/public/')

app.get('/', function (req, res, next) {
  // console.log(publicDirectoryPath)
  res.render(`${publicDirectoryPath}signin.ejs`)
  // console.log('Successfully User Created!')
})

app.get('/forgot', function (req, res, next) {
  res.render(`${publicDirectoryPath}forgot.ejs`)
})

app.get('/signup', function (req, res, next) {
  res.render(`${publicDirectoryPath}signup.ejs`)
})

app.get('/index', function (req, res, next) {
  res.render(`${publicDirectoryPath}index.ejs`)
})

app.get('/addUser', function (req, res, next) {
    res.render(`${publicDirectoryPath}addUser.ejs`)
  })

app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)

app.listen(3000, () => console.log("Server Up and Running!"));

module.exports = app