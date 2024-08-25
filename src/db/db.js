const { Sequelize } = require("sequelize");
require('dotenv').config()
const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'items',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASSWORD || '123',
  {
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DATABASE_PORT || 5432
  }
);

module.exports = { sequelize }