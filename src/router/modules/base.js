import { RouteView } from "@/layouts";
export default {
  path: "/base",
  name: "Base",
  redirect: "/base/index",
  component: RouteView,
  meta: {
    title: "基础组件"
  },
  children: [
    {
      path: "/base/test",
      name: "test",
      meta: { title: "测试专用" },
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/demo/Test.vue")
    },
    {
      path: "/base/copyTest",
      name: "copyTest",
      meta: { title: "测试复制" },
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/demo/CopyTest.vue")
    },
    {
      path: "/base/changePwd",
      name: "ChangePwd",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/ChangePwd.vue"),
      meta: {
        title: "修改密码"
      }
    },
    {
      path: "/base/dataList",
      name: "BaseDataList",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/DataList.vue"),
      meta: {
        title: "上拉加载下拉刷新"
      }
    },
    {
      path: "/base/tabDataList",
      name: "BaseTabDataList",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/TabDataList.vue"),
      meta: {
        title: "dataList tab带搜索示例"
      }
    },
    {
      path: "/base/noData",
      name: "BaseNoData",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/NoData.vue"),
      meta: {
        title: "暂无数据"
      }
    },
    {
      path: "/base/payPrice",
      name: "BasePayPrice",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/PayPrice.vue"),
      meta: {
        title: "payPrice 输入金额"
      }
    },
    {
      path: "/base/cell",
      name: "BaseCell",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/Cell.vue"),
      meta: {
        title: "cell 单元格"
      }
    },
    {
      path: "/base/swiper",
      name: "BaseSwiper",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/Swiper.vue"),
      meta: {
        title: "swiper 轮播图"
      }
    },
    {
      path: "/base/navToolbar",
      name: "BaseNavToolbar",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/NavToolbar.vue"),
      meta: {
        title: "navToolbar 导航工具栏"
      }
    },
    {
      path: "/base/navbar",
      name: "BaseNavbar",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/Navbar.vue"),
      meta: {
        title: "navbar 导航栏"
      }
    },
    {
      path: "/base/result",
      name: "BaseResult",
      component: () =>
        import(/* webpackChunkName: "base" */ "@/views/base/element/Result.vue"),
      meta: {
        title: "操作提示"
      }
    }
  ]
};
