const autenticacao = require('../controllers/autenticacao/cadastro');
const blockRouter = require('../controllers/blockRouter');
module.exports = application => {
    application.post('/realizar-report', blockRouter.statusUser, (req, res) => {
        console.log(req.body);
    });
};