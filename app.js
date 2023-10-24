require('dotenv').config()

const Express = require('express')

const matchRoute = require('./routes/MatchRoute');
const teamRoute = require('./routes/TeamRoute');
const playersRoute = require('./routes/TeamRoute')

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

//Rotas utilizadas
server.use('/api/v1/teams', teamRoute);
server.use('/api/v1/players', playersRoute);
server.use('/api/v1/matches', matchRoute);

module.exports = server;
