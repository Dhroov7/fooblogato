/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const {findUser, findUserByEmail, createUser} = require('../../controllers/user')
const {findAllBlogs} = require('../../controllers/blog')
const passUtils = require('../../utils/password')

route.get('/me', async (req, res) => {

    try {

        let user = await findUser(req.user.username)

        if (!user) {
            res.send('No user Found')
        }

        res.send(user)
    } catch (err) {
        res.send('Unknown user or unauthorized request')
    }

})

route.get('/:username', async (req, res) => {

    try {

        let user = await findUser(req.params.username)

        if (!user) {
            res.send('No user Found')
        }

        res.send(user)
    } catch (err) {
        res.send('Unknown user or unauthorized request')
    }
})

route.get('/:username/blogs', async (req, res) => {

    try {

        const user = await findUser(req.params.username)

        const blogs = await findAllBlogs(user.id)

        if (!blogs) {
            res.send('No blogs found!')
        }

        res.send(blogs)
    } catch (err) {

        res.send('Unknown user or unauthorized request')
    }

})

route.post('/add', async (req, res) => {

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
    } else {
        user.password = await passUtils.passToHash(req.body.password)
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

    if (req.body.zipCode.trim() === '') {
        req.flash('error', 'Zip Code could not be empty')
        res.redirect('/signup')
    } else {
        user.zipCode = req.body.zipCode
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

        const user = await createUser(user, user.password)

        res.redirect('/login')

    } catch (err) {

        req.flash('error', 'Unsuccessful registration. Please try again.')
        return res.redirect('/signup')

    }
})

module.exports = route
