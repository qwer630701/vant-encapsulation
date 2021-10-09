import Vue from "vue";
import Router from "vue-router";
import config from "@/config/baseConfig";
import { constantRoutes, asyncRoutes } from "./router.config";

Vue.use(Router);
let routers = config.permission.router
  ? constantRoutes
  : constantRoutes.concat(asyncRoutes);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
});
