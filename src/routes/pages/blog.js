/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()
const blogController = require('../../controllers/blog')
const userController = require('../../controllers/user')

route.get('/me', (req, res) => {

    const blogs = blogController.findAllBlogs(req.user.id)

    if (!blogs.length) {
        res.send('No blogs found!')
    }

    res.render('homePage', {blogs})
})

route.get('/:username', (req, res) => {

    const user = userController.findUser(req.params.username)

    if (!user) {
        res.send('No user found!')
    }

    const blogs = blogController.findAllBlogs(user.id)

    if (!blogs.length) {
        res.status(404).send('No blogs found!')
    }

    res.render('homePage', {blogs})
})

route.get('/:id', (req, res) => {

    const blog = blogController.findBlog(req.params.id)

    if (!blog) {
        res.status(404).send('No blog found!')
    }

    res.render('feed',{blog})
})

module.exports = route
