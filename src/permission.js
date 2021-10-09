import router from "./router";
import store from "./store/";
import { ls } from "@/utils//cache";
import { USERINFO } from "@/store/mutation-types";
// import config from "@/config/baseConfig";

const whiteList = ["Login", "WeChat"]; //路由白名单

router.beforeEach((to, from, next) => {
  const userInfo = ls.get(USERINFO);
  if (!(userInfo && userInfo.token) && !whiteList.includes(to.name)) {
    store.dispatch("logout");
  } else {
    next();
  }

  // if (!token && !whiteList.includes(to.name)) {
  //   // 未登录并 不在路由白名单 跳转至登录页
  //   store.dispatch("logout");
  // } else if (
  //   store.getters.menus.length === 0 &&
  //   !whiteList.includes(to.name) &&
  //   config.permission &&
  //   config.permission.router
  // ) {
  //   const user = ls.get(USERINFO);
  //   const roles = user.menus;
  //   store.dispatch("generateRoutes", roles).then(() => {
  //     // 根据roles权限生成可访问的路由表
  //     store.dispatch("setMenus", store.getters.addRouters);
  //     router.addRoutes(store.getters.addRouters);
  //     const redirect = decodeURIComponent(from.query.redirect || to.path);
  //     if (to.path === redirect) {
  //       next({ ...to, replace: true });
  //     } else {
  //       next({ path: redirect });
  //     }
  //   });
  // } else {
  //   next();
  //   // NProgress.done();
  // }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

router.afterEach(() => {});

// router.prototype.goBack = function() {
//   // this.isBack = true
//   // window.history.go(-1)
// };
