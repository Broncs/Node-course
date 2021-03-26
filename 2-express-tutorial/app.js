const express = require('express');
const app = express();

const { products } = require('./data');

// app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('<h1> Home page </h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => Number(productID) === product.id
  );

  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  return res.json(singleProduct);
});

app.get('/api/b1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.send(sortedProducts);
});

app.listen(5000, () => {
  console.log('the server is running on port 5000');
});
