/**
 * Created by dhroovgupta7 on 07/09/18
 */

const models = require('../db/models').models

function findUser(userUsername) {
    return models.user.findOne({
        where: {
            username: userUsername
        }
    })
}

function findUserByEmail(userEmail){
    return models.user.findOne({
        where: {
            email: userEmail
        }
    })
}

function createUser(user,password){
    return models.user.create({user: user, password: password})
}

module.exports = {
    findUser, findUserByEmail, createUser
}