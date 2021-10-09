<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formAutoComplete
          v-model="value"
          :data="data"
          label="自动补全"
          @select="onSelect"
        >
          <template v-slot="item">
            <p>{{ item.name }}</p>
          </template>
        </formAutoComplete>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import formAutoComplete from "@/components/base/form/formAutoComplete";
import { CellGroup, Button } from "vant";
export default {
  name: "FormAutoComplete",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formAutoComplete
  },
  data() {
    return {
      value: "",
      data: [
        { id: 0, name: "123" },
        { id: 1, name: "广西" },
        { id: 2, name: "1235" },
        { id: 3, name: "桂林" },
        { id: 4, name: "杭州" },
        { id: 5, name: "东煌" }
      ]
    };
  },
  created() {
    this.column = this.data;
  },
  computed: {},
  methods: {
    onSelect(row) {
      this.value = row.name;
    }
  }
};
</script>
<style lang="less" scoped></style>
