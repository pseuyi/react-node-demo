'use strict';

const express = require('express')
const app = express()
const path = require('path')

const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// logging middleware
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

// body parsing
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

// send all requests to index.html
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public'))
})

// production server, localhost:3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('production express server is running at localhost:' + PORT)
})

// error handling
app.use((err, req, res, next)=>{
  err? console.error(err.stack) : next()
})

module.exports = app
