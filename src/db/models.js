
/**
 * Created by dhroovgupta7 on 06/09/18
 */

const Sequelize = require('sequelize')

const db_name = 'fooblogato' //change this when deploy this in prod.
const db_user = 'fooblogger' //change this when deploy this in prod.
const db_pass = 'foopass' //change this when deploy this in prod.
const db_host = 'postgres' //change this when deploy this in prod.
const db_URL = 'postgres://' + db_user + ":" + db_pass + "@" + db_host + ":5432/" + db_name

const db = new Sequelize(db_URL,{
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    logging: true
})

db.sync({
    force: true, //change this when deploy this in prod.
    alter: true //change this when deploy this in prod.
})

module.exports = {
    db
}