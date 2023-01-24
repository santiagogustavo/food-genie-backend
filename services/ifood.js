const axios = require('axios');

const { SEARCH } = require('../constants/urls');

const ifoodInstance = axios.create({
  baseURL: process.env.IFOOD_API,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const postSearch = query =>
  ifoodInstance.post(
    SEARCH,
    {
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
    },
    { params: { ...query, channel: 'IFOOD' } }
  );

module.exports = {
  postSearch,
};
