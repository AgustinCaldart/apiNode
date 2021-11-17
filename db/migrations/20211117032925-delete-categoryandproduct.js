'use strict';

const { CATEGORY_TABLE } = require('../models/categoriesModel');
const { PRODUCT_TABLE } = require('../models/productsModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
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
