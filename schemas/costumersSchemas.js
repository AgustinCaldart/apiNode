const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();

const createCostumerSchema = Joi.object({
  name: name.required(),
  lastName: lastName,
  phone: phone.required(),
  userId: userId.required(),
});

const updateCostumerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCostumerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCostumerSchema,
  updateCostumerSchema,
  getCostumerSchema,
};
