const Rent = require('../model/Rent');

module.exports = {
    async store(req,res){
        const { dateStart, dateStop, userId, materialId } = req.body;
        const response = await Rent.create({dateStart, dateStop, userId, materialId});
        console.log(response);
        res.json(response);
    },
    async index(req,res){
        const response = await Rent.findAll({
            include: ['user','material']
        });
        console.log(response);

        res.json(response);
    },
    async show(req,res){
        const {id} = req.body;

        const response = await Rent.findByPk(id,{
            include: ['user','material']
        });
        console.log(response);

        res.json(response);
    },
}