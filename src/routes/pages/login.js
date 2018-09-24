/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()

route.get('/login',(req,res) => {
    res.render('login')
})

module.exports = route