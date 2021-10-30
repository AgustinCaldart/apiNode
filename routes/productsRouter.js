const express = require('express'); //usamos express

const ProductsServices = require('./../services/productService');
const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, res) => {
  const products = await service.find();

  res.json(products); //trabajamos con json porque somos api
}); // los get genericos son array

//get de parametro con :
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params; //recojemos el id de params
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//update parcial
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
//delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
