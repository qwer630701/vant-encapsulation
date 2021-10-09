<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="item">
        <navbar
          title="标题"
          left-text="返回"
          right-text="按钮"
          :fixed="false"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
          @click-title="onClickTitle"
        >
          <template #left>
            右侧
          </template>
          <template #right>
            右侧
          </template>
        </navbar>
      </div>
      <div class="item">
        <searchNavbar
          title="查询"
          :fixed="false"
          left-arrow
          right-text="按钮"
          placeholder="请输入搜索关键词"
          @click-left="onClickLeft"
          @click-right="onClickRight"
          @click-title="onClickTitle"
          @click="searchClick"
          @search="search"
          @keypress="searchKeypress"
        >
        </searchNavbar>
      </div>
      <div class="item">
        <searchNavbar
          title="查询"
          :fixed="false"
          left-arrow
          right-text="按钮"
          placeholder="只读搜索"
          readonly
          @click="searchClick"
          @search="search"
          @keypress="searchKeypress"
        >
        </searchNavbar>
      </div>
    </div>
  </div>
</template>
<script>
import searchNavbar from "@/components/base/layouts/searchNavbar";

export default {
  name: "BaseNavbar",
  components: {
    searchNavbar
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    onClickLeft() {
      console.log("左");
    },
    onClickTitle() {
      console.log("标题");
    },
    onClickRight() {
      console.log("右");
    },
    searchKeypress(val) {
      console.log("搜索内容改变", val);
    },
    search(val) {
      console.log("搜索", val);
    },
    searchClick() {
      console.log("点击搜索输入框");
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  margin: 10px 0;
  border: 0 solid @lightGray;
  border-width: 1px 0;
}
</style>
