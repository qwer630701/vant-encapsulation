<template>
  <div>
    <van-field
      readonly
      :label="label"
      :required="required"
      :inputAlign="inputAlign"
      :placeholder="placeholder"
      :rightIcon="readonly ? '' : 'arrow'"
      v-model="name"
      @click="popupShow"
    />
    <van-popup
      closeable
      v-model="visible"
      position="bottom"
      :style="{ height: height }"
      :getContainer="getContainer"
    >
      <div class="popupContent">
        <van-button type="danger" size="mini" @click="clear" class="clearBtn"
          >清除</van-button
        >
        <van-search
          :placeholder="placeholder"
          v-model="searchValue"
          @search="search"
          class="search"
          show-action
        >
          <template #action>
            <div @click="search" class="searchBtn">{{ searchBtnText }}</div>
          </template>
        </van-search>
        <dataList
          class="dataList"
          :api="api"
          :type="type"
          :params="params"
          :loadAfterCallBack="searchAfterCallback"
        >
          <template v-slot:item="{ item, index }" v-if="type">
            <div @click="submit(item)">
              <slot name="item" :item="item" :index="index"></slot>
            </div>
          </template>
          <template v-slot:item="item" v-else>
            <div @click="submit(item)">
              <slot name="item" v-bind="item"></slot>
            </div>
          </template>
        </dataList>
      </div>
    </van-popup>
  </div>
</template>

<script>
import dataList from "@/components/base/dataList";
import { Field, Popup, Icon, Search, Button } from "vant";
export default {
  name: "formSearchList",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [Search.name]: Search,
    dataList
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: Number,
      default: 0
    },
    api: {
      type: Function,
      default: () => {}
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: ""
    },
    searchBtnText: {
      type: String,
      default: "查询"
    },
    height: {
      type: String,
      default: "65%"
    },
    searchValueField: {
      type: String,
      default: "name"
    },
    searchBeforeCallback: {
      type: Function,
      default: null
    },
    searchAfterCallback: {
      type: Function,
      default: null
    },
    submitBeforeCallback: {
      type: Function,
      default: null
    },
    getContainer: {
      type: String,
      default: "#app"
    }
  },
  data() {
    return {
      params: {},
      visible: false,
      searchValue: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    popupShow() {
      if (!this.readonly) this.visible = true;
    },
    search() {
      let { searchValue, searchValueField, searchBeforeCallback } = this;
      let params = {};
      params[searchValueField] = searchValue;
      if (searchBeforeCallback) {
        params = searchBeforeCallback(params);
      }
      if (params === false) return;
      this.params = params;
    },
    clearSearch() {
      this.searchValue = "";
    },
    clear() {
      this.visible = false;
      this.$emit("submit", null);
    },
    submit(row) {
      const { submitBeforeCallback } = this;
      if (submitBeforeCallback && !submitBeforeCallback()) return;
      this.visible = false;
      this.$emit("submit", row);
    }
  }
};
</script>

<style lang="less" scoped>
.popupContent {
  padding-top: 50px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .clearBtn {
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .search {
    border-bottom: 1px solid #f1f1f1;
    /deep/&.van-search--show-action {
      padding-right: 12px;
    }
    /deep/.van-search__action {
      background: #1989fa;
      color: #fff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .dataList {
    height: calc(100% - 55px);
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
