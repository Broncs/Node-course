const express = require('express');
const routes = express.Router();

routes.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send('Please provide credentials');
});

module.exports = routes;
