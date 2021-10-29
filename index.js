const express = require('express'); //usamos express
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
}); // rutamos

app.listen(port, () => {
  console.log('esta corriendo' + port);
}); //prendemos server
