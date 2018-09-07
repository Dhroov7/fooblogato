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

module.exports = {
    findUser
}