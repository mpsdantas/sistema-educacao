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
    req.body.tipoDired = req.session.tipoDired;
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
    res.status(200).json({status:true,msg:"Seu report foi enviado com sucesso, obrigado."});
    return;
};
exports.exibirReportsUsuario = async (application, req, res) => {
    const reportsUsuarios = await Report.find({nome:req.session.nome});
    res.render('report/list', { nome: req.session.nome, reports: reportsUsuarios});
}
exports.exibirReportIndividual = async (application, req, res) =>{
    const reportIndividual = await Report.findOne({_id:new ObjectId(req.params.id)});
    res.render('report/visualizar',{reportIndividual});
}
exports.exibirDashboard = async (application, req, res) =>{
    let d = new Date();
    let anoC = d.getFullYear();
    let mesC = d.getMonth();
    let dataInicio = new Date(anoC, mesC, 1);
    let dataFim = new Date(anoC, mesC + 1, 0);
    const reportsEsseMes = await Report.find({ data: { $gt: dataInicio, $lt: dataFim } });
    const reportsAbertos = await Report.find({statusReport:false,tipoDired:req.session.tipoDired});
    const reportsFechados = await Report.find({ statusReport: true, tipoDired: req.session.tipoDired });
    const reportsTotal = await Report.find({});
    const reportsReclamacoes = await Report.find({ assunto:"reclamação"});
    res.render('admin/dashboard', { reportsAbertos, reportsTotal, reportsReclamacoes, reportsFechados, reportsEsseMes});
}
exports.respostaReportIndividual = async (application, req, res) => {
    console.log(req.body.id);
    console.log(req.body.descricao);
    const updateRespostass = await Report.update({_id: new ObjectId(req.body.id) },
    { $push: { dialogo: {msg:req.body.descricao}}});
    res.status(200).json({status:true});
}