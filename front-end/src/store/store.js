import Vue from "vue";
import Vuex from "vuex";
import ActionTypes from "@/store/ActionTypes";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    menuIsOpen: false,
    menuFilterIsOpen: false
  },
  mutations: {
    [ActionTypes.OPEN_MENU]: (state, payload) => {
      state.menuIsOpen = payload;
    },
    [ActionTypes.OPEN_FILTER_MENU]: (state, payload) => {
      state.menuFilterIsOpen = payload
    }
  },
  actions: {
    [ActionTypes.OPEN_MENU]: (context, payload) => {
      context.commit(ActionTypes.OPEN_MENU, payload);
    },
    [ActionTypes.OPEN_FILTER_MENU]: (context, payload) => {
      context.commit(ActionTypes.OPEN_FILTER_MENU, payload);
    }
  }
});
export default store;
