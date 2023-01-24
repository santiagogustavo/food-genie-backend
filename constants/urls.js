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

module.exports = {
  ORDERS,
  SEARCH,
};
