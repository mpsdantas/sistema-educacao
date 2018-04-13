const autenticacao = require('../controllers/autenticacao/cadastro');
module.exports = application => {
    application.get('/cadastro-usuario', (req, res) => { 
        res.render('autenticacao/cadastro-usuario')
    });
    application.post('/cadastro-usuario', (req, res) => {
        autenticacao.realizarCadastroUsuario(application, req, res);
    });
    application.post('/login', (req, res) => {
        autenticacao.realizarLogin(application, req, res);
    });
};