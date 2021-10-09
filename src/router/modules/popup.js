import { RouteView } from "@/layouts";
export default {
  path: "/popup",
  name: "Popup",
  redirect: "/popup/index",
  component: RouteView,
  meta: {
    title: "弹窗组件",
    footerNavShow: true
  },
  children: [
    {
      path: "/popup/index",
      name: "PopupIndex",
      component: () =>
        import(/* webpackChunkName: "popup" */ "@/views/popup/Index.vue"),
      meta: {
        title: "弹窗组件",
        footerNavShow: true
      }
    },
    {
      path: "/popup/passwordNumber",
      name: "PopupPasswordNumber",
      component: () =>
        import(/* webpackChunkName: "popup" */ "@/views/popup/element/PasswordNumber.vue"),
      meta: {
        title: "passwordNumber 输入密码"
      }
    },
    {
      path: "/popup/passwordInput",
      name: "PopupPasswordInput",
      component: () =>
        import(/* webpackChunkName: "popup" */ "@/views/popup/element/PasswordInput.vue"),
      meta: {
        title: "passwordInput 输入密码input"
      }
    },
    {
      path: "/popup/popupSelect",
      name: "PopupSelect",
      component: () =>
        import(/* webpackChunkName: "popup" */ "@/views/popup/element/PopupSelect.vue"),
      meta: {
        title: "popupSelect 单选"
      }
    },
    {
      path: "/popup/popupMultiple",
      name: "PopupMultiple",
      component: () =>
        import(/* webpackChunkName: "popup" */ "@/views/popup/element/PopupMultiple.vue"),
      meta: {
        title: "popupMultiple 多选"
      }
    }
  ]
};
