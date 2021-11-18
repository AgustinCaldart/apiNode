const Joi = require('joi');

const id = Joi.number().integer();
const costumerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer(1);

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  costumerId: costumerId.required(),
});

const updateOrderSchema = Joi.object({
  id: id,
  costumerId: costumerId,
});
const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

module.exports = {
  getOrderSchema,
  createOrderSchema,
  updateOrderSchema,
  addItemSchema,
};
