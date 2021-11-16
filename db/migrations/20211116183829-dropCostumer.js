'use strict';

const { COSTUMER_TABLE } = require('../models/costumersModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(COSTUMER_TABLE);
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
