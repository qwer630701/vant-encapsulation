<script>
import { Popup, Picker } from "vant";

export default {
  name: "popupSelect",
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: -1
    },
    keyField: {
      type: String,
      default: "id"
    },
    textField: {
      type: String,
      default: "name"
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
    //弹出时是否选中默认项 defaultIndex
    isSelectDefault: {
      type: Boolean,
      default: false
    },
    getContainer: {
      type: String,
      default: "#app"
    }
  },
  data() {
    return {
      copyValue: false,
      popupShow: true
    };
  },
  watch: {
    columns() {
      // let { defaultIndex, keyField } = this;
      // if (defaultIndex < 0 && val.length > 0)
      //   defaultIndex = val[0][keyField];
    },
    value(val) {
      if (this.isSelectDefault && val) {
        this.popupShow = false;
        this.$nextTick(() => {
          this.popupShow = true;
          this.$nextTick(() => {
            this.copyValue = val;
          });
        });
      } else {
        this.copyValue = val;
      }
    },
    copyValue(val) {
      this.$emit("input", val);
    }
  },
  computed: {},
  created() {},
  methods: {
    confirm(data) {
      this.$emit("confirm", data);
    },
    cancel() {
      this.$emit("confirm", "");
    },
    popupRender() {
      if (!this.popupShow) return;
      const { height, copyValue, getContainer } = this;
      const option = {
        props: {
          position: "bottom",
          value: copyValue,
          getContainer
        },
        style: {
          height
        },
        on: {
          input: val => {
            this.copyValue = val;
          }
        }
      };
      return <van-popup {...option}>{this.pickerRender()}</van-popup>;
    },
    pickerRender() {
      const {
        columns,
        textField,
        defaultIndex,
        cancelButtonText,
        confirmButtonText
      } = this;
      const option = {
        props: {
          showToolbar: true,
          valueKey: textField,
          columns,
          defaultIndex,
          cancelButtonText,
          confirmButtonText
        },
        on: {
          cancel: this.cancel,
          confirm: this.confirm
        }
      };
      return <van-picker {...option} />;
    }
  },
  render() {
    return this.popupRender();
  }
};
</script>

<style lang="less" scoped></style>
