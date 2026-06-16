const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('WMS API OK'));

// Rotas
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

// Local development server
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Backend rodando na porta ${port}`));
}

module.exports = app;