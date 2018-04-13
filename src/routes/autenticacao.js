module.exports = application => {
    application.get('/cadastro-usuario', (req, res) => { 
        res.render('autenticacao/cadastro-usuario')
    });
};