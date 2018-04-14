const blockRouter = require('../controllers/blockRouter/index.js');
const report = require('../controllers/report/index');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
    
    application.get('/report', blockRouter.statusUser, (req,res) => {
        res.render('report/form',{nome:req.session.nome});
    });

    /*application.get('/report/visualizar', blockRouter.statusUser, (req,res) => {
        res.render('report/visualizar',{nome:req.session.nome});
    });*/
    
    application.get('/admin', blockRouter.statusAdmin, (req, res) => { 

        report.exibirDashboard(application, req, res);
    });
    application.get('/admin/statistics', blockRouter.statusAdmin,  (req,res) => {
        res.render('admin/stats')
    });

    application.get('/admin/reports', blockRouter.statusAdmin, (req,res) => {res.render('admin/reports')});

    application.get('/perfil/user-perfil', blockRouter.statusUser, (req, res) => {
        res.render('perfil/user-perfil', {nome:req.session.nome})
    });
};