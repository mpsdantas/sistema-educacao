const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
const Servidor = mongoose.model('Servidores');
const Escola = mongoose.model('Escolas');
const crypto = require('crypto');
exports.exibirCadastro = async (application, req, res) =>{
    const todasEscolas = await Escola.find({});
    res.render('autenticacao/cadastro-usuario',{escolas:todasEscolas});
}
exports.realizarCadastroUsuario = async (application, req, res) => {
    req.assert('nome', 'O seu nome não pode ser vazio').notEmpty();
    req.assert('email', 'O seu e-mail não pode ser vazio.').notEmpty();
    req.assert('tipoUsuario', 'O tipo de usuario não pode ser vazio').notEmpty();
    req.assert('tipoDired', 'O tipo dired não pode ser vazio.').notEmpty();
    req.assert('escola', 'A escola não pode ser vazia.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('repetirSenha', 'O campo repetir senha não pode ser vazio.').notEmpty();
    req.assert('email', 'Digite um formato de email valido: usuario@email.com').isEmail();
    req.assert('senha', 'As senhas não são iguais').equals(req.body.repetirSenha);
    const erros = req.validationErrors();
    if(erros){
        res.status(203).json({erros:erros});
        return;
    }
    const buscaUsuarios = await Usuario.find({email:req.body.email});
    if(buscaUsuarios.length>0){
        const erroUsuario = [{msg: "Usuário já cadastrado com esse email."}];
        res.status(203).json({ erros: erroUsuario});
        return;
    }else{
        const senhaCriptogafada = await crypto.createHash("md5").update(req.body.senha).digest("hex");
        req.body.senha = senhaCriptogafada;
        const novoUsuario = new Usuario(req.body);
        await novoUsuario.save();
        res.status(200).json({ sucesso: true, msg: "Usuário criado com sucesso." });
        return;
    }
};
exports.atualizarPerfil = async (application, req, res) => {
    req.assert('nome', 'O seu nome não pode ser vazio').notEmpty();
    req.assert('tipoUsuario', 'O tipo de usuario não pode ser vazio').notEmpty();
    req.assert('tipoDired', 'O tipo dired não pode ser vazio.').notEmpty();
    req.assert('escola', 'A escola não pode ser vazia.').notEmpty();
}

exports.atualizarSenha = async (application, req, res) => {
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    req.assert('repetirSenha', 'O campo repetir senha não pode ser vazio.').notEmpty();
    req.assert('senha', 'As senhas não são iguais').equals(req.body.repetirSenha);
}

exports.realizarLogin = async (application, req, res) => {
    req.assert('email', 'O seu e-mail não pode ser vazio.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    if (erros) {
        res.status(203).json({ erros: erros });
        return;
    }
    const senhaCriptogafada = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    req.body.senha = senhaCriptogafada;
    const {email} = req.body;
    const {senha} = req.body;
    const buscaUsuarios = await Usuario.findOne({email:email,senha:senha});
    const buscaServidores = await Servidor.findOne({ email: email, senha: senha });
    if (buscaUsuarios === null && buscaServidores === null){
        const erroUsuario = [{ status: false, msg: "Usuário ou senha inválidos" }];
        res.status(203).json({erros:erroUsuario});
        return;
    }
    if (buscaServidores !== null){
        req.session.statusAdmin = true;
        req.session.nome = buscaServidores.nome;
        req.session.tipoDired = buscaServidores.tipoDired;
        res.status(200).json({status:true,tipo:"Servidor",msg:"Login autorizado"});
        return;
    }else if(buscaUsuarios !== null){
        req.session.statusUser = true;
        req.session.nome = buscaUsuarios.nome;
        req.session.email = buscaUsuarios.email;
        req.session.tipoUsuario = buscaUsuarios.tipoUsuario;
        req.session.tipoDired = buscaUsuarios.tipoDired;
        req.session.escola = buscaUsuarios.escola;
        res.status(200).json({ status: true, tipo: "Usuario", msg: "Login autorizado" });
        return;
    }
};
exports.sair = (application, req, res) => {
    req.session.destroy( err => {
        res.redirect('/');
    });
}
