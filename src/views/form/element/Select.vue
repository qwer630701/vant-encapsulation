<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formSelect
          label="单选"
          v-model="form.formSelect"
          :columns="data.formSelect"
        ></formSelect>
      </van-cell-group>
      <div class="button-fluid">
        <van-button block type="primary" @click="change">变为广西</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import formSelect from "@/components/base/form/formSelect";
import { CellGroup, Button } from "vant";
export default {
  name: "FormSelect",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formSelect
  },
  data() {
    return {
      form: {
        formSelect: 3
      },
      data: {
        formSelect: [
          { id: 1, name: "广西" },
          { id: 2, name: "浙江" },
          { id: 3, name: "江苏" },
          { id: 4, name: "东江" },
          { id: 5, name: "湛江" },
          { id: 6, name: "茂名" }
        ]
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    change() {
      this.form.formSelect = 1;
    }
  }
};
</script>
<style lang="less" scoped></style>
