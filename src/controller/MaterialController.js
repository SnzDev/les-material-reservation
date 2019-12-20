const Material = require('../model/Material');

module.exports = {
    async store(req,res){
        const { name, amount, photo } = req.body;
        const response = await Material.create({name,amount,photo});
        console.log(response);
        res.json(response);
    },
    async index(req,res){
        const response = await Material.findAll();
        console.log(response);
        res.json(response);
    },
    async show(req,res){
        const { id } = req.body;
        const response = await Material.findByPk(id);
        console.log(response);
        res.json(response);
    },
};