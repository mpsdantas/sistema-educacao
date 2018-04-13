//const mongoose = require('mongoose');
//const Usuario = mongoose.model('Usuarios');
module.exports = application => {
    application.get('/', (req,res) => {res.render('index')});
    application.get('/report', (req,res) => {res.render('report/form')});
    application.get('/admin', (req,res) => {res.render('admin/dashboard')});
};