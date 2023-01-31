const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: '*',
  })
);

const { getCert, getKey } = require('./services/s3');
const {
  postSearch,
  postSearchHome,
  postCategoryPage,
  getMerchantCatalog,
} = require('./services/ifood');

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

app.post('/search/home', (req, res) => {
  postSearchHome(req.query)
    .then(({ data }) => {
      res.status(201);
      res.send(data);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

app.post('/category', (req, res) => {
  postCategoryPage(req.query)
    .then(({ data }) => {
      res.status(201);
      res.send(data);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

app.get('/merchant', (req, res) => {
  getMerchantCatalog(req.query)
    .then(({ data }) => {
      res.status(200);
      res.send(data);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});

app.get('/', (req, res) => {
  res.send(`OK - ${process.env.IFOOD_API}`);
});

const port = process.env.PORT || process.env.SERVER_PORT;

if (process.env.MODE === 'DEV') {
  http.createServer(app).listen(port, () => {
    console.log(`[HTTP] Running at port ${port}`);
  });
} else {
  let cert;
  let key;

  (async () => {
    cert = await getCert();
    key = await getKey();
  })();

  https.createServer({ key, cert }, app).listen(port, () => {
    console.log(`[HTTPS] Running at port ${port}`);
  });
}
