const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
    application.post('/cadastro',async (req,res)=>{
        //Nome, email, escola, idade, sexo;
        //const novoUsuario = new Usuario(req.body);
        //await novoUsuario.save();
        //res.status(200).json({msg:'cadastro realizado com sucesso.'})
        console.log(req.body);
    });
};