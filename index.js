const express = require('express'); //usamos express
const faker = require('faker'); //usamos faker
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
}); // rutamos

app.get('/nueva-ruta', (req, res) => {
  res.send('nuevo endpoint');
}); // creamos nueva ruta
//usando faker
app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.send('Soy un filter');
});

//get de parametro con :
app.get('/products/:id', (req, res) => {
  const { id } = req.params; //recojemos el id de params
  res.json({
    id,
    name: 'Product 1',
    price: 1000,
  });
});
//get + de un parametro
app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});
//parametros de tipo query
app.get('/users', (req, res) => {
  //al ser opcionales no se ponen en la ruta
  const { limit, offset } = req.query;
  if (limit && offset) {
    //clausula if ya que son opcionales
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.listen(port, () => {
  console.log('esta corriendo' + port);
}); //prendemos server
