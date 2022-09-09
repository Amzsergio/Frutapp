const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('categories', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    });
}