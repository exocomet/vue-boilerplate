import Vue from 'vue'
import Vuex from 'vuex'
import * as mts from './mutation-types'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    value: undefined,
  },
  getters: {
    getValue: state => {
      return state.value;
    },
  },
  actions: {
    setValue ({commit}, payload) {
      this.commit(mts.SET_VALUE, payload);
    },

  },
  mutations: {
    [mts.SET_VALUE] (state, value) {
      state.value = value * 1;
    }
  }
});

export default store;