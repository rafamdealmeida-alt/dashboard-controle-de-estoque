const router = require('express').Router();

let products = [];

router.get('/', (req,res)=>res.json(products));

router.post('/', (req,res)=>{
  products.push(req.body);
  res.json({ok:true, products});
});

module.exports = router;