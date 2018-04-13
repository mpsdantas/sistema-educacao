const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({ 
    nome: String, 
    email: String,
    tipoUsuario: String,
    tipoDired: String,
    escola: String,
    senha: String 
});

mongoose.model('Usuarios', usuarioSchema);