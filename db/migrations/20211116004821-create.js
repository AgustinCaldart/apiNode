'use strict';

const { UserSchema, USER_TABLE } = require('./../models/usersModel');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/productsModel');
const {
  CategorySchema,
  CATEGORY_TABLE,
} = require('./../models/categoriesModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  },
};
