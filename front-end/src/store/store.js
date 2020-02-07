import Vue from "vue";
import Vuex from "vuex";
import ActionTypes from "@/store/ActionTypes";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    menuIsOpen: false
  },
  mutations: {
    [ActionTypes.OPEN_MENU]: (state, payload) => {
      state.menuIsOpen = payload;
    }
  },
  actions: {
    [ActionTypes.OPEN_MENU]: (context, payload) => {
      context.commit(ActionTypes.OPEN_MENU, payload);
    }
  }
});
export default store;
