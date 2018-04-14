const autenticacao = require('../controllers/autenticacao/cadastro');
const report = require('../controllers/report/index.js');
const blockRouter = require('../controllers/blockRouter');

module.exports = application => {
    application.post('/realizar-report', blockRouter.statusUser, (req, res) => {
        report.realizarReport(application, req, res);
    });
    application.get('/report/listar', blockRouter.statusUser, (req, res) => {
        report.exibirReportsUsuario(application, req, res);
    });
    application.get('/ver-reports/:id', blockRouter.statusUser, (req, res) => {
        report.exibirReportIndividual(application, req, res);
    });
    application.get('/ver-reports-admin/:id', blockRouter.statusAdmin, (req, res) => {
        report.exibirReportIndividualAdmin(application, req, res);
    });
    application.post('/enviar-respost-report', (req, res) => {
        report.respostaReportIndividual(application, req, res);
    });
};