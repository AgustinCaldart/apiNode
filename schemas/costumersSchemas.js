const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
//const image = Joi.string().uri();

const createCostumerSchema = Joi.object({
  name: name.required(),
  //image: image.required(),
});

const updateCostumerSchema = Joi.object({
  name: name,
  //image: image,
});

const getCostumerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCostumerSchema,
  updateCostumerSchema,
  getCostumerSchema,
};
