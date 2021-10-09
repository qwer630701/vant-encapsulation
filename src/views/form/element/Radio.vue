<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <formRadio
        v-model="value"
        :columns="column"
        @change="change"
        :disabled="isDisabled"
        :readonly="isReadonly"
      ></formRadio>

      <div class="button-fluid">
        <van-button type="primary" block @click="changeData">改变</van-button>
      </div>
      <div class="button-fluid">
        <van-button type="primary" block @click="isDisabled = !isDisabled">{{
          isDisabled ? "启用" : "禁用"
        }}</van-button>
      </div>
      <div class="button-fluid">
        <van-button type="primary" block @click="isReadonly = !isReadonly"
          >只读 {{ isReadonly }}</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import formRadio from "@/components/base/form/formRadio";
import { Button } from "vant";
export default {
  name: "FormRadio",
  components: {
    [Button.name]: Button,
    formRadio
  },
  data() {
    return {
      mode: 0,
      isReadonly: false,
      isDisabled: false,
      value: 1,
      column: [],
      data: [
        {
          id: 0,
          name: "选项1"
        },
        {
          id: 1,
          name: "选项2"
        }
      ],
      data1: [
        {
          id: 2,
          name: "选项123"
        },
        {
          id: 3,
          name: "选项321"
        },
        {
          id: 4,
          name: "法国",
          disabled: true
        }
      ]
    };
  },
  created() {
    this.column = this.data;
  },
  computed: {},
  methods: {
    changeData() {
      if (this.mode == 1) {
        this.mode = 0;
        this.column = this.data;
      } else {
        this.mode = 1;
        this.column = this.data1;
      }
    },
    change(p) {
      this.$toast(JSON.stringify(p));
    }
  }
};
</script>
<style lang="less" scoped></style>
