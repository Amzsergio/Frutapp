//App imports
const { connection } = require('./database.js')

//import models
const userModel = require('../modules/user/model.js');
const roleModel = require('../modules/role/model.js');
const orderModel = require('../modules/order/model.js');
const productModel = require('../modules/product/model.js');
const categoriesModel = require('../modules/categories/model.js');


//user model sync
userModel(connection)
connection.models.user.sync();

//rol model sync
roleModel(connection)
connection.models.role.sync();

//order model sync
orderModel(connection)
connection.models.order.sync();

//product model sync
productModel(connection)
connection.models.product.sync();

//categories model sync
categoriesModel(connection)
connection.models.categories.sync();