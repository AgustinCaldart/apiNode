const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter.js');
const costumersRouter = require('./costumersRouter');
const ordersRouter = require('./ordersRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); //path global
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/costumers', costumersRouter);
  router.use('/orders', ordersRouter);
}
module.exports = routerApi;
