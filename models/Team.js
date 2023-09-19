const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome do time não informado']
    },
    password: {
        type: String,
        required: [true, 'Senha não informada']
    },
    email: {
        type: String,
        required: [true, 'Email não informado']
    }

}, {timestamps: true})
// timestamps: data de criação e atualização

Schema.methods.correctPassword = async function (candidatePasssword, userPassword) {
    return await bcrypt.compare(candidatePasssword, userPassword)
}