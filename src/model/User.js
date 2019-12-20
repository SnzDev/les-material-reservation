const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            registrationNumber:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
        },{sequelize});
    }
    static associate(models){
        this.hasMany(models.Rent, {
            foreignKey: 'materialId',
            as: 'material',
        });
    }
}

module.exports = User;