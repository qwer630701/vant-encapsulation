<template>
  <div>
    <navbar right-text="退出" @click-right="logout"></navbar>
    <div class="container">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          is-link
          :title="item.title"
          @click="routeTo(item)"
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Cell, CellGroup } from "vant";
export default {
  name: "BaseIndex",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      list: [
        { title: "测试", to: "Demo" },
        { title: "测试专用", to: "test" },
        { title: "测试复制", to: "copyTest" },
        { title: "dataList 上拉加载下拉刷新", to: "BaseDataList" },
        { title: "dataList tab带搜索示例", to: "BaseTabDataList" },
        { title: "noData 暂无数据", to: "BaseNoData" },
        { title: "payPrice 输入金额", to: "BasePayPrice" },
        { title: "cell 单元格", to: "BaseCell" },
        { title: "swiper 轮播图", to: "BaseSwiper" },
        { title: "navToolbar 导航工具栏", to: "BaseNavToolbar" },
        { title: "navbar 导航栏", to: "BaseNavbar" }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    routeTo(item) {
      if (item.query) {
        this.$router.push({ name: item.to, query: item.query });
      } else {
        this.$router.push({ name: item.to });
      }
    },
    logout() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  padding: 10px 15px;
  color: @green;
}
</style>
