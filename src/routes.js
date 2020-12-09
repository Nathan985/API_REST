const express = require('express');
const routes = express.Router();

const prodcutController = require('./controllers/Productcontroller');

// Rota Default
routes.get('/products', prodcutController.index);
routes.get('/products/:id', prodcutController.show);
routes.post('/products', prodcutController.sotre);
routes.delete('/products/:id', prodcutController.destroy);
routes.patch('/products/:id', prodcutController.update);

module.exports = routes;