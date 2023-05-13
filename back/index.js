const express = require('express')
const app = express()

const port = 9853

app.get('/', (req, res) => {
    res.send('Hello World!')
})




app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})