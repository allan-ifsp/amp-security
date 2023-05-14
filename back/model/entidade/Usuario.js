const Sequelize = require("sequelize");
const banco = require('../../db');

const Usuario = banco.define("usuario", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    login:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Usuario;