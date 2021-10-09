<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="button-fluid">
        <van-button block type="primary" @click="show">点击</van-button>
        <van-button block @click="change">改变</van-button>
      </div>
      <popupMultiple
        v-model="visible"
        @confirm="confirm"
        :columns="columns"
        :keys.sync="keys"
        :max="2"
      />
      {{ keys }}
    </div>
  </div>
</template>
<script>
import popupMultiple from "@/components/base/popup/popupMultiple";
import { Button } from "vant";
export default {
  name: "PopupMultiple",
  components: {
    [Button.name]: Button,
    popupMultiple
  },
  data() {
    return {
      visible: false,
      columns: [
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 1, name: "广西" },
        { id: 2, name: "浙江" },
        { id: 3, name: "江苏" }
      ],
      keys: [3]
    };
  },
  created() {},
  computed: {},
  methods: {
    show() {
      this.visible = true;
    },
    change() {
      this.keys = [1];
    },
    confirm(row) {
      this.visible = false;
      console.log(row);
    }
  }
};
</script>
<style lang="less" scoped></style>
