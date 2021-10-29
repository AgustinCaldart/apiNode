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
  res.json({
    name: 'Product 1',
    price: 1000,
  }); //trabajamos con json porque somos api
}); // creamos nueva ruta

app.listen(port, () => {
  console.log('esta corriendo' + port);
}); //prendemos server
