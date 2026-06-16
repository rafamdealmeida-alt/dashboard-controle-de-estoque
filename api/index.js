const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('WMS API OK'));

// Importar rotas
const productsRouter = require('../backend/src/routes/products');
app.use('/products', productsRouter);

// Exportar para Vercel Serverless Functions
module.exports = (req, res) => {
  return app(req, res);
};
