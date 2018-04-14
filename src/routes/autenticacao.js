const autenticacao = require('../controllers/autenticacao/cadastro');
const blockRouter = require('../controllers/blockRouter');
module.exports = application => {
    application.get('/cadastro-usuario', (req, res) => { 
        //res.render('autenticacao/cadastro-usuario')
        autenticacao.exibirCadastro(application, req, res);
    });
    application.post('/cadastro-usuario', (req, res) => {
        autenticacao.realizarCadastroUsuario(application, req, res);
    });
    application.post('/login', (req, res) => {
        autenticacao.realizarLogin(application, req, res);
    });
    application.get('/sair', blockRouter.status, (req, res) => {
        autenticacao.sair(application, req, res);
    });
};