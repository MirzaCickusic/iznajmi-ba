const express = require('express')
const mongoose = require('mongoose')

const config = require('./utils/config')
const logger = require("./utils/logger");
const middleware = require('./utils/middleware');

const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const productRouter = require("./controllers/products");

const app = express()
const cors = require('cors')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/products', productRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
