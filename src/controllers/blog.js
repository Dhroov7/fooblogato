/**
 * Created by dhroovgupta7 on 07/09/18
 */

const models = require('../db/models').models

function findAllBlogs(userId) {
    return models.blog.findAll({
        where: {
            userId: userId
        }
    })
}

function findBlog(blogId) {
    return models.blog.findOne({
        where: {
            id: blogId
        }
    })
}

function addBlog(title, description, userId) {
    return models.blog.create({title: title, description: description},{
        include: userId
    })
}

function updateBlog(blogId, title, description) {
    return models.blog.upsert({id: blogId, title: title, description: description})
}

function deleteBlog(blogId) {
    return models.blog.destroy({
        where: {
            id: blogId
        }
    })
}

module.exports = {
    findAllBlogs, findBlog, addBlog, updateBlog, deleteBlog
}