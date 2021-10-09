<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formSearchList
          label="查询"
          :api="demoApi"
          v-model="form.value"
          :name.sync="form.name"
          @submit="submit"
          :type="0"
        >
          <template v-slot="item">
            <van-cell
              center
              :title="item.name"
              :value="item.id"
              :label="item.code"
            />
          </template>
        </formSearchList>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import demoApi from "@/api/demo";
import formSearchList from "@/components/base/form/formSearchList";
import { CellGroup, Cell } from "vant";
export default {
  name: "SearchList",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    formSearchList
  },
  data() {
    return {
      form: {
        value: 1,
        name: "描述123"
      },
      demoApi: demoApi.searchList
    };
  },
  created() {},
  computed: {},
  methods: {
    submit(row) {
      this.form.name = row.name || "";
      this.form.value = row.id || "";
    }
  }
};
</script>
<style lang="less" scoped></style>
