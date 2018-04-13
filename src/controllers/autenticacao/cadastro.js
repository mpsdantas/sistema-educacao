const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
exports.realizarCadastroUsuario = async (application, req, res) => {
    console.log('oi')
    /*console.log('oi')
    req.assert('nome', 'O seu nome não pode ser vazio').notEmpty();
    req.assert('email', 'O seu e-mail não pode ser vazio.').notEmpty();
    req.assert('tipoUsuario', 'O tipo de usuario não pode ser vazio').notEmpty();
    req.assert('tipoDired', 'O tipo dired não pode ser vazio.').notEmpty();
    req.assert('escola', 'A escola não pode ser vazia.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('repetirSenha', 'O campo repetir senha não pode ser vazio.').notEmpty();
    req.assert('email', 'Digite um formato de email valido: usuario@email.com').isEmail();
    req.assert('senha', 'As senhas não são iguais').equals(req.repetirsenha);
    const erros = req.validationErrors();
    console.log(erros);
    if(erros){
        res.status(203).json({erros:erros});
        return;
    }
    const buscaUsuarios = await Usuario.find({email:req.body.email});
    console.log(buscaUsuarios);
    */

};