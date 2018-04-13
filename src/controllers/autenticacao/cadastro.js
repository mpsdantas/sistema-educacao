const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
const crypto = require('crypto');
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
    }
    const senhaCriptogafada = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    req.body.senha = senhaCriptogafada;
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(200).json({sucesso:true,msg: "Usuário criado com sucesso."})

};
