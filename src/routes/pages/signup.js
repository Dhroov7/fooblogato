/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()

route.get('/signup',(req,res) => {
    res.render('signup')
})

module.exports = route