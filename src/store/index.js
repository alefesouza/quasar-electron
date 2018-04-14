import Vue from 'vue';
import Vuex from 'vuex';

import meetup from './meetup';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    meetup,
  },
});

export default store;
