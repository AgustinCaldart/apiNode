const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users'; //Es buena practica definer nombre de tabla

const UserSchema = {
  id: {
    allowNull: false, //permite falsedad
    autoIncrement: true, //+1
    primaryKey: true, //key primaria
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  //Gracias a la extencion tenemos atributos
  static associate() {
    //static no se necesita declarar el objeto para cceder el metod
    //associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
