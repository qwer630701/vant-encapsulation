<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formMultiple
          label="多选"
          v-model="form.formMultiple"
          :columns="data.formMultiple"
        ></formMultiple>
        <formMultiple
          label="带确认"
          v-model="form.formMultiple"
          :columns="data.formMultiple"
          isConfirm
        ></formMultiple>
      </van-cell-group>
      <div class="button-fluid">
        <van-button block type="primary">{{ form.formMultiple }}</van-button>
        <van-button block type="primary" @click="change">改变</van-button>
        <van-button block type="primary" @click="changeArray"
          >改变数组</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import formMultiple from "@/components/base/form/formMultiple";
import { CellGroup, Button } from "vant";
export default {
  name: "FormMultiple",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formMultiple
  },
  data() {
    return {
      form: {
        formMultiple: []
      },
      data: {
        formMultiple: [
          { id: 1, name: "广西" },
          { id: 2, name: "浙江" },
          { id: 3, name: "江苏" },
          { id: 4, name: "福建" }
        ]
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    change() {
      this.form.formMultiple = [1, 5, 6, 7, 8];
    },
    changeArray() {
      this.data.formMultiple = [
        { id: 1, name: "广西1" },
        { id: 2, name: "浙江2" },
        { id: 3, name: "江苏3" },
        { id: 4, name: "福建4" },
        { id: 5, name: "浙江5" },
        { id: 6, name: "广东6" },
        { id: 7, name: "台湾7" }
      ];
    }
  }
};
</script>
<style lang="less" scoped></style>
