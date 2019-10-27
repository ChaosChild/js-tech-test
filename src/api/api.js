import baseAxiosClient from '.';

/**
 * An API.
 *
 *  getRateCurrencies
 *    A function responsible for retrieving the rate currencies.
 */
export default {
  getRateCurrencies: async () => baseAxiosClient().get('/latest?base=USD'),
};
