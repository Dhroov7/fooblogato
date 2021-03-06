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

function findUserById(userId) {
    return models.user.findOne({
        where: {
            id: userId
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

function createUser(user,password, includes){
    return models.userLocal.create({user: user, password: password}, {include: includes})
}

module.exports = {
    findUser, findUserByEmail, createUser, findUserById
}