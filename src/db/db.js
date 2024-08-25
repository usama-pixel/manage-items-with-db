const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('items', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize }