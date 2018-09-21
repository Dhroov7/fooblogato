/**
 * Created by dhroovgupta7 on 22/09/18
 */

const bcrypt = require('bcrypt')
const saltRounds = 10

const passToHash = function (pass) {
    return bcrypt.hash(pass, saltRounds)
}

const compareHash = function (pass, hash) {
    return bcrypt.compare(pass, hash)
}

module.exports = {
    passToHash, compareHash
}