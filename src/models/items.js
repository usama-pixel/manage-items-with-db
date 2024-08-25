// models/Item.js
const { sequelize } = require('../db/db');
const { DataTypes } = require('sequelize'); // Import DataTypes instead of Sequelize

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER, // Use DataTypes instead of sequelize.Sequelize
        primaryKey: true,
        autoIncrement: true // You might want to auto-increment the ID
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

module.exports = Item;
