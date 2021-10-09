<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="button-fluid">
        <van-button block type="primary" @click="show">点击</van-button>
      </div>
      <passwordNumber v-model="visible" @confirm="confirm" />
    </div>
  </div>
</template>
<script>
import passwordNumber from "@/components/base/popup/passwordNumber";
import { Button, Toast } from "vant";
export default {
  name: "PopupPasswordNumber",
  components: {
    [Button.name]: Button,
    passwordNumber
  },
  data() {
    return {
      value: "",
      visible: false
    };
  },
  created() {},
  computed: {},
  methods: {
    show() {
      this.visible = true;
    },
    confirm(val) {
      Toast("当前输入内容:" + val);
    }
  }
};
</script>
<style lang="less" scoped></style>
