<template>
  <van-pull-refresh v-model="refreshLoading" @refresh="reload">
    <van-list
      v-if="show"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="load"
    >
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <slot name="item" :item="item" :index="index" v-if="type"></slot>
        <slot name="item" v-bind="item" v-else></slot>
      </div>
    </van-list>
  </van-pull-refresh>
</template>
<script>
import { List, PullRefresh } from "vant";
import cloneDeep from "lodash/cloneDeep";
import { findData } from "@/utils/common";

export default {
  name: "dataList",
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  props: {
    type: {
      type: Number,
      default: 0
    },
    api: {
      type: Function,
      default: null
    },
    data: {
      type: Array,
      default: () => []
    },
    autoLoad: {
      type: Boolean,
      default: false
    },
    params: {
      type: Object,
      default: () => {}
    },
    dataType: {
      type: String,
      default: ""
    },
    pageField: {
      type: String,
      default: "pageIndex"
    },
    sizeField: {
      type: String,
      default: "pageSize"
    },
    dataField: {
      type: String,
      default: "data.datas"
    },
    totalField: {
      type: String,
      default: "data.total"
    },
    pageStartIndex: {
      type: Number,
      default: 0
    },
    loadAfterCallBack: {
      type: Function,
      default: null
    },
    finishedText: {
      type: String,
      default: "没有更多了"
    },
    errorText: {
      type: String,
      default: "请求失败，点击重新加载"
    }
  },
  data() {
    return {
      list: [],
      show: true,
      refreshLoading: false,
      loading: false,
      finished: false,
      error: false,
      tabActive: 0,
      pageIndex: 0
    };
  },
  watch: {
    params() {
      this.reload();
    },
    data() {
      this.load();
    }
  },
  computed: {},
  created() {
    this.pageIndex = this.pageStartIndex;
    if (this.autoLoad) {
      this.loading = false;
      this.finished = true;
    }
    if (this.data && this.data.length) {
      this.load();
    }
  },
  methods: {
    load() {
      let { pageField, sizeField, pageIndex } = this;
      let base = {};
      base[pageField] = pageIndex;
      base[sizeField] = 10;
      let json = { ...base, ...this.params };
      let params = null;
      if (this.dataType == "formdata") {
        var formData = new FormData();
        for (var key in this.params) {
          formData.append(key, json[key]);
        }
        params = formData;
      } else {
        params = json;
      }
      if (this.api) {
        this.api(params)
          .then(res => {
            let data = findData(res, this.dataField);
            if (this.loadAfterCallBack) {
              const callbackRes = this.loadAfterCallBack(res);
              if (callbackRes) {
                data = callbackRes;
              }
            }
            this.pageIndex = json[pageField] + 1;

            this.list = this.list.concat(data);
            this.loading = false;
            if (this.list.length >= findData(res, this.totalField)) {
              this.finished = true;
            }
            this.refreshLoading = false;
          })
          .catch(() => {
            this.loading = false;
            this.error = true;
          });
      } else if (this.data && this.data.length) {
        this.list = this.data;
        this.loading = false;
        this.finished = true;
      }
    },
    reload() {
      this.list = [];
      this.pageIndex = 0;
      this.finished = false;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    changeRow(index, callback) {
      this.list[index] = callback(this.list[index]);
    },
    changeAll(option) {
      let list = cloneDeep(this.list);
      for (var i in option) {
        list.map(p => (p[i] = option[i]));
      }
      this.list = list;
    }
  }
};
</script>

<style lang="less" scoped></style>
