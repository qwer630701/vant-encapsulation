<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <result :state="state" :desc="desc" />
    </div>
  </div>
</template>
<script>
import result from "@/components/base/result";
export default {
  name: "BaseNoData",
  components: {
    result
  },
  data() {
    return {
      state: "success",
      desc: "这是一串描述文字"
    };
  },
  computed: {},
  created() {
    this.state = this.$route.query.state;
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
