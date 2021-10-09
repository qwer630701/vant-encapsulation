<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <dataList class="dataList" :api="demoApi" :params="params">
        <template v-slot="list">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              :key="index"
              center
              :title="item.name"
              :value="item.id"
              :label="item.code"
            />
          </van-cell-group>
        </template>
      </dataList>
    </div>
  </div>
</template>
<script>
import demoApi from "@/api/demo";
import dataList from "@/components/base/dataList";
import { CellGroup, Cell } from "vant";
export default {
  name: "BaseDataList",
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    dataList
  },
  data() {
    return {
      params: { text: "dataList" },
      // demoApi: demoApi.searchList
      demoApi: demoApi.searchList
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
