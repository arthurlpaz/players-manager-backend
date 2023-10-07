const mongoose = require('mongoose');

const Schema = new mongoose({
    local: {
        type: String,
        required: [true, 'Local da partida não determinado']
    },
    date: {
        type: Date,
        required: [true, 'Data da partida não informada']
    }
})

module.exports = mongoose.model('Match', Schema)