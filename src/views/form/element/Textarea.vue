<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="form.message"
          rows="1"
          autosize
          label="自适应"
          type="textarea"
          placeholder="请输入留言"
        />
        <van-field
          v-model="form.message1"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          show-word-limit
          placeholder="请输入留言"
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { CellGroup, Field, Button } from "vant";
export default {
  name: "FormTextarea",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field
  },
  data() {
    return {
      form: {
        message: "",
        message1: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
