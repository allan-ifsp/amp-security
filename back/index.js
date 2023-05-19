const express = require('express')
const {Json} = require("sequelize/lib/utils");
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const port = 9853

// const Usuario = require('./model/entidade/Usuario');

// app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); //usar formularios tem que usar urlenconded
const md5 = require("md5");

app.post('/teste', (req, res) => {
    var login = req.body.login;
    var senha = md5(req.body.senha);
    console.log({login});
    console.log({senha});
    res.send('Hello mundo');
});

app.get('/teste', (req, res) => {
    console.log("Teste funcionou!!!");
    res.status(200).send('funcionou!!!!');
})

app.use("/usuario", require("./UserCRUD/UsuarioCRUD"));

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
});