const mongoose = require('mongoose');
const Report = mongoose.model('Reports');
const ObjectId = require('mongodb').ObjectID;
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
};
exports.exibirReportsUsuario = async (application, req, res) => {
    const reportsUsuarios = await Report.find({nome:req.session.nome});
    res.render('report/list', { nome: req.session.nome, reports: reportsUsuarios});
}
exports.exibirReportIndividual = async (application, req, res) =>{
    const reportIndividual = await Report.findOne({_id:new ObjectId(req.params.id)});

}