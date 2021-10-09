<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <cellGroup title="标题">
        <cell title="单元格" value="内容" />
        <cell
          title="单元格"
          value="内容"
          label="这是描述"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <cell title="单元格" value="内容" is-link />
      </cellGroup>
      <cellGroup title="没有边框" :border="false">
        <cell title="单元格" value="内容" />
        <cell
          title="单元格"
          value="内容"
          label="这是描述"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <cell title="单元格" value="内容" is-link />
      </cellGroup>
    </div>
  </div>
</template>
<script>
import { cellGroup, cell } from "@/components/base/cell";

// import { Cell, CellGroup } from "vant";
export default {
  name: "BaseCell",
  components: {
    cellGroup,
    cell
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
