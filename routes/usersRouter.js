const express = require('express'); //usamos express

const router = express.Router();
//parametros de tipo query
router.get('/', (req, res) => {
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
module.exports = router;
