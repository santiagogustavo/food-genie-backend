const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

const { postSearch } = require('./services/ifood');

app.post('/search', (req, res) => {
  postSearch(req.query)
    .then(({ data }) => {
      res.status(201);
      res.send(data);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

app.listen(process.env.SERVER_PORT);
