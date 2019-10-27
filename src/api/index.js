import axios from 'axios';

/**
 * An axios base client responsible for the HTTP requests.
 */
const baseAxiosClient = () => ({
  client: axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    crossdomain: true,
  }),

  handleError(error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  },

  get(url) {
    return this.client.get(url).catch(this.handleError);
  },

  post(url, data) {
    return this.client.post(url, data).catch(this.handleError);
  },
});

export default baseAxiosClient;
