import Vue from "vue";
import Router from "vue-router";
// Routes
import paths from "./paths";
function route(path, view, name) {
  return {
    name: name || view,
    path,
    component: resolve => import(`@/views/${view}.vue`).then(resolve)
  };
}
Vue.use(Router);
// Create a new router
const router = new Router({
  mode: "history",
  routes: paths.map(path => route(path.path, path.view, path.name, path.meta)),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
router.beforeEach(async (to, from, next) => {
  next();
});
export default router;
