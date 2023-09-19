require('dotenv').config()

const Express = require('express')

const server = new Express() //objeto do server

server.use(Express.json())

if (process.env.NODE_ENV === 'development') {

    //Utilizar morgan para feedback do server
    server.use(require('morgan')('dev'))
}

server.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

module.exports = server;
