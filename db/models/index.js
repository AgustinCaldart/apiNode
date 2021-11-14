const { User, UserSchema } = require('./usersModel');
const { Product, ProductSchema } = require('./productsModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
