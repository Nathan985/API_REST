const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes.get('/', userController.getUsers);
routes.get('/:id', userController.getUser);
routes.post('/', userController.createUser);
routes.patch('/:id', userController.update);
routes.delete('/:id', userController.deleteUser);


module.exports = routes