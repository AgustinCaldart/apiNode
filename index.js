const express = require('express'); //usamos express
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
}); // rutamos

app.get('/nueva-ruta', (req, res) => {
  res.send('nuevo endpoint');
}); // creamos nueva ruta

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]); //trabajamos con json porque somos api
}); // los get genericos son array

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
