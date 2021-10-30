const express = require('express'); //usamos express

const ProductsServices = require('./../services/productService');
const router = express.Router();
const service = new ProductsServices();

router.get('/', (req, res) => {
  const products = service.find();

  res.json(products); //trabajamos con json porque somos api
}); // los get genericos son array

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//get de parametro con :
router.get('/:id', (req, res) => {
  const { id } = req.params; //recojemos el id de params
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

//update parcial
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});
//delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  });
});

module.exports = router;
