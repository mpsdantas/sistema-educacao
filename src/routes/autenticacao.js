module.exports = application => {
    application.get('/cadastro-usuario', (req, res) => { res.send('Rota funcionando') });
};