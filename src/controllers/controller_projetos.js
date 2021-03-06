var sequelize = require('../models/database');
var projetos = require('../models/projetos');

const controllers = {};

sequelize.sync();

controllers.projeto_create = async (req, res) => {
    const {nomeprojeto , datainicio, datafim } = req.body;
    let data;
    const response = await sequelize.sync().then(function () {
        projetos.create({
            NomeProjeto: nomeprojeto,
            DataInicio: datainicio,
            DataFim: datafim,

        });
        const data = projetos.findAll();
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data: data, message: "tudo beleza" });
}

controllers.projetos_list = async (req, res) => {
    
    const data = await projetos.findAll({ 
    })
        .then(function (data) { 
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

controllers.projeto_detail = async (req, res) => {
    const { id } = req.params;
    const data = await projetos.findAll({
        where: { ID_Projeto: id }
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ sucess: true, data: data });
}




module.exports = controllers;