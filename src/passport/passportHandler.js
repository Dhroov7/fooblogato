/**
 * Created by dhroovgupta7 on 22/09/18
 */

const passport = require('passport')
const models = require('../db/models').models
const LocalStrategy = require('./strategies/index').localStrategy

passport.use(LocalStrategy)

passport.serializeUser(function (user, done) {
    done(null, user.userId);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await models.user.findById(id)
        return done(null, user)

    } catch (err) {
        console.log(err)
        return done(err)
    }

});


module.exports = passport