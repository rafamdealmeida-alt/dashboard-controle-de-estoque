const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let products = [];

app.get('/', (req, res) => res.json({ message: 'WMS API OK' }));

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  if (req.body && req.body.name) {
    products.push(req.body);
  }
  res.json({ ok: true, products });
});

module.exports = app;


