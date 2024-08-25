const express = require('express');
const { errorHandler } = require('./middlewares/error-handler');
const { NotFoundError } = require('./errors/not-found-error');
const itemsRouter = require('./routes/items');
const { sequelize } = require('./db/db');

require('dotenv').config()

const app = express();

app.use(express.json())
app.use(itemsRouter)

app.all('*', (req, res, next) => { // app.all is a shortcut for app.get, app.post, app.put, app.delete
    // it will watch for any kind of method and route that doesn't exist
    throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, async () => {
    const dbName = process.env.DB_NAME || 'items';
    const dbUser = process.env.DB_USER || 'postgres';
    const dbPassword = process.env.DB_PASSWORD || '123';
    const dbHost = process.env.DB_HOST || 'localhost';
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Server started on port 3000');
    } catch (error) {
        console.error('Server failed to start due to database connection issues:', error);
    }
});