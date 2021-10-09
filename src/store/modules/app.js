import { asyncRoutes, constantRoutes } from "@/router/router.config";

function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i].code);
      if (flag) {
        return permission[i];
      }
    }
    return false;
  }
  return true;
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    const res = hasPermission(roles, route);
    if (res === true) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    } else if (res !== false) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, res.children);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const app = {
  state: {
    menus: [],
    routers: [],
    addRouters: [],
    navActive: "workplace"
  },
  mutations: {
    SET_MENUS: (state, routers) => {
      state.menus = routers;
      state.routers = constantRoutes.concat(routers);
    },
    SET_THEME: (state, data) => {
      state.theme = data;
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
    },
    SET_NAVACTIVE: (state, name) => {
      state.navActive = name;
    }
  },
  actions: {
    generateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // const { roles } = data;
        const accessedRouters = filterAsyncRouter(asyncRoutes, data);
        commit("SET_ROUTERS", accessedRouters);
        resolve();
      });
    },
    setAddRouters({ commit }, data) {
      commit("SET_ROUTERS", data);
    },
    setMenus({ commit }, data) {
      commit("SET_MENUS", data);
    },
    setTheme({ commit }, data) {
      commit("SET_THEME", data);
    },
    setNavActive({ commit }, name) {
      commit("SET_NAVACTIVE", name);
    }
  }
};

export default app;
