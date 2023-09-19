const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome do jogador não definido']
    },
    age: {
        type: Number,
        required: [true, 'Idade não definida']
    },
    position: {
        type: String,
        required: [true, 'Posição não definida']
    },
    market_value: {
        type: Number,
        required: [true, 'Valor de mercado não informado']
    },
    description: {
        type: String,
        required: [true, 'Descrição vazia']
    }
})

module.exports = mongoose.model('Player', Schema)