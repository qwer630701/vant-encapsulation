<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-tabs v-model="tabIndex" @change="tabChange">
        <van-tab title="标签 1" name="0"></van-tab>
        <van-tab title="标签 2" name="1"></van-tab>
      </van-tabs>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="search"
        shape="round"
      >
        <template #action>
          <div @click="search">搜索</div>
        </template>
      </van-search>
      <div style="height:calc(100% - 102px);overflow:auto">
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
  </div>
</template>
<script>
import demoApi from "@/api/demo";
import dataList from "@/components/base/dataList";
import { CellGroup, Cell, Search, Tab, Tabs } from "vant";

export default {
  name: "BaseDataList",
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    dataList
  },
  data() {
    return {
      tabIndex: 0,
      value: "",
      params: { name: "" },
      demoApi: demoApi.searchList,
      toastIndex: 0
    };
  },
  computed: {},
  created() {},
  methods: {
    search() {
      this.params = {
        name: this.value + this.tabIndex
      };
    },
    tabChange() {
      this.params = {
        name: this.value + this.tabIndex
      };
    }
  }
};
</script>
<style lang="less" scoped></style>
