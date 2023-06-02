const router = require("express").Router();
const Usuario = require('../model/entidade/Usuario');
const md5 = require("md5");
router.post('/login', async (req, res) => {
    await Usuario.sync();
    console.log(`procurando usuario no banco`);

    const usuario = await  Usuario.findOne({where: {login: req.body.login}})
    if (usuario){
        if(usuario.dataValues.senha == md5(req.body.senha)){
            console.log("Usuario encontrado")
            res.redirect("http://localhost:3000/paginalogado")
        }else{
            console.log("Senha incorreta")
            res.status(401).send("Senha incorreta")
        }
    }else{
        console.log("Usuario nao encontrado")
        res.status(404).send("Usuario nao encontrado")
    }
});

router.post('/add', async (req, res) => {
    await Usuario.sync();
    console.log(`adicionando usuario no banco`);
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