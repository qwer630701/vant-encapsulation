<script>
import { priceFormatter } from "@/utils/formatter.js";
import { Field } from "vant";

export default {
  name: "formPrice",
  components: {
    [Field.name]: Field
  },
  props: {
    value: {
      type: [String, Number],
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    digit: {
      type: Number,
      default: 2
    },
    negative: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    clearable: {
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
      this.copyValue = val;
    }
  },
  created() {
    this.copyValue = this.value;
  },
  methods: {},
  render() {
    const {
      label,
      readonly,
      required,
      placeholder,
      clearable,
      copyValue,
      inputAlign,
      digit,
      negative
    } = this;
    const option = {
      props: {
        readonly,
        label,
        required,
        inputAlign,
        placeholder,
        clearable,
        value: copyValue,
        formatter: val => {
          return priceFormatter(val, {
            digit: digit,
            negative: negative
          });
        }
      },
      on: {
        input: val => {
          this.$emit("input", val);
        }
      }
    };
    return <van-field {...option} />;
  }
};
</script>

<style lang="less" scoped>
.van-cell__value {
  text-align: left;
  line-height: initial;
  .van-field__body {
    display: inline-block;
    .btn {
      padding: 0 4px;
      margin: 2px 4px 0 0;
      float: left;
      height: 18px;
      line-height: 18px;
    }
  }
}
.item {
  position: relative;
  padding-right: 40px;
  .icon-success {
    position: absolute;
    right: 15px;
    top: 13px;
    color: @green;
    font-size: @fontSize20;
  }
}
</style>
