const Match = require('../models/Match')

const createMatch = async (req, res) => {
    const bodyData = req.body;

    try {
        const newMatch = await Match.create(bodyData);

        newMatch.save();

        return res.status(201).json({
            status: 'Success',
            reqTime: req.requestTime,
            message: 'Match created'
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

const getMatch = async (req, res) => {
    try {
        const matches = await Match.find(req.query);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            results: matches.size,
            matches
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

const getMatchByID = async (req, res) => {
    const matchID = req.params.id;

    try {
        const match = await Match.findById(matchID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            match
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

const updateMatch = async (req, res) => {
    const bodyData = req.body;
    const matchID = req.params.id;

    try {
        const updatedMatch = await Match.findByIdAndUpdate(
            matchID,
            bodyData,
            {new: true, runValidators: true}
        );

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            updatedMatch
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

const deleteMatch = async (req, res) => {
    const matchID = req.params.id;

    try {
        const deletedMatch = await Match.findByIdAndDelete(matchID);

        return res.status(200).json({
            status: 'Success',
            reqTime: req.requestTime,
            deletedMatch
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
    createMatch,
    getMatch,
    getMatchByID,
    updateMatch,
    deleteMatch
}