const mongoose = require('mongoose');

const Schema = new mongoose({
    local: {
        type: String,
        required: [true, 'Local da partida não determinado']
    },
    date: {
        type: Date,
        required: [true, 'Data da partida não informada']
    },
    goals: {
        type: Number,
        required: [true, 'Quantidade de gols não informada']
    },
    assists: {
        type: Number,
        required: [true, 'Quantidade de gols visitante não informada']
    },
    minutes_played: {
        type: Number,
        required: [true, 'Minutos jogados não informado']
    }
})

module.exports = mongoose.model('Match', Schema)