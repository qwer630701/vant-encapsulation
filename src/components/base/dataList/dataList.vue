<script>
import { List, PullRefresh } from "vant";
import noData from "@/components/base/noData";
import { debounce } from "lodash";
import { findData } from "@/utils/common";

export default {
  name: "dataList",
  components: {
    noData,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => {}
    },
    autoLoad: {
      type: Boolean,
      default: false
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
    },
    refresh: {
      type: Boolean,
      default: true
    },
    isLoadingKey: {
      type: String,
      default: "ISLOADING"
    }
  },
  data() {
    return {
      index: 0,
      list: [],
      show: true,
      isLoading: false,
      refreshLoading: false,
      loading: false,
      finished: false,
      error: false,
      tabActive: 0,
      pageIndex: 0,
      empty: false,
      param: {}
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
    let { data } = this;

    this.pageIndex = this.pageStartIndex;
    if (this.autoLoad) {
      this.loading = false;
      this.finished = true;
    }
    if (data && data.length) {
      this.load();
    }
  },
  methods: {
    reload: debounce(function() {
      this.empty = false;

      this.list = [];
      this.pageIndex = 0;
      this.finished = false;
      this.loading = false;
      this.error = false;
      // this.load();
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }, 100),
    reFetch(params) {
      this.param = params;
      this.reload();
    },
    load() {
      let { pageField, sizeField, pageIndex, api } = this;
      if (this.isLoading && pageIndex != 0) return;

      let base = {};
      base[pageField] = pageIndex;
      base[sizeField] = 10;
      if (api) {
        let { index, list, dataType, dataField, totalField } = this;
        let json = { ...base, ...this.params, ...this.param };
        let params = null;
        if (dataType == "formdata") {
          var formData = new FormData();
          for (var key in json) {
            formData.append(key, json[key]);
          }
          params = formData;
        } else {
          params = json;
        }
        this.isLoading = true;
        this.index = ++index;
        params[this.isLoadingKey] = false;
        api(params)
          .then(res => {
            if (this.index != index) {
              this.error = false;
              this.isLoading = false;
              return false;
            }
            let data = dataField ? findData(res, dataField) : res;
            if (this.loadAfterCallBack) {
              const callbackRes = this.loadAfterCallBack(res);
              if (callbackRes) {
                data = callbackRes;
              }
            }
            let pageIndex = json[pageField];
            if (data.length == 0 && this.pageStartIndex == pageIndex) {
              this.empty = true;
            } else {
              this.pageIndex = pageIndex + 1;

              this.list = list.concat(data);
              if (this.list.length >= findData(res, totalField)) {
                this.finished = true;
              }
            }
            this.isLoading = false;
            this.loading = false;
            this.refreshLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
            this.loading = false;
            this.error = true;
          });
      } else if (this.data && this.data.length) {
        this.empty = false;
        this.list = this.data;
        this.loading = false;
        this.finished = true;
      } else {
        this.empty = true;
      }
    },
    deleteRow(index) {
      this.list.splice(index, 1);
    },
    changeRow(index, callback) {
      this.list[index] = callback(this.list[index]);
    },
    changeAll(option) {
      let list = this.list;
      for (var i in option) {
        list.map(p => (p[i] = option[i]));
      }
      this.list = list;
    },
    listRender() {
      if (this.empty) {
        return <noData />;
      } else if (this.show) {
        const {
          list,
          loading,
          load,
          finished,
          finishedText,
          error,
          errorText,
          $scopedSlots: slots
        } = this;
        const option = {
          props: {
            loading,
            finished,
            finishedText,
            error,
            errorText
          },
          on: {
            input: val => {
              this.loading = val;
            },
            "update:error": val => {
              this.error = val;
            },
            load
          }
        };
        return <van-list {...option}>{slots.default(list)}</van-list>;
      }
    }
  },
  render() {
    if (this.refresh) {
      const { refreshLoading, reload } = this;
      const option = {
        props: {
          value: refreshLoading
        },
        on: {
          input: val => {
            this.refreshLoading = val;
          },
          refresh: reload
        }
      };
      return (
        <van-pull-refresh {...option}>{this.listRender()}</van-pull-refresh>
      );
    } else {
      return this.listRender();
    }
  }
};
</script>

<style lang="less" scoped></style>
