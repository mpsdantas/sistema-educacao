const blockRouter = require('../controllers/blockRouter/index.js');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
    application.get('/report', blockRouter.statusUser, (req,res) => {
        res.render('report/form',{nome:req.session.nome});
    });
    application.get('/admin', blockRouter.statusAdmin, (req,res) => {res.render('admin/dashboard')});
    application.get('/admin/statistics', blockRouter.statusAdmin,  (req,res) => {
        res.render('admin/stats')
    });
    application.get('/admin/reports', blockRouter.statusAdmin, (req,res) => {res.render('admin/reports')});
};