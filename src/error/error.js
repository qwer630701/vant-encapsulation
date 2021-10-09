import Vue from "vue";
import App from "./App.vue";
import router from "@/router/";
import store from "@/store/";
import configs from "@/config/baseConfig";
import { Toast, Notify } from "vant";
import "@/assets/css/common.less";
import "@/assets/css/custom.less";
import "@/utils/rem";

import Storage from "vue-ls";
import navbar from "@/components/base/layouts/navbar/install.js";
import "@/permission";
import bootstrap from "@/utils/bootstrap";
import * as common from "@/utils/common.js";
Vue.use(navbar);

Vue.config.productionTip = false;
Vue.prototype.$config = configs;
Vue.prototype.$common = common;
const storageOptions = {
  namespace: "mobile_", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};

Vue.use(Storage, storageOptions);
Vue.use(Toast, Notify);

new Vue({
  router,
  store,
  created() {
    bootstrap();
  },
  render: h => h(App)
}).$mount("#app");
