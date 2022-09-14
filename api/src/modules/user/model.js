const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_document: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number_document: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    });
}