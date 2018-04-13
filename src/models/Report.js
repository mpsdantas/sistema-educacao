const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({ 
    usuario: String, 
    escola: String,
    titulo: String,
    assunto: String,
    descricao: String,
    data: String,
    statusReport: Boolean,
    dialogo:[{
        msg: String
    }]
});

mongoose.model('Reports', reportSchema);