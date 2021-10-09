<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <payPrice label="请输入" v-model="value"></payPrice>
      {{ value }}
    </div>
  </div>
</template>
<script>
import payPrice from "@/components/base/payPrice";
import { Button } from "vant";
export default {
  name: "BasePayPrice",
  components: {
    [Button.name]: Button,
    payPrice
  },
  data() {
    return {
      value: ""
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
