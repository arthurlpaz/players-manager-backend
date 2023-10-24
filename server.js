require('dotenv').config(); //iniciar configuração do .env

const server = require('./app');
const mongoose = require('mongoose')

// Utilizar banco de dados na nuvem

const url_cloud = process.env.DB_URL_LOCAL.replace(
    "<username>",
    process.env.DB_USERNAME
).replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(process.env.DB_URL_LOCAL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    console.log('Database connected!!')
);

if (process.env.NODE_ENV !== 'test') {
    server.listen(process.env.PORT || 8081, () => {
        console.log("---".repeat(3) + "\tServidor iniciado\t" + "---".repeat(3))
    })
}

module.exports = server;