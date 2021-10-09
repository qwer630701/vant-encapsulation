<template>
  <div :class="'result result-state-' + state">
    <div class="result-icon" :style="{ color: color }">
      <slot v-if="$slots && $slots.icon" name="icon"></slot>
      <van-icon v-else :name="icon" />
    </div>
    <div class="result-title">
      <slot v-if="$slots && $slots.title" name="title"></slot>
      <span v-else>{{ title }}</span>
    </div>
    <div class="result-desc">
      <slot v-if="$slots && $slots.desc" name="desc"></slot>
      <span v-else>{{ desc }}</span>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "result",
  components: {
    [Icon.name]: Icon
  },
  props: {
    state: {
      type: String,
      default: "success"
    },
    title: {
      type: String,
      default: "操作成功"
    },
    desc: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    icon() {
      let icon = "";
      switch (this.state) {
        case "success":
          icon = "checked";
          break;
        case "wait":
          icon = "clock";
          break;
        case "error":
          icon = "clear";
          break;
        case "warning":
          icon = "warning";
          break;
        default:
          icon = "question";
          break;
      }
      return icon;
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.result {
  text-align: center;
  margin-top: 50px;
  padding-bottom: 24px;
  &-icon {
    font-size: 80px;
  }
  &-title {
    font-size: @fontSizeMd;
    margin-bottom: 16px;
  }
  &-desc {
    font-size: @fontSizeSm;
    color: @gray;
  }
  .result-icon {
    color: @red;
  }

  &.result-state-success .result-icon {
    color: @green;
  }
  &.result-state-wait .result-icon {
    color: @warningColor;
  }
  &.result-state-error .result-icon {
    color: @danger;
  }
  &.result-state-warning .result-icon {
    color: @warning;
  }
}
</style>
