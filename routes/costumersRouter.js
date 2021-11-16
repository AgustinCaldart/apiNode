const express = require('express');

const CostumerService = require('../services/customersService');
const validatorHandler = require('../middleware/validatorHandler');
const {
  updateCostumerSchema,
  createCostumerSchema,
  getCostumerSchema,
} = require('../schemas/costumersSchemas');

const router = express.Router();
const service = new CostumerService();

router.get('/', async (req, res, next) => {
  try {
    const costumer = await service.find();
    res.json(costumer);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCostumerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const costumer = await service.findOne(id);
      res.json(costumer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCostumerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCostumer = await service.create(body);
      res.status(201).json(newCostumer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCostumerSchema, 'params'),
  validatorHandler(updateCostumerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const costumer = await service.update(id, body);
      res.json(costumer);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  validatorHandler(getCostumerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
