const router = require("express").Router();
const Usuario = require('../model/entidade/Usuario');
const md5 = require("md5");
router.post('/login', async (req, res) => {
    await Usuario.sync();
    console.log(`procurando usuario no banco`);
    const usuarios = await Usuario.findAll();
    usuarios.forEach(usuario => {
        if(usuario.login === req.body.login){
            if(usuario.senha === md5(req.body.senha)){
                console.log("Usuario encontrado")
                return true
            }else{
                console.log("Senha errada")
            }
        }else{
            console.log("Usuario nao encontrado")
        }
        return false;
    })

    // var senha = md5(req.body.senha)
    // try{
    //     const user = await Usuario.create({
    //             login: req.body.login,
    //             senha: senha
    //         });
    //     res.json(user);
    // }catch (e) {
    //     res.status("400").json({Erro: "Login nao disponivel"})
    // }
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