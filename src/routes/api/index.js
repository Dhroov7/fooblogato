/**
 * Created by dhroovgupta7 on 06/09/18
 */

const express = require('express')
const route = express.Router()
const userRouter = require('./user')
const blogRouter = require('./blog')

route.use('/user', userRouter)

route.use('/blog', blogRouter)

module.exports = route