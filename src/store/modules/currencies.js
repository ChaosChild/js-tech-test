import api from '../../api/api';

// initial state
const state = {
  currencies: [{ text: 'Select currency', value: null }],
  rateCurrencies: {},
};

// actions
const actions = {
  // Loading the currencies.
  async loadCurrencies({ commit }) {
    const resullts = await api.getRateCurrencies();
    const currencies = Object.keys(resullts.data.rates);
    commit('setCurrencies', [...state.currencies, ...currencies]);
  },
  // Loading the rate currencies.
  async loadRateCurrencies({ commit }) {
    const resullts = await api.getRateCurrencies();
    const rateCurrencies = resullts.data.rates;
    commit('setRateCurrencies', rateCurrencies);
  },
};

// mutations
const mutations = {
  // eslint-disable-next-line
  setCurrencies(state, currencies) {
    state.currencies = currencies;
  },
  // eslint-disable-next-line
  setRateCurrencies(state, rateCurrencies) {
    state.rateCurrencies = rateCurrencies;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
