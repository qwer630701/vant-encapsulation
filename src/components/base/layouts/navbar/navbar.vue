<script>
import { Icon } from "vant";
import { mixin } from "@/components/base/mixin.js";

export default {
  name: "navbar",
  components: {
    [Icon.name]: Icon
  },
  mixins: [mixin],
  props: {
    type: {
      type: String,
      default: "normal"
      // normal flex
    },
    title: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: true
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: null
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    leftRender(h) {
      const { slots, leftArrow, leftText } = this;
      const leftSlot = slots("left");
      const value = leftSlot ? leftSlot : leftText;

      if (leftArrow || value) {
        return h(
          "div",
          {
            class: "left",
            on: {
              click: () => {
                if (this.$listeners["click-left"]) {
                  this.$emit("click-left");
                } else {
                  this.$router.go(-1);
                }
              }
            }
          },
          [
            leftArrow
              ? h("van-icon", {
                  props: {
                    name: "arrow-left"
                  },
                  class: "arrow-left"
                })
              : "",
            h("span", { class: "text" }, [value])
          ]
        );
      }
    },
    rightRender(h) {
      const { slots, rightText } = this;
      const rightSlot = slots("right");
      const value = rightSlot ? rightSlot : rightText;

      if (value) {
        return h(
          "div",
          {
            class: "right",
            on: {
              click: () => {
                this.$emit("click-right");
              }
            }
          },
          [h("span", { class: "text" }, [value])]
        );
      }
    },
    titleRender(h) {
      const { slots, title } = this;
      const titleSlot = slots("title");

      const value = titleSlot
        ? titleSlot
        : title
        ? title
        : this.$route.meta.title;
      if (value) {
        return h(
          "div",
          {
            class: "title ellipsis",
            on: {
              click: () => {
                this.$emit("click-title");
              }
            }
          },
          [value]
        );
      }
    }
  },
  render(h) {
    const {
      type,
      fixed,
      border,
      zIndex,
      leftRender,
      titleRender,
      rightRender
    } = this;
    let className = {
      navbar: true,
      "navbar-border-bottom": border,
      fixed
    };
    className[type] = type;
    return h(
      "div",
      {
        class: className,
        style: {
          "z-index": zIndex
        }
      },
      [leftRender(h), titleRender(h), rightRender(h)]
    );
  }
};
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: @white;
  user-select: none;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  &.navbar-border-bottom:after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid @lightGray;
    transform: scale(0.5);
    border-bottom-width: 1px;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: @fontSizeSm;
    height: 46px;
    line-height: 46px;
    &:active {
      opacity: 0.7;
    }
    .text {
      color: @blue;
    }
  }

  .left {
    justify-content: flex-start;
    .arrow-left {
      font-size: @fontSizeMd;
      margin-right: 4px;
      color: @blue;
    }
  }
  .right {
    justify-content: flex-end;
  }

  .title {
    flex: 1;
    color: #323233;
    font-weight: 500;
    font-size: 16px;
  }

  &.normal {
    .left,
    .right {
      position: absolute;
      top: 0;
      bottom: 0;
    }

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }

    .title {
      max-width: 60%;
      margin: 0 auto;
    }
  }
}
</style>
