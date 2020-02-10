import Vue from 'vue'
import store from "@/store/store";
import ActionTypes from "@/store/ActionTypes";

const MenuService = {
  openMenu() {
    store.dispatch(ActionTypes.OPEN_MENU, true);
  },
  closeMenu() {
    store.dispatch(ActionTypes.OPEN_MENU, false);
  },
  openFilterMenu() {
    console.log('open filter')
    store.dispatch(ActionTypes.OPEN_FILTER_MENU, true)
  },
  closeFilterMenu() {
    store.dispatch(ActionTypes.OPEN_FILTER_MENU, false)
  }
};
Vue.prototype.$MenuService = MenuService;
export default MenuService;
