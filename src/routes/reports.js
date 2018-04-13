const autenticacao = require('../controllers/autenticacao/cadastro');
const report = require('../controllers/report/index.js');
const blockRouter = require('../controllers/blockRouter');
module.exports = application => {
    application.post('/realizar-report', blockRouter.statusUser, (req, res) => {
        report.realizarReport(application, req, res);
    });
};