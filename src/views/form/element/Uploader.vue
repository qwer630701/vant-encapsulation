<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <uploader
        v-model="value"
        :columns="column"
        @change="change"
        :disabled="isDisabled"
        :readonly="isReadonly"
      />
    </div>
  </div>
</template>
<script>
import uploader from "@/components/base/form/uploader";
export default {
  name: "Uploader",
  components: {
    uploader
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
