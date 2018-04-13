module.exports = application => {
    application.get('/cadastro-usuario', (req, res) => { 
        res.render('autenticacao/cadastro-usuario')
    });
    application.post('/cadastro-usuario', (req, res) => {
        console.log(req.body);
    });
};