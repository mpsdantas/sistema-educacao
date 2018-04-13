const mongoose = require('mongoose');
const Report = mongoose.model('Reports');
exports.realizarReport = async (application, req, res) => {
    if(req.body.anonimo==='false'){
        req.body.nome = req.session.nome;
    }else{
        req.body.nome = "Anonimo";
    }
    req.body.escola = req.session.escola;
    req.body.data = new Date();
    req.body.statusReport = false;
    req.body.dialogo = [{}];
    req.assert('assunto', 'O assunto não pode ser vazio.').notEmpty();
    req.assert('titulo', 'O titulo não pode ser vazio.').notEmpty();
    req.assert('descricao', 'A descrição não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    if (erros) {
        res.status(203).json({ erros: erros });
        return;
    }
    const salvarReport = new Report(req.body);
    await salvarReport.save();
    res.status(200).json({status:true,msg:"Seu report foi enviado com sucesso, obrigado."})
}