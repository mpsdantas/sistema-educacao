const blockRouter = require("../controllers/blockRouter/index.js");
const report = require("../controllers/report/index");
const escolas = require('../controllers/escolas');
module.exports = application => {
  application.get('/', (req,res) => {res.render('index')});

  application.get('/report', blockRouter.statusUser, (req,res) => {
      res.render('report/form',{nome:req.session.nome});
  });

  application.get('/admin', blockRouter.statusAdmin, (req, res) => {
      report.exibirDashboard(application, req, res);
  });

  application.get('/admin/statistics', blockRouter.statusAdmin,  (req,res) => {
      res.render('admin/stats')
  });

  application.get('/admin/maps', blockRouter.statusAdmin, (req,res) => {res.render('admin/map')});

  application.get("/admin/escolas", blockRouter.statusAdmin, (req, res) => {
    escolas.renderTodasEscolas(application, req, res);
  });
  application.get(
    "/admin/escolas/form",
    blockRouter.statusAdmin,
    (req, res) => {
      res.render("admin/escola/form");
    }
  );

  application.get('/perfil/user-perfil', blockRouter.statusUser, (req, res) => {
      res.render('perfil/user-perfil', {nome:req.session.nome, email:req.session.email, tipoDired:req.session.tipoDired, escola:req.session.escola})
  });
  application.get("/admin/reports", blockRouter.statusAdmin, (req, res) => {
      report.exibirTodosReports(application, req, res);
  });


  application.get("/perfil/editar", blockRouter.statusUser, (req, res) => {
    res.render("perfil/editar", { nome: req.session.nome });
  });

  application.get("/sobre", (req, res) => {
    res.render("components/sobre");
  });

  application.get(
    "/perfil/alterar-senha",
    blockRouter.statusUser,
    (req, res) => {
      res.render("perfil/alterar-senha", { nome: req.session.nome });
    }
  );

  application.post('/cadastrar-escola',(req,res)=>{
    escolas.salvarEscola(application, req, res);
  });
};
