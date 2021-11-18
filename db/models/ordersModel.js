const { Model, DataTypes, Sequelize } = require('sequelize');
const { COSTUMER_TABLE } = require('./costumersModel');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false, //permite falsedad
    autoIncrement: true, //+1
    primaryKey: true, //key primaria
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  costumerId: {
    field: 'costumer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COSTUMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Costumer, {
      as: 'costumer',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order };
