import Vue from 'vue';
import Vuex from 'vuex';
import currencies from './modules/currencies';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currencies,
  },
});
