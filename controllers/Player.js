const Player = require('../models/Player');

const createPlayer = async (req, res) => {
    const bodyData = req.body; //Pega o body da requisição

    try {
        const newPlayer = await Player.create(bodyData);

        newPlayer.save();

        return res.status(201).json({
            status: 'Success',
            reqTime: req.requestTime,
            message: 'Player created!'
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

const getPlayers = async (req, res) => {
    try {
        const players = await Player.find(req.query);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            results: players.size,
            players
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

const getPlayerByID = async (req, res) => {
    const playerID = req.params.id;

    try {
        const player = await Player.findById(playerID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            player
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

const updatePlayer = async (req, res) => {
    const bodyData = req.body;
    const playerID = req.params.id;

    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            playerID,
            bodyData,
            { new: true, runValidators: true}
        );

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            updatedPlayer
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

const deletePlayer = async (req, res) => {
    const playerID = req.params.id;

    try {
        const deletedPlayer = await Player.findByIdAndDelete(playerID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            deletedPlayer
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'Error',
            reqTime: req.requestTime,
            message: error.message
        })
    }
}

module.exports = {
    createPlayer,
    getPlayers,
    getPlayerByID,
    updatePlayer,
    deletePlayer
}