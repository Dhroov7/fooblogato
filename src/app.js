/**
 * Created by dhroovgupta7 on 06/09/18
 */


const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-hbs')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')


const apiRouter = require('./routes/api')
// const pageRouter = require('./routes/pages')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser())
app.use(session({
    secret: 'some random secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))
app.use(passport.initialize());
app.use(passport.session());


app.engine('hbs', exphbs.express4({
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    defaultLayout: 'views/layouts/main.hbs',
}))


app.set('views', path.join(__dirname + '../views'))
app.set('view engine', 'hbs')
app.set('view cache', true)
app.use('/', express.static(path.join(__dirname, '../public')))

app.use('/api', apiRouter)
// app.use('/', pageRouter)

app.listen(9898, () => { //change this when deploy this in prod.
    console.log('server started at http://localhost:9898')
})