const express = require('express');
const routes = express.Router();

const notesController = require('../controllers/notesController');

routes.post('/', notesController.createdNote);

routes.get('/', notesController.getAllNotes);

routes.patch('/:id', notesController.updateNotes);

routes.delete('/:id', notesController.deleteNote);

module.exports  = routes;