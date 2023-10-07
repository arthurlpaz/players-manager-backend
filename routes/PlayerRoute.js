const Express = require('express');

//Roteador
const playerRoute = Express.Router();

//Funções para o player
const {
    createPlayer,
    getPlayers,
    getPlayerByID,
    updatePlayer,
    deletePlayer
} = require('../controllers/Player')

//Rotas
playerRoute.route('/')
    .get(getPlayers)
    .post(createPlayer)

playerRoute.route('/:id')
    .get(getPlayerByID)
    .patch(updatePlayer)
    .delete(deletePlayer)