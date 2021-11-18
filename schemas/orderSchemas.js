const Joi = require('joi');

const id = Joi.number().integer();
const costumerId = Joi.number().integer();

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

module.exports = { getOrderSchema, createOrderSchema, updateOrderSchema };
