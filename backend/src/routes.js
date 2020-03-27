//armazena as rotas da aplicação
const express = require('express');
const OngController = require('./Controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota para criar uma sessão de login
routes.post('/sessions',sessionController.create);

//Rotas de selecionar dados no banco na ong 
routes.get('/ongs',OngController.index);
//Rota de inserir dados na ong
routes.post('/ongs',OngController.create);

//Rota para selecionar os incidentes
routes.get('/profile',profileController.index);

//Rota que lista os incidentes
routes.get('/incidents',incidentsController.index);
//Rota para inserir dados em incidents
routes.post('/incidents',incidentsController.create);
//Delete o incidente pelo ID
routes.delete('/incidents/:id',incidentsController.delete);

module.exports = routes;