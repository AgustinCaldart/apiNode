'use strict';

const { CATEGORY_TABLE } = require('../models/categoriesModel');
const { PRODUCT_TABLE } = require('../models/productsModel');
const { COSTUMER_TABLE } = require('../models/costumersModel');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
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
