const express = require('express');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

const { postSearch } = require('./services/ifood');

const ingredients = [
  {
    id: '1',
    item: 'Bacon',
  },
  {
    id: '2',
    item: 'Eggs',
  },
  {
    id: '3',
    item: 'Milk',
  },
  {
    id: '4',
    item: 'Butter',
  },
];

app.get('/ingredients', (req, res) => {
  res.send(ingredients);
});

app.get('/search', (req, res) => {
  postSearch({
    alias: 'CMS_RESULTS_ONE_PAGE',
    latitude: -23.194406196479143,
    longitude: -46.907479115793215,
    term: 'pizza',
    size: 20,
  })
    .then(({ data }) => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.listen(6069);
