/**
 * Created by dhroovgupta7 on 25/09/18
 */

const route = require('express').Router()
const blogRouter = require('./blog')
const userRouter = require('./user')

route.use('/blog',blogRouter)
route.use('/user',userRouter)

route.get('/', (req,res) => {
    res.render('homePage')
})

module.exports = route