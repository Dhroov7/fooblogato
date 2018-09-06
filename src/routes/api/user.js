/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const {findUser} = require('../../controllers/user')


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

route.get('/:username/blogs', (req, res) => {

})

module.exports = route
