<template>
  <div style="width:100vw;height:100vh;">
    <navbar></navbar>
    <div class="container"></div>
  </div>
</template>
<script>
export default {
  name: "ShopOrderList",
  components: {},
  data() {
    return {
      params: {}
    };
  },
  created() {
    this.params = {
      reserveDateStart: "2020-07-01",
      reserveDateEnd: "2022-07-01",
      orderStatus: "1",
      restaurantId: "841251172772741120"
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
