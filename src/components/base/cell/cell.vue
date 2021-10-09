<script>
import { Icon } from "vant";
export default {
  name: "cell",
  components: {
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    thumb: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: 80
    },
    isLink: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    leftRender(h) {
      let { $slots: slots, thumb, size } = this;
      thumb = slots.thumb
        ? slots.thumb
        : thumb
        ? h("img", { attrs: { src: thumb } })
        : "";
      if (thumb) {
        return h(
          "div",
          {
            class: "left thumb",
            style: {
              width: size + "px",
              height: size + "px"
            }
          },
          [thumb]
        );
      }
    },
    titleRender(h) {
      let { $slots: slots, title } = this;
      title = slots.title ? slots.title : title;
      if (title) {
        return h(
          "div",
          {
            class: "title"
          },
          [title]
        );
      }
    },
    valueRender(h) {
      let { $slots: slots, value } = this;
      value = slots.default ? slots.default : value;
      if (value) {
        return h(
          "div",
          {
            class: "value"
          },
          [value]
        );
      }
    },
    labelRender(h) {
      let { $slots: slots, label } = this;
      label = slots.label ? slots.label : label;
      if (label) {
        return h(
          "div",
          {
            class: "label"
          },
          [label]
        );
      }
    },
    linkRender(h) {
      if (this.isLink) {
        return h("van-icon", {
          props: {
            name: "arrow"
          },
          class: "link"
        });
      }
    }
  },
  render(h) {
    const {
      leftRender,
      titleRender,
      valueRender,
      linkRender,
      labelRender,
      border,
      isActive,
      isLink
    } = this;
    return h(
      "div",
      {
        class: { cell: true, "cell-border": border, active: isLink || isActive }
      },
      [
        leftRender(h),
        h(
          "div",
          {
            class: "right"
          },
          [
            h("div", { class: "header" }, [
              titleRender(h),
              valueRender(h),
              linkRender(h)
            ]),
            labelRender(h)
          ]
        )
      ]
    );
  }
};
</script>

<style lang="less" scoped>
.cell {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  background-color: @white;
  display: flex;
  &.active:active {
    background-color: #f2f3f5;
  }
  .left {
    margin-right: 8px;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    /deep/img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    flex: 1;
    .header {
      display: flex;
      flex: 1;
      .title {
        flex: 1;
        font-size: @fontSizeMd;
      }
      .value {
        position: relative;
        overflow: hidden;
        color: @gray;
        text-align: right;
        vertical-align: middle;
        word-wrap: break-word;
      }
      .link {
        min-width: 1em;
        height: 24px;
        font-size: @fontSizeMd;
        line-height: 24px;
        margin-left: 4px;
        color: #969799;
      }
    }
    .label {
      margin-top: 4px;
      color: @gray;
      font-size: @fontSizeSm;
      line-height: 18px;
    }
  }
  &.cell-border:not(:last-child):after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid @lightGray;
    transform: scaleY(0.5);
  }
}
</style>
