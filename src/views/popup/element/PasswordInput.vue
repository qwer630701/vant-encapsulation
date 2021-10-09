<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="button-fluid">
        <van-button block type="primary" @click="show">点击</van-button>
      </div>
      <passwordInput v-model="visible" :price="price" @confirm="confirm" />
    </div>
  </div>
</template>
<script>
import passwordInput from "@/components/base/popup/passwordInput";
import { Button, Toast } from "vant";
export default {
  name: "PopupPasswordInput",
  components: {
    [Button.name]: Button,
    passwordInput
  },
  data() {
    return {
      value: "",
      visible: false,
      price: "500"
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
