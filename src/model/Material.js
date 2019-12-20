const {Model, DataTypes} = require('sequelize');

class Material extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            amount: DataTypes.INTEGER,
            photo: DataTypes.STRING,
        },{ sequelize });
    }
    static associate(models){
        this.hasMany(models.Rent, {
            foreignKey: 'userId',
            as: 'user',
        });
    }
}
module.exports = Material;