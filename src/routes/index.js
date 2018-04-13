const blockRouter = require('../controllers/blockRouter');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
    application.get('/report', blockRouter.verify,(req,res) => {
        res.render('report/form',{nome:req.session.nome});
    });
    application.get('/admin', blockRouter.verify, (req,res) => {res.render('admin/dashboard')});
    application.get('/admin/statistics', blockRouter.verify, (req,res) => {
        res.render('admin/stats')
    });
    application.get('/admin/reports', blockRouter.verify,(req,res) => {res.render('admin/reports')});
};