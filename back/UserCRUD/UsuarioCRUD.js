const router = require("express").Router();
const Usuario = require('../model/entidade/Usuario');
const md5 = require("md5");
router.post('/add', async (req, res) => {
    await Usuario.sync();
    console.log(`inserindo usuario no banco`);
        var senha = md5(req.body.senha)
    try{
        const user = await Usuario.create({
                login: req.body.login,
                senha: senha
            });
        res.json(user);
    }catch (e) {
        res.status("400").json({Erro: "Login nao disponivel"})
    }
});

module.exports = router;