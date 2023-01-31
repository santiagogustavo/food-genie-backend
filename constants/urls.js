// page: number
// size: number
const ORDERS = '/v4/customers/me/orders?page={page}&size={size}';

// alias: CMS_RESULTS_MERCHANTS, CMS_RESULTS_ONE_PAGE
// latitude: number
// longitude: number
// channel: IFOOD
// term: string
// size: number
// categories: string (categories from filter)
const SEARCH = '/v2/cardstack/search/results';

// alias: CMS_SEARCH_HOME
// latitude: number
// longitude: number
// channel: IFOOD
// size: number
const SEARCH_HOME = '/v2/cardstack/search/home';

// categoryId: string
// latitude: number
// longitude: number
// channel: IFOOD
const CATEGORY_PAGE = '/v1/page';

// merchantId: string
// latitude: number
// longitude: number
const MERCHANT_CATALOG = '/v1/merchants';

const CERT_URL = '/cert.pem';
const KEY_URL = '/key.pem';

module.exports = {
  ORDERS,
  SEARCH,
  SEARCH_HOME,
  CATEGORY_PAGE,
  MERCHANT_CATALOG,
  CERT_URL,
  KEY_URL,
};
