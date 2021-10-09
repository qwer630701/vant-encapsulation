<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="button-fluid">
        <van-button block type="primary" @click="show">点击</van-button>
      </div>
      <popupSelect v-model="visible" @confirm="confirm" :columns="columns" />
    </div>
  </div>
</template>
<script>
import popupSelect from "@/components/base/popup/popupSelect";
import { Button } from "vant";
export default {
  name: "PopupPasswordInput",
  components: {
    [Button.name]: Button,
    popupSelect
  },
  data() {
    return {
      visible: false,
      columns: [
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 3, name: "江苏" }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    show() {
      this.visible = true;
    },
    confirm(row) {
      this.visible = false;
      console.log(row);
    }
  }
};
</script>
<style lang="less" scoped></style>
