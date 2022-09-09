const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        type_document: {
            type: DataTypes.INTEGER
        },
        number_document: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    });
}