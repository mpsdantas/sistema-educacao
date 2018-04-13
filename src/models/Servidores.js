const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servidoresSchema = new Schema({
    nome: String,
    email: String,
    tipoDired: String,
    senha: String
});

mongoose.model('Servidores', servidoresSchema);