const User = require('../model/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req,res){
        const {name, registrationNumber, email, password} = req.body;

        try{   
            const hashedPassword = await bcrypt.hash(password, 10, function(err, hash) {
                // Store hash in database
                const response = User.create({name,registrationNumber,email,password: hashedPassword});
                return res.json(response);
              });            
        }catch{
            return res.status(500).send('Something wrong right here!');
        }

        
        
        
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