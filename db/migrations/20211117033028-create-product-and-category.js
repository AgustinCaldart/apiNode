'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/categoriesModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productsModel');
const { COSTUMER_TABLE, CostumerSchema } = require('../models/costumersModel');
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
