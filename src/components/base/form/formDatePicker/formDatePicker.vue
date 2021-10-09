<script>
import { Field, Popup, DatetimePicker } from "vant";
import moment from "moment";

export default {
  name: "formDatePicker",
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    minDate: {
      type: String,
      default: ""
    },
    maxDate: {
      type: String,
      default: ""
    },
    format: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    //默认当前时间
    defaultDate: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: "40%"
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    cancelButtonText: {
      type: String,
      default: "清空"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    filter: {
      type: Function
    },
    getContainer: {
      type: String,
      default: "#app"
    }
  },
  data() {
    return {
      visible: false,
      copyValue: "",
      baseFormat: {
        datetime: "YYYY-MM-DD HH:mm:ss",
        date: "YYYY-MM-DD",
        time: "HH:mm",
        "year-month": "YYYY-MM"
      }
    };
  },
  watch: {},
  computed: {
    min() {
      let { minDate } = this;
      if (minDate) {
        return new Date(minDate);
      } else {
        return new Date(1900, 1, 1);
      }
    },
    max() {
      let { maxDate } = this;
      if (maxDate) {
        return new Date(maxDate);
      } else {
        return moment(new Date())
          .add(10, "y")
          .toDate();
      }
    },
    realFormat() {
      let { format, baseFormat, type } = this;
      return format ? format : baseFormat[type];
    }
  },
  created() {
    this.copyData();
  },
  methods: {
    copyData() {
      let { value, defaultDate, type } = this;
      let val = value;
      if (type != "time") {
        val = value
          ? moment(new Date(value)).toDate()
          : defaultDate
          ? moment(new Date()).toDate()
          : "";
      }
      this.copyValue = val;
    },
    formatter(type, val) {
      switch (type) {
        case "year":
          return `${val}年`;
        case "month":
          return `${val}月`;
        case "day":
          return `${val}日`;
        case "hour":
          return `${val}时`;
        case "minute":
          return `${val}分`;
        default:
          return val;
      }
    },
    popupShow() {
      if (!this.readonly) this.visible = true;
    },
    confirm(val) {
      let { realFormat, type } = this;
      if (type != "time") val = moment(val).format(realFormat);
      this.$emit("input", val);
      this.$emit("change", val);
      this.visible = false;
    },
    cancel() {
      let val = "";
      this.$emit("input", val);
      this.$emit("change", val);
      this.visible = false;
    },
    fieldRender() {
      const { value, label, required, placeholder, readonly } = this;
      const option = {
        props: {
          readonly: true,
          label: label,
          required: required,
          placeholder: placeholder,
          rightIcon: readonly ? "" : "arrow",
          value: value
        },
        on: {
          click: this.popupShow,
          input: val => {
            this.copyValue = val;
            this.$emit("change", val);
          }
        }
      };
      return <van-field {...option} />;
    },
    popupRender() {
      const { height, getContainer } = this;
      const option = {
        props: {
          position: "bottom",
          value: this.visible,
          getContainer
        },
        style: {
          height
        },
        on: {
          input: val => {
            this.visible = val;
          }
        }
      };
      return <van-popup {...option}>{this.pickerRender()}</van-popup>;
    },
    pickerRender() {
      const {
        copyValue,
        type,
        min,
        max,
        formatter,
        cancelButtonText,
        confirmButtonText,
        cancel,
        filter,
        confirm
      } = this;
      const option = {
        props: {
          value: copyValue,
          minDate: min,
          maxDate: max,
          type,
          formatter,
          cancelButtonText,
          confirmButtonText,
          filter: filter
        },
        on: {
          cancel,
          confirm,
          input: val => {
            this.copyValue = val;
          }
        }
      };
      return <van-datetime-picker {...option} />;
    }
  },
  render() {
    return (
      <div>
        {this.fieldRender()}
        {this.popupRender()}
      </div>
    );
  }
};
</script>

<style lang="less" scoped></style>
