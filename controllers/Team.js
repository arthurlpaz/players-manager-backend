const Team = require('../models/Team');

const createTeam = async (req, res) => {
    const bodyData = req.body;

    try {
        const newTeam = await Team.create(bodyData)

        newTeam.save();

        return res.status(201).json({
            status: 'Success',
            reqTime: req.requestTime,
            message: 'Team created'
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'Error',
            reqTime: req.requestTime,
            message: error.message
        });
    }
}

const getTeam = async (req, res) => {
    try {
        const teams = await Team.find(req.query);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            results: teams.size,
            teams
        })
    }
    catch (error) {
        return res.status(500).json({
            status: 'Success',
            reqTime: req.requestTime,
            message: error.message
        });
    }
}

const getTeamByID = async (req, res) => {
    const teamID = req.params.id;

    try {
        const team = await Team.findById(teamID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            team
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'Error',
            reqTime: req.requestTime,
            message: error.message
        });
    }
}

const updateTeam = async (req, res) => {
    const bodyData = req.body;
    const matchID = req.params.id;

    try {
        const updatedTeam = await Team.findByIdAndUpdate(
            matchID,
            bodyData,
            {new: true, runValidators: true}
        );

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            updatedTeam
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'Error',
            reqTime: req.requestTime,
            message: error.message
        });
    }
}

const deleteTeam = async (req, res) => {
    const teamID = req.params.id;

    try {
        const deletedTeam = await Team.findByIdAndDelete(teamID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            deletedTeam
        })
    }
    catch (error) {
        return res.status(500).json({
            status: 'Error',
            reqTime: req.requestTime,
            message: error.message
        });
    }
}

module.exports = {
    createTeam,
    getTeam,
    getTeamByID,
    updateTeam,
    deleteTeam
}
