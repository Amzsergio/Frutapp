const { DataTypes } = require('sequelize');

// Users

module.exports = sequelize => {
    sequelize.define('role', {
        name: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.BOOLEAN
        }
    });
}