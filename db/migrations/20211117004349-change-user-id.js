'use strict';

const { DataTypes } = require('sequelize');
const { COSTUMER_TABLE } = require('../models/costumersModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(COSTUMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
