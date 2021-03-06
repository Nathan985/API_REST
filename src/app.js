//Importando express e morgan
const express = require('express');

//Salvando o metodo express na constante Morgan
const app = express();

//Importando rotas
const routeUser = require('./routes/userRoute')
const routeNotes = require('./routes/notesRoute')

//Utilizando o express para usar o body das requisições (JSON)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Chamando o CRUD da rota de ADMs da MedWork
app.use('/user/', routeUser);
app.use('/notes/', routeNotes);

//Configurando o CORS para uso externo
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(OK).send({})
    }

    next()
})

//ERRO DE ROTA - Rota especificada não encontrada
app.use((req, res, next) => {
    const erro = new Error('Não Encontrado')
    erro.status = 404;
    next(erro)
})

//Envia a Mensagem de erro como um JSON
app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;