const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.set('view cache',true)
app.set('views',path.join(__dirname + '../views'))

module.exports = app