const router = require("express").Router();
const Usuario = require('../model/entidade/Usuario');

router.post('/add', async (req, res) => {
    await Usuario.sync();
    console.log(`inserindo usuario no banco`);

//     const user = await Usuario.create({
//         login: req.body.login,
//         senha: req.body.senha
//     })
    console.log(req.body.login)
    console.log(req.body.senha)
    res.json(user)
});

module.exports = router;