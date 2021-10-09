<template>
  <van-tabbar
    class="footer-navbar"
    v-if="visible"
    v-model="active"
    @change="navBarChange"
  >
    <template v-for="item in menus">
      <van-tabbar-item
        :key="item.name"
        :name="item.name"
        :icon="item.meta.icon"
        :info="item.name == 'message' && count > 0 ? count : ''"
        >{{ item.meta.title }}</van-tabbar-item
      >
    </template>
  </van-tabbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Tabbar, TabbarItem } from "vant";
import { asyncRoutes } from "@/router/router.config";

export default {
  name: "footerNavBar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: "",
      menus: [],
      visible: true
    };
  },
  computed: {
    ...mapState({
      navActive: state => state.app.navActive,
      count: state => state.user.messageCount
    })
  },
  watch: {
    $route: {
      handler(val) {
        const meta = val.meta;
        const matched = val.matched;
        this.visible = meta && meta.footerNavShow ? true : false;
        let name = "workplace";
        if (matched.length > 1) {
          name = matched[1].name;
        }
        this.active = name;
        this.setNavActive(name);
      },
      immediate: true
    }
  },
  created() {
    const menus = asyncRoutes.find(item => item.path === "/").children;
    this.menus = this.filterMenus(menus);
  },
  methods: {
    ...mapActions(["setNavActive"]),
    navBarChange(value) {
      this.$router.push({
        name: value
      });
    },
    filterMenus(menus) {
      const newMenus = menus.filter(item => {
        if (item.meta && item.meta.footerNavShow) {
          return true;
        } else {
          return false;
        }
      });
      return newMenus;
    }
  }
};
</script>

<style lang="less" scoped>
.footer-navbar {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
</style>
