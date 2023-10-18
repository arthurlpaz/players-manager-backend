const Express = require('express');

const TeamRoute = Express.Router();

const {
    createTeam,
    getTeam,
    getTeamByID,
    updateTeam,
    deleteTeam
} = require('../controllers/Team')

TeamRoute.route('/')
    .get(getTeam)
    .post(createTeam)

TeamRoute.route('/id')
    .get(getTeamByID)
    .patch(updateTeam)
    .delete(deleteTeam)

module.exports = TeamRoute