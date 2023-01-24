const axios = require('axios');

const { CERT_URL, KEY_URL } = require('../constants/urls');

const s3Instance = axios.create({
  baseURL: process.env.S3_BUCKET_URL,
  timeout: 10000,
});

const getCert = () => s3Instance.get(CERT_URL);
const getKey = () => s3Instance.get(KEY_URL);

module.exports = {
  getCert,
  getKey,
};
