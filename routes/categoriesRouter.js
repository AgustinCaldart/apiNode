const express = require('express'); //usamos express

const router = express.Router();
//get + de un parametro
router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});

module.exports = router;
