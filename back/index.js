const express = require('express')
const {Json} = require("sequelize/lib/utils");
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const Usuario = require('./model/entidade/Usuario');

const port = 9853


// app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true })); //usar formularios tem que usar urlenconded

app.use("/usuario", require("./UserCRUD/UsuarioCRUD"));

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
});