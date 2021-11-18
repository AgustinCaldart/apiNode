const { User, UserSchema } = require('./usersModel');
const { Product, ProductSchema } = require('./productsModel');
const { Category, CategorySchema } = require('./categoriesModel');
const { Costumer, CostumerSchema } = require('./costumersModel');
const { Order, OrderSchema } = require('./ordersModel');
const { OrderProduct, OrderProductSchema } = require('./orderProductModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Costumer.init(CostumerSchema, Costumer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Costumer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
