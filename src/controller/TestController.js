const Rent = require('../model/Rent');

module.exports = {
    async index(req,res){
        const file = req.file.path;
        console.log(file);

        res.json({file});
    },
    async show(req,res){
        const response = await Rent.findAll({
            include: ['user','material']
        });
        console.log(response.dataStop);    

        const data1 = new Date().toISOString().replace('T', ' ').substr(0, 19)
        const data2 = response.dateStop;

        if(data1 > data2){
            res.send("Maior");
        }else{
            res.send("Menor");
        }
    }
}