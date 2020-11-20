/* eslint-disable no-param-reassign */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */

// initial state
const state = {
  list: [],
};
// getters
const getters = {
  get: (state) => state.list,
};

// actions
const actions = {
  setValue({ commit }, object) {
    commit('SET_VALUE', object);
  },
};

// mutations
const mutations = {
  SET_VALUE(state, object) {
    const [key] = Object.keys(object);
    state[key] = object[key];
  },
  UPDATE_PRODUCT(state, object) {
    const index = state.list.findIndex((p) => p.id === object.id);
    state.list[index] = object;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
