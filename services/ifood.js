const axios = require('axios');

const { SEARCH, SEARCH_HOME, CATEGORY_PAGE, MERCHANT_CATALOG } = require('../constants/urls');

const ifoodInstance = axios.create({
  baseURL: process.env.IFOOD_API,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const ifoodStoresInstance = axios.create({
  baseURL: process.env.IFOOD_WS_API,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    access_key: process.env.IFOOD_WS_ACCESS_KEY,
    secret_key: process.env.IFOOD_WS_SECRET_KEY,
  },
});

const defaultHeaders = {
  'supported-headers': ['OPERATION_HEADER'],
  'supported-cards': [
    'MERCHANT_LIST',
    'CATALOG_ITEM_LIST',
    'CATALOG_ITEM_LIST_V2',
    'CATALOG_ITEM_LIST_V3',
    'FEATURED_MERCHANT_LIST',
    'CATALOG_ITEM_CAROUSEL',
    'CATALOG_ITEM_CAROUSEL_V2',
    'CATALOG_ITEM_CAROUSEL_V3',
    'BIG_BANNER_CAROUSEL',
    'IMAGE_BANNER',
    'MERCHANT_LIST_WITH_ITEMS_CAROUSEL',
    'SMALL_BANNER_CAROUSEL',
    'NEXT_CONTENT',
    'MERCHANT_CAROUSEL',
    'MERCHANT_TILE_CAROUSEL',
    'SIMPLE_MERCHANT_CAROUSEL',
    'INFO_CARD',
    'MERCHANT_LIST_V2',
    'ROUND_IMAGE_CAROUSEL',
    'BANNER_GRID',
    'MEDIUM_IMAGE_BANNER',
    'MEDIUM_BANNER_CAROUSEL',
    'RELATED_SEARCH_CAROUSEL',
    'ADS_BANNER',
  ],
  'supported-actions': [
    'catalog-item',
    'merchant',
    'page',
    'card-content',
    'last-restaurants',
    'webmiddleware',
    'reorder',
    'search',
    'groceries',
    'home-tab',
  ],
};

const postSearchHome = query =>
  ifoodInstance.post(SEARCH_HOME, defaultHeaders, { params: { ...query, channel: 'IFOOD' } });

const postSearch = query =>
  ifoodInstance.post(SEARCH, defaultHeaders, { params: { ...query, channel: 'IFOOD' } });

const postCategoryPage = ({ categoryId, ...query }) => {
  const url = `${CATEGORY_PAGE}/${categoryId}`;
  return ifoodInstance.post(url, defaultHeaders, {
    params: { ...query, channel: 'IFOOD' },
  });
};

const getMerchantCatalog = ({ merchantId, ...query }) =>
  ifoodStoresInstance.get(`${MERCHANT_CATALOG}/${merchantId}/catalog`, {
    params: { ...query, channel: 'IFOOD' },
  });

module.exports = {
  postSearch,
  postSearchHome,
  postCategoryPage,
  getMerchantCatalog,
};
