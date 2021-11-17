const { createUserSchema, updateUserSchema } = require('./userSchemas');
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string();
const phone = Joi.string();

const createCostumerSchema = Joi.object({
  name: name.required(),
  lastName: lastName,
  phone: phone.required(),
  user: createUserSchema,
});

const updateCostumerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: updateUserSchema,
});

const getCostumerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCostumerSchema,
  updateCostumerSchema,
  getCostumerSchema,
};
