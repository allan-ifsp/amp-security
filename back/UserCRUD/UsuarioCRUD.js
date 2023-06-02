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
            res.redirect("https://localhost:3000/?a")
        }else{
            console.log("Senha errada")
        }
    }
    // const usuarios = await Usuario.findAll();
    // // console.log("usuario req login:", req.body.login )
    // // console.log("usuario req senha:", md5(req.body.senha) )
    // usuarios.forEach(usuario => {
    //     // console.log("usuario bd login:", usuario.dataValues.login)
    //     // console.log("usuario bd senha:", usuario.dataValues.senha)
    //     if(usuario.dataValues.login == req.body.login){
    //         if(usuario.dataValues.senha == md5(req.body.senha)){
    //             console.log("Usuario encontrado")
    //             return true
    //         }else{
    //             console.log("Senha errada")
    //         }
    //     }else{
    //         console.log("usuario n encontrado")
    //     }
    //     return false;
    // })

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