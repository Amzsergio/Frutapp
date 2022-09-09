const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('product', {
        name: {
            type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
        },
        expiration_date: {
            type: DataTypes.DATE
        },
        sale_price: {
            type: DataTypes.DECIMAL
        },
        purchase_price: {
            type: DataTypes.DECIMAL
        },
        description: {
            type: DataTypes.INTEGER
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    });
}