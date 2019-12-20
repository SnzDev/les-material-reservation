const {Model, DataTypes} = require('sequelize');

class Material extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            amount: DataTypes.INTEGER,
            photo: DataTypes.STRING,
        },{ sequelize });
    }
}
module.exports = Material;