<script>
import { priceFormatter } from "@/utils/formatter.js";
import { Icon } from "vant";
export default {
  name: "payPrice",
  components: {
    [Icon.name]: Icon
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: "请输入"
    },
    unit: {
      type: String,
      default: "¥"
    },
    digit: {
      type: Number,
      default: 2
    },
    negative: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      copyValue: ""
    };
  },
  watch: {
    value(val) {
      if (val != this.copyValue) this.copyValue = val;
    },
    copyValue(val) {
      if (val != this.value) this.formatter(val);
    }
  },
  created() {
    this.copyValue = this.value;
  },
  mounted() {},
  methods: {
    clear() {
      this.copyValue = "";
      this.$refs.inputRef.focus();
    },
    formatter(val) {
      const { digit, negative } = this;
      val = priceFormatter(val, {
        digit: digit,
        negative: negative
      });
      this.copyValue = val;
      this.$emit("input", val);
    },
    titleRender(h) {
      let { label, readonly } = this;
      if (!readonly) return h("div", { class: "title" }, [label]);
    },
    clearIconRender(h) {
      const { clear, copyValue, readonly } = this;
      if (copyValue != "" && !readonly) {
        return h("van-icon", {
          props: {
            name: "clear"
          },
          class: "clear",
          on: {
            click: clear
          }
        });
      }
    }
  },
  render(h) {
    let { unit, readonly, titleRender, clearIconRender } = this;
    return h(
      "form",
      {
        attrs: {
          action: ""
        },
        class: "payPrice",
        on: {
          submit: e => {
            e.preventDefault();
            this.$emit("submit");
          }
        }
      },
      [
        titleRender(h),
        h("div", { class: "price" }, [
          h("div", { class: "unit" }, [unit]),
          h("input", {
            ref: "inputRef",
            domProps: {
              value: this.copyValue,
              disabled: readonly
            },
            on: {
              input: e => {
                this.copyValue = e.target.value;
              }
            }
          }),
          clearIconRender(h)
        ])
      ]
    );
  }
};
</script>

<style lang="less" scoped>
.payPrice {
  padding: 20px;
  .price {
    display: flex;
    font-weight: bold;
    height: 60px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    .unit {
      width: 20px;
      font-size: 20px;
      padding-right: 10px;
      height: 60px;
      line-height: 80px;
    }
    input {
      width: calc(100% - 80px);
      height: 70px;
      padding: 10px 0;
      border: none;
      font-size: 32px;
    }
    .clear {
      font-size: 26px;
      height: 60px;
      line-height: 70px;
      margin: 0 10px;
      padding-left: 20px;
      color: #666;
    }
  }
}
</style>
