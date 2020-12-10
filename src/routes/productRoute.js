const express = require('express');
const routes = express.Router();

const prodcutController = require('../controllers/Productcontroller');

// Rota Default
routes.get('/', prodcutController.getProducts);
routes.get('/:id', prodcutController.selectProduct);
routes.post('/', prodcutController.createProduct);
routes.delete('/:id', prodcutController.deleteProduct);
routes.patch('/:id', prodcutController.updateProduct);

module.exports = routes;