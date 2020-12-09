// import de Depêndencias
const express = require('express');
const mogoose =  require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir')

// Inicializando o App
const app = express();
app.use(cors());
app.use(express.json());

//Iniciando o DataBase (MongoDB)
mogoose.connect('mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser:  true,
        useUnifiedTopology: true
    }
)
// Chamada de Model's
requireDir('./src/models/');

//Chamada rota Produtos
const Product = mogoose.model('Product');

app.use('/api', require('./src/routes'))

//Ouvindo a Porta 3001
app.listen(3001);