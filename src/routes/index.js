//const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuarios');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
};