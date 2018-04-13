const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const equipamentosSchema = new Schema({ 
    nome: String,
    id_dono: String,
    qntd_total: Number,
    qntd_disponivel: Number,
    categoria: String,
    codigo: String
});

mongoose.model('Equipamentos', equipamentosSchema);