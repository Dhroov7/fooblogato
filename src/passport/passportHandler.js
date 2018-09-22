/**
 * Created by dhroovgupta7 on 22/09/18
 */

const passport = require('passport')
const models = require('../db/models').models
const sequelize = require('sequelize')
const Localstrategy = require('./strategies/user-local')

passport.use(Localstrategy)

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    models.user.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = passport