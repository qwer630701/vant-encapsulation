<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formSwitch label="开关" v-model="form.switch" required></formSwitch>
      </van-cell-group>
      <div class="button-fluid">
        <van-button block type="primary" @click="change">开关</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import formSwitch from "@/components/base/form/formSwitch";
import { CellGroup, Cell, Button } from "vant";
export default {
  name: "FormSwitch",
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button,
    formSwitch
  },
  data() {
    return {
      form: {
        switch: true
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    change() {
      this.form.switch = !this.form.switch;
    }
  }
};
</script>
<style lang="less" scoped></style>
