/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()
const {findUser, findUserByEmail, createUser} = require('../../controllers/user')
const passUtils = require('../../utils/password')
const models = require('../../db/models').models

route.get('/',(req,res) => {
    res.render('signup')
})

route.post('/', async (req, res) => {

    var user = {}

    if (req.body.name.trim() === '') {
        req.flash('error', 'Name could not be empty')
        res.redirect('/signup')
    } else {
        user.name = req.body.name
    }

    if (req.body.username.trim() === '') {
        req.flash('error', 'Username could not be empty')
        res.redirect('/signup')
    } else {
        user.username = req.body.username
    }

    if (req.body.email.trim() === '') {
        req.flash('error', 'Email could not be empty')
        res.redirect('/signup')
    } else {
        user.email = req.body.email
    }

    if (req.body.password.trim() === '') {
        req.flash('error', 'Password could not be empty')
        res.redirect('/signup')
    }

    if (req.body.city.trim() === '') {
        req.flash('error', 'City could not be empty')
        res.redirect('/signup')
    } else {
        user.city = req.body.city
    }

    if (req.body.state.trim() === '') {
        req.flash('error', 'State could not be empty')
        res.redirect('/signup')
    } else {
        user.state = req.body.state
    }

    if (req.body.zipcode.trim() === '') {
        req.flash('error', 'Zip Code could not be empty')
        res.redirect('/signup')
    } else {
        user.zipcode = req.body.zipcode
    }

    try {

        const userByUsername = await findUser(req.body.username)

        if (userByUsername) {
            req.flash('error', 'Username already exists, Try another.')
            res.redirect('/signup')
        }

        const userByEmail = await findUserByEmail(req.body.email)

        if (userByEmail) {
            req.flash('error', 'Email already exists.')
            res.redirect('/signup')
        }

        let password = await passUtils.passToHash(req.body.password)

        await createUser(user, password, models.user)

        res.redirect('/login')

    } catch (err) {

        req.flash('error', 'Unsuccessful registration. Please try again.')
        console.log(err)
        return res.redirect('/signup')

    }
})

module.exports = route