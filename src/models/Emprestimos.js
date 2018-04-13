const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const emprestimosSchema = new Schema({ 
    status: Boolean, 
    nome_dono: String,
    nome_usuario_emprestado: String,
    itens_emprestados: [{
        nome_equip: String,
        qntd_emprestada: Number
    }],
    data_emprestimo: Date,
    data_devolucao:  Date 
});

mongoose.model('Emprestimos', emprestimosSchema);