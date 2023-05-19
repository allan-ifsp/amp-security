const express = require('express')
const app = express()

const port = 9853

// const Usuario = require('./model/entidade/Usuario');

// app.use(express.json());
app.use(express.urlencoded({ extended: true })); //usar formularios tem que usar urlenconded

app.get('/', (req, res) => {
    res.send('Hello Mundo!');

});

app.get('/teste', (req, res) => {
    console.log("Teste funcionou!!!");
    res.status(200).send('funcionou!!!!');
})

app.use("/usuario", require("./UserCRUD/UsuarioCRUD"));

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
});