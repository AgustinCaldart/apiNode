const express = require('express'); //usamos express
const faker = require('faker'); //usamos faker

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { limit } = req.query;
  for (let index = 0; index < (limit || 10); index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products); //trabajamos con json porque somos api
}); // los get genericos son array

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//get de parametro con :
router.get('/:id', (req, res) => {
  const { id } = req.params; //recojemos el id de params
  res.json({
    id,
    name: 'Product 1',
    price: 1000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
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
