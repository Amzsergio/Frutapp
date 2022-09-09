const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('order', {
        name: {
            type: DataTypes.DATE
        },
        email: {
            type: DataTypes.DECIMAL
        }
    });
}