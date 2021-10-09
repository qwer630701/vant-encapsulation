<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <noData />
    </div>
  </div>
</template>
<script>
import noData from "@/components/base/noData";
export default {
  name: "BaseNoData",
  components: {
    noData
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
