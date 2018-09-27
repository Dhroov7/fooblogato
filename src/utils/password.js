/**
 * Created by dhroovgupta7 on 22/09/18
 */

const bcrypt = require('bcrypt')
const saltRounds = 8

const passToHash = function (pass) {
    bcrypt.hash(pass, saltRounds, function (err, hash) {
        return hash
    })
}

const compareHash = function (pass, hash) {
    return bcrypt.compare(pass, hash)
}

module.exports = {
    passToHash, compareHash
}