const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('test', 'root', 'Odili0805', {
    dialect: 'mysql',
    host: 'localhost'
})


module.exports = sequelize;