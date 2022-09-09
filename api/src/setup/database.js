//imports
const { Sequelize } = require('sequelize');

//create new database connection
const connection = new Sequelize('postgres://postgres:admin123@localhost:5432/frutapp', {
    logging: false
})


exports.connection = connection;