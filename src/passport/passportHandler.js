/**
 * Created by dhroovgupta7 on 22/09/18
 */

const passport = require('passport')
const models = require('../db/models').models
const Localstrategy = require('./strategies/index').localStrategy

passport.use(Localstrategy)

passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

passport.deserializeUser(async function (id, done) {

    try {

        const user = await models.user.findById(id)
        console.log(user)
        return done(null, user)

    } catch (err) {
        console.log(err)
        return done(err)
    }

});


module.exports = passport