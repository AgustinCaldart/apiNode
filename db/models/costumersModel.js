const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./usersModel');

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
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Costumer extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }
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
