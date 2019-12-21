const User = require('../model/User');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req,res){
        const {emailNumber, password} = req.body;

        const response = await User.findOne({
            where:Sequelize.or(
            {email: emailNumber},
            {registrationNumber: emailNumber}
            )});

        bcrypt.compare(password, response.password, function(err, res2) {
            if(res2 && response) {
             // Passwords match
             return res.json(response);
            
            } else {
             // Passwords don't match
             return res.status(412).send("Passwords don't match");
            } 
          });

    }
}