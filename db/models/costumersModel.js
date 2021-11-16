const { Model, DataTypes } = require('sequelize');

const COSTUMER_TABLE = 'costumer';

const CostumerSchema = {
  id: {
    allowNull: false, //permite falsedad
    autoIncrement: true, //+1
    primaryKey: true, //key primaria
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Costumer extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: COSTUMER_TABLE,
      modelName: 'Costumer',
      timestamps: false,
    };
  }
}

module.exports = { COSTUMER_TABLE, CostumerSchema, Costumer };
