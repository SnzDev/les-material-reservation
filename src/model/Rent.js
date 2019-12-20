const { Model, DataTypes } = require('sequelize');

class Rent extends Model {
    static init(sequelize){
        super.init({
            dateStart: DataTypes.DATE,
            dateStop: DataTypes.DATE,
        },{ sequelize });
    }
    static associate(models){
        this.belongsTo(models.User,{
            foreignKey: 'userId',
            as: 'user',
        });
        this.belongsTo(models.Material,{
            foreignKey: 'materialId',
            as: 'material',
        });
    }
}

module.exports = Rent;