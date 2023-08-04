const {Sequelize} = require("sequelize");

const db = new Sequelize(
    'thrifter_db', 'root', 'a',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

module.exports = { db }