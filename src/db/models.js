/**
 * Created by dhroovgupta7 on 06/09/18
 */

const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db_name = 'fooblogato' //change this when deploy this in prod.
const db_user = 'fooblogger' //change this when deploy this in prod.
const db_pass = 'foopass' //change this when deploy this in prod.
const db_host = 'localhost' //change this when deploy this in prod.
const db_URL = 'postgres://' + db_user + ":" + db_pass + "@" + db_host + ":5432/" + db_name

const db = new Sequelize(db_URL, {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    logging: true
})

const user = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {types: DataTypes.STRING, allowNull: false, unique: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {types: DataTypes.STRING, allowNull: false, unique: true},
    city: {type: DataTypes.STRING, allowNull: false},
    gender: {Type: DataTypes.ENUM('MALE', 'FEMALE', 'UNDISCLOSED'), default: 'UNDISCLOSED'}
}, {
    paranoid: true
})

const blog = db.define('blog', {
    id: {types: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {types: DataTypes.STRING, allowNull: false, default: 'TITLE'},
    description: {types: DataTypes.TEXT, allowNull: false, default: 'Some Description'},
    treat: {types: DataTypes.BIGINT, allowNull: false, default: 0}
})

blog.belongsTo(user)
user.hasMany(blog, {as: 'blogs'})

db.sync({
    force: true, //change this when deploy this in prod.
    alter: true //change this when deploy this in prod.
}).then(() => {
    console.log('Database configured.')
}).catch(err => {
    console.log(err)
})

module.exports = {
    models: {
        user,
        blog
    },
    db
}