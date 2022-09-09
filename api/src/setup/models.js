//App imports
const { connection } = require('./database.js')

//import models
const userModel = require('../modules/user/model.js')
const roleModel = require('../modules/role/model.js')

//user model sync
userModel(connection)
connection.models.user.sync();

//rol model sync
roleModel(connection)
connection.models.role.sync();