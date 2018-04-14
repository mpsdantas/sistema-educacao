const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    nome: String,
    usuario: String,
    escola: String,
    titulo: String,
    assunto: String,
    tipoDired:String,
    descricao: String,
    data: Date,
    statusReport: Boolean,
    dialogo:[{
        msg: String,
        data:Date,
        enviadoPor:String
    }]
});

mongoose.model('Reports', reportSchema);
