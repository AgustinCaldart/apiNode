'use strict';

const {
  CostumerSchema,
  COSTUMER_TABLE,
} = require('./../models/costumersModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COSTUMER_TABLE, CostumerSchema);
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
