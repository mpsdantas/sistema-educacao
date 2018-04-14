const mongoose = require('mongoose');
const Escola = mongoose.model('Escolas');
exports.salvarEscola = async (application, req, res) =>{
    const novaEscola = new Escola(req.body);
    await novaEscola.save();
    res.status(200).json({status:true})
}
exports.renderTodasEscolas = async (application, req, res) =>{
    const escolas = await Escola.find({});
    res.render('admin/escola/listar',{escolas});
}