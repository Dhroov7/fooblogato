/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const {findUser} = require('../../controllers/user')
const {findAllBlogs} = require('../../controllers/blog')
const {reqUser} = require('../../middlewares/userReq')

route.get('/me', reqUser, async (req, res) => {

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

route.get('/:username/blogs', async(req, res) => {

    try{

        const user = await findUser(req.params.username)

        const blogs = await findAllBlogs(user.id)

        if(!blogs){
            res.send('No blogs found!')
        }

        res.send(blogs)
    }catch(err){

        res.send('Unknown user or unauthorized request')
    }

})

module.exports = route
