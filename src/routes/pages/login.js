/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()
const passport = require('../../passport/passportHandler')

route.get('/',(req,res) => {
    res.render('login')
})

route.post('/', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/user/me',
    failureFlash: true
}))

module.exports = route