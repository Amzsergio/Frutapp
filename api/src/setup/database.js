const { Sequelize, Op } = require('sequelize');

//import models
const userModel = require('../modules/user/model.js');
const roleModel = require('../modules/role/model.js');
const orderModel = require('../modules/order/model.js');
const productModel = require('../modules/product/model.js');
const categoriesModel = require('../modules/categories/model.js');

const connection = new Sequelize('postgres://postgres:admin123@localhost:5432/frutapp', {
    logging: false
})

userModel(connection);
roleModel(connection);
orderModel(connection);
productModel(connection);
categoriesModel(connection);



module.exports = {
    ...connection.models,
    db: connection,
    Op
}