import { RouteView } from "@/layouts";
import form from "./modules/form";
import popup from "./modules/popup";
import base from "./modules/base";

const Maps = [
  {
    path: "/workplace",
    name: "Workplace",
    redirect: "/base/index",
    component: RouteView,
    meta: {
      title: "工作台",
      icon: "wap-home-o",
      footerNavShow: true
    },
    children: [
      {
        path: "/base/index",
        name: "MyIndex",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/base/Index.vue"),
        meta: {
          title: "工作台",
          footerNavShow: true,
          headerNavHidden: true
        }
      }
    ]
  },
  {
    path: "/blank",
    name: "Blank",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/Blank.vue"),
    meta: {
      title: ""
    }
  }
];
const modulesMap = Maps.concat(form, popup, base, [
  {
    path: "/demo",
    name: "Demo",
    component: () => import(/* webpackChunkName: "index" */ "@/views/Demo.vue"),
    meta: { title: "测试" }
  }
]);

// export const RouterMap = modulesMap;

export const asyncRoutes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/layouts/BasicLayout.vue"),
    meta: { title: "首页" },
    redirect: "/workplace",
    children: modulesMap
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "index" */ "@/views/404.vue"),
    meta: { title: "404" }
  }
];

export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/weChat",
    name: "WeChat",
    meta: { title: "微信授权登录" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/auth/WeChat.vue")
  }
];
