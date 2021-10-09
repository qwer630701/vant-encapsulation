<template>
  <div class="page">
    <div
      class="page-body scroll-hidden"
      :style="{ height: footerNavVisible ? 'calc(100% - 50px)' : '100%' }"
    >
      <transition name="page-transition">
        <!-- <keep-alive :include="['serveIndex', 'hospitalIndex', 'userIndex']"> -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <footerNavbar></footerNavbar>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { Toast, Icon } from "vant";
import footerNavbar from "@/components/base/layouts/footerNavbar";
Vue.use(Toast);
export default {
  name: "BasicLayout",
  components: {
    footerNavbar,
    [Icon.name]: Icon
  },
  data() {
    return {
      toastIndex: 0,
      footerNavVisible: false
    };
  },
  watch: {
    $route: {
      handler(val) {
        const meta = val.meta;
        this.footerNavVisible = meta && meta.footerNavShow ? true : false;
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.info
    })
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.page {
  width: 100vw;
  height: 100vh;
}

.page-body {
  width: 100vw;
  height: 100vh;
  > :first-child {
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }
}
.page-transition-enter {
  transform: translateX(40%);
  opacity: 0;
}

.page-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.page-transition-enter-active {
  transition: ease 0.2s;
  display: inline-block;
}
</style>
