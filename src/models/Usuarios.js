const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({ 
    nome: String, 
    sobrenome: String,
    email: String,
    senha: String,
    cpf: Number,
    tipoUsuario: String 
});

mongoose.model('Usuarios', usuarioSchema);