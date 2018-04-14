const mongoose = require('mongoose');
const Report = mongoose.model('Reports');
const Usuario = mongoose.model('Usuarios');
const ObjectId = require('mongodb').ObjectID;
const nodemailer = require('nodemailer');
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
exports.exibirReportIndividualAdmin = async (application, req, res) => {
    const reportIndividual = await Report.findOne({ _id: new ObjectId(req.params.id) });
    res.render('admin/report-individual', { reportIndividual });
}
exports.exibirDashboard = async (application, req, res) =>{
    let d = new Date();
    let anoC = d.getFullYear();
    let mesC = d.getMonth();
    let dataInicio = new Date(anoC, mesC, 1);
    let dataFim = new Date(anoC, mesC + 1, 0);
    const reportsEsseMes = await Report.find({data: { $gt: dataInicio, $lt: dataFim } });
    const reportsAbertos = await Report.find({$where: "this.dialogo.length == 1"});//tipoDired:req.session.tipoDired});
    const reportsFechados = await Report.find({$where: "this.dialogo.length > 1"});//, tipoDired: req.session.tipoDired });
    const reportsTotal = await Report.find({});
    const reportsReclamacoes = await Report.find({ assunto:"reclamação"});
    res.render('admin/dashboard', { reportsAbertos, reportsTotal, reportsReclamacoes, reportsFechados, reportsEsseMes});
}
exports.exibirTodosReports = async (application, req, res) => {
    const reportsTotal = await Report.find({});
    res.render('admin/reports', {reports: reportsTotal});
}
exports.respostaReportIndividual = async (application, req, res) => {
    const updateRespostass = await Report.update({_id: new ObjectId(req.body.id) },
    { $push: { dialogo: {msg:req.body.descricao,data: new Date(),enviadoPor:req.session.nome}}});
    res.status(200).json({status:true});
    const { nome } = await Report.findOne({ _id: new ObjectId(req.body.id)});
    const {email} = await Usuario.findOne({nome:nome});
    const transporte = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'aplicacaobapp@gmail.com',
            pass: 'bapp2017Natal@123'
        }
    });
    const enviarEmail = {
        from: 'naoresponder@bapp.com',
        to: email, // Quem receberá
        subject: 'Resposta da secretaria de educação',  // Um assunto bacana :-)
        html: "A secretaria de educação respondeu a sua questão, entre no sistema agora e confira." // O conteúdo do e-mail
    };
    transporte.sendMail(enviarEmail, function (err, info) {
        if (err) throw err;
    });
}
