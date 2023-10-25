const Express = require('express');

const matchRoute = Express.Router();

const {
    createMatch,
    getMatch,
    getMatchByID,
    updateMatch,
    deleteMatch
} = require('../controllers/Match');

matchRoute.route('/')
    .get(getMatch)
    .post(createMatch)

matchRoute.route('/:id')
    .get(getMatchByID)
    .patch(updateMatch)
    .delete(deleteMatch)

module.exports = matchRoute;
