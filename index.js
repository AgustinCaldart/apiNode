const express = require('express'); //usamos express
const routerApi = require('./routes'); //usamos express

const app = express();
const port = 3000;

app.use(express.json()); //para recibir infomarcion de tipo json

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
}); // rutamos

app.get('/nueva-ruta', (req, res) => {
  res.send('nuevo endpoint');
}); // creamos nueva ruta

routerApi(app);

app.listen(port, () => {
  console.log('esta corriendo' + port);
}); //prendemos server
