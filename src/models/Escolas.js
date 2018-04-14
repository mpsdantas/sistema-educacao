const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servidoresSchema = new Schema({
    nome: String,
    tipoDired: String,
    cidade: String,
    dataCriacao: Date,
    descricao: String
});

mongoose.model('Escolas', servidoresSchema);