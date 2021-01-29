//Métodos HTTP: GET, POST, PUT, DELETE
//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação, ...) Utilizado no GET
//Route Params: request.params (Identificar um recurso na alteração ou na remoção) Utilizado no PUT e DELETE
//Body: Utilizado no POST e PUT. request.body(Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);//Retirando o servidor http de dentro do express

setupWebsocket(server);

mongoose.connect('mongodb+srv://fabiomiranda:fabio@cluster0.ooifs.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);