/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const models = require('../../db/models').models
const {addBlog, deleteBlog, findAllBlogs, findBlog, updateBlog} = require('../../controllers/blog')
const {reqUser} = require('../../middlewares/userReq')

route.get('/my', reqUser, async (req, res) => {

    try {

        const blogs = await findAllBlogs(req.user.id)
        if (!blogs.length) {
            res.status(404).send('No blogs found!')
        }

        res.send(blogs)

    } catch (err) {
        res.status(401).send('Unknown user or unauthorized request')
    }

})

route.get('/:id', async (req, res) => {

    try {

        const blog = await findBlog(req.params.id)

        if (!blog) {
            res.status(404).send('No blogs found!')
        }

        res.send(blog)

    } catch (err) {
        res.status(401).send('Unknown user or unauthorized request')
    }

})

route.post('/add', reqUser, async (req, res) => {

    try {

        let newBlog = {}

        if (req.body.title) {
            newBlog.title = req.body.title
        }

        if (req.body.description) {
            newBlog.description = req.body.description
        }

        if (newBlog.title && newBlog.description) {
            await addBlog(newBlog.title, newBlog.description, req.user.id)
            res.status(201).send('New Blog created')
        }

        res.status(400).send('Title or description could not empty.')

    } catch (err) {

        res.status(401).send('Unknown user or unauthorized request')
    }

})

route.patch('/:id', async (req, res) => {

    try {

        let updatedBlog = {}

        if (req.body.title) {
            updatedBlog.title = req.body.title
        }

        if (req.body.description) {
            updatedBlog.description = req.body.description
        }

        const blogToBeUpdateId = req.params.id

        await updateBlog(blogToBeUpdateId, updatedBlog.title, updatedBlog.description)

        res.status(200)

    } catch (err) {

        res.status(401).send('Unknown user or unauthorized request')
    }
})

route.delete('/remove/:id', async (req, res) => {

    try {

        const blogToBeDeletedId = req.params.id

        await deleteBlog(blogToBeDeletedId)

        res.status(200).send('Blog deleted!')

    } catch (err) {

        res.status(401).send('Unknown user or unauthorized request')
    }

})

module.exports = route