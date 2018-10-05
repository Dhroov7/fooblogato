/**
 * Created by dhroovgupta7 on 22/09/18
 */

const models = require('../../db/models').models
const LocalStrategy = require('passport-local').Strategy
const passUtils = require('../../utils/password')

module.exports = new LocalStrategy(async function (username, password, cb) {
    try {
        const user = await models.userLocal.findOne({
            include: [{
                model: models.user,
                where: {
                    username: username
                }
            }]
        })

        if(!user){
            return cb(null, false, {message: 'Invalid Username or password'})
        }

        const match = await passUtils.compareHash(password, user.password)

        if(match){
            return cb(null, userLocal.user.get())
        }else{
            return cb(null, false, {message: 'Invalid Password or password'})
        }
    } catch (err) {

        return cb(null, false, {message: 'Error connecting to user database'})
    }
})