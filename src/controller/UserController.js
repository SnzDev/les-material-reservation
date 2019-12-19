const User = require('../model/User');

module.exports = {
    async store(req,res){
        const {name, registrationNumber, email, password} = req.body;
        //console.log(name,registrationNumber,email,password);
        const response = await User.create({name,registrationNumber,email,password});
        //console.log(response);
        
        return res.json(response);
    },
    async index(req,res){
        const response = await User.findAll();
        return res.json(response);
    },
    async show(req,res){
        const { id } = req.body;
        const response = await User.findByPk(id);

        return res.json(response);
    }
}