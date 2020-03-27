const express = require('express');

const EstabelecimentoController = require('../src/controllers/EstabelecimentoController');
const ItemController = require('../src/controllers/ItemController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create ); 

routes.get('/estabelecimentos', EstabelecimentoController.index );
routes.post('/estabelecimentos', EstabelecimentoController.create ); 

routes.get('/profiles', ProfileController.index ); 

routes.get('/itens', ItemController.index ); 
routes.post('/itens', ItemController.create ); 
routes.delete('/itens/:id', ItemController.delete ); 




module.exports = routes;
