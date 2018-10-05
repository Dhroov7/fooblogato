/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()
const userController = require('../../controllers/user')

route.get('/me', (req, res) => {

    const user = userController.findUser(req.user.username)

    if (!user) {
        res.status(404).send('No user found')
    }

    res.render('profile', {user})
})

route.get('/:username',(req,res) => {

    const user = userController.findUser(req.params.username)

    if (!user) {
        res.status(404).send('No user found')
    }

    res.render('profile')
})

module.exports = route