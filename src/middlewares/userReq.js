/**
 * Created by dhroovgupta7 on 09/09/18
 */

function reqUser(req, res, next) {
    req.user = {}
    req.user.username = 'Dhroov7'
    req.user.id = 1

    next()

}

module.exports = {
    reqUser
}
