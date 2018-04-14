//  Importando o módulo do express.
const express = require('express');

//  Variaveis de ambiente.
const env = require('dotenv');

//  Importando o módulo do consign.
const consign =  require('consign');

//  Importando o bodyParser.
const bodyParser = require('body-parser');

//  Importando o módulo express-session.
const expressSession = require('express-session');

//  Importando o módulo do express-validation.
const expressValidator = require('express-validator');

//  Importando o módulo do mongoose.
const mongoose = require('mongoose');

//  Importando o módulo do path.
const path = require('path');

//  Iniciando objeto do express.
const app = express();

//  Setando as variáveis 'view engine' e 'view' do express.
app.set('view engine', 'ejs');
app.set('views','./src/views/');

//  Configurando o middleware do express.static.
app.use(express.static(path.join(__dirname, '../src/public/')));
//  Configurando o middleware do body-parser.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//  Configurando o middleware do express-validator.
app.use(expressValidator());

var GeoJSON = require('geojson')

//  Extraindo variaveis de ambiente.
env.config({ path: 'variables.env' });

//  Configurando o middleware do express-session.
app.use(expressSession({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}));

//  Auto-load
consign()
	.include('src/models')
	.then('src/controllers')
	.then('src/routes')
	.into(app);

//  Conecta com o banco de dados e lida com problemas de conexão
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // → Queremos que o mongoose utilize promises ES6
mongoose.connection.on('error',err => {
	console.log(`🙅 🚫 → ${err.message}`);
});

//  Exportando o objeto app.
module.exports = app;














