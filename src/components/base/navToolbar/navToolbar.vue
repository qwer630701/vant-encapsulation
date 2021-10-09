<template>
  <van-swipe class="toolbar" :loop="false">
    <van-swipe-item v-for="(item, index) in menuData" :key="index">
      <van-grid :column-num="colspan" :border="false">
        <van-grid-item
          v-for="(dItem, dIndex) in item"
          :key="dIndex"
          :text="dItem.text"
          :to="dItem.to"
        >
          <slot name="icon">
            <img
              :src="dItem.image"
              :style="{ width: iconSize, height: iconSize }"
            />
            <p
              :style="{
                marginTop: iconMargin
              }"
            >
              {{ dItem.text }}
            </p>
          </slot>
        </van-grid-item>
      </van-grid>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
export default {
  name: "toolMenu",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    rowspan: {
      type: Number,
      default: 2
    },
    colspan: {
      type: Number,
      default: 4
    },
    iconSize: {
      type: String,
      default: "36px"
    },
    iconMargin: {
      type: String,
      default: "0px"
    }
  },
  computed: {
    menuData() {
      let result = [];
      let data = this.data;
      for (var i = 0; i < data.length; i += this.rowspan * this.colspan) {
        result.push(data.slice(i, i + this.rowspan * this.colspan));
      }
      return result;
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.toolbar {
  padding: 10px 0;
  img {
    width: 36px;
    height: 36px;
  }
  p {
    font-size: 12px;
    text-align: center;
    color: @blodGray;
  }
  /deep/.van-grid-item__content {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  /deep/.van-swipe__indicators {
    bottom: 0;
  }
  /deep/.van-swipe__indicator:not(.van-swipe__indicator--active) {
    border: 1px solid @gray;
    background-color: @gray;
  }
  /deep/.van-swipe__indicator {
    transition: opacity 0.2s, background-color 0.2s, width 0.2s;
  }
  /deep/.van-swipe__indicator--active {
    width: 12px;
    border-radius: 6px;
  }
}
</style>
