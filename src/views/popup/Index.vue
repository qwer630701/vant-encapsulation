<template>
  <div>
    <navbar></navbar>
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
      <van-cell-group :title="resultList.title">
        <van-cell
          v-for="(item, index) in resultList.list"
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
  name: "OtherIndex",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      list: [
        { title: "passwordNumber 输入密码", to: "PopupPasswordNumber" },
        { title: "passwordInput 输入密码input", to: "PopupPasswordInput" },
        { title: "popupSelect 单选", to: "PopupSelect" },
        { title: "popupMultiple 多选", to: "PopupMultiple" }
      ],
      resultList: {
        title: "result 操作提示",
        list: [
          {
            title: "success 成功",
            to: "BaseResult",
            query: { state: "success" }
          },
          {
            title: "wait 等待",
            to: "BaseResult",
            query: { state: "wait" }
          },
          {
            title: "error 错误",
            to: "BaseResult",
            query: { state: "error" }
          },
          {
            title: "warning 警告",
            to: "BaseResult",
            query: { state: "warning" }
          },
          {
            title: "question 问题",
            to: "BaseResult",
            query: { state: "question" }
          }
        ]
      }
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
