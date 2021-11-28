const express = require('express'); //usamos express
const passport = require('passport');

const OrderService = require('../services/ordersService');

const router = express.Router();
const service = new OrderService();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const orders = await service.findByUser(user.sub);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  //validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = {
        userId: req.user.sub,
      };
      const order = await service.createFromProfile(body);
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
