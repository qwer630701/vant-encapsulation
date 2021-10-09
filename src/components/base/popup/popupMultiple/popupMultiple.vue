<script>
import { Popup, Picker, Cell, CellGroup, Icon } from "vant";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

export default {
  name: "popupMultiple",
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    keys: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    keyField: {
      type: String,
      default: "id"
    },
    textField: {
      type: String,
      default: "name"
    },
    isComfirm: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    max: {
      type: [String, Number],
      default: null
    },
    maxRequired: {
      type: String,
      default: "最大选择数量:"
    },
    maxHeight: {
      type: String,
      default: "60%"
    },
    getContainer: {
      type: String,
      default: "#app"
    }
  },
  data() {
    return {
      copyKeys: [],
      copyColumns: []
    };
  },
  model: {
    prop: "visible"
  },
  watch: {
    columns() {
      this.copyData();
    },
    keys(val) {
      if (!isEqual(this.copyKeys, val)) {
        this.copyKeys = val;
        this.copyData();
      }
    }
  },
  computed: {},
  created() {
    this.copyData();
  },
  methods: {
    copyData() {
      let { columns, keys, keyField } = this;
      let copyColumns = cloneDeep(columns);
      let copyKeys = [];
      copyColumns.map(p => {
        p.isChecked = keys.includes(p[keyField]);
        if (p.isChecked) copyKeys.push(p[keyField]);
      });
      this.copyColumns = copyColumns;
      this.copyKeys = copyKeys;
    },
    checked(row) {
      let { isComfirm, max, maxRequired, copyColumns } = this;
      if (max && !row.isChecked) {
        let len = 0;
        copyColumns.map(p => {
          if (p.isChecked) {
            len++;
          }
        });
        if (max <= len) {
          this.$notify({ type: "danger", message: maxRequired + max });
          return false;
        }
      }

      row.isChecked = !row.isChecked;
      if (!isComfirm) {
        this.valueUpdate(this.getValue());
      }
    },
    getValue() {
      let { copyColumns, keyField } = this;
      let keys = [];
      copyColumns.map(p => {
        if (p.isChecked) keys.push(p[keyField]);
      });
      return keys;
    },
    valueUpdate(value) {
      this.copyKeys = value;
      this.$emit("update:keys", value);
      this.$emit("confirm", value);
    },
    confirm() {
      this.$emit("input", false);
      this.valueUpdate(this.getValue());
    },
    cancel() {
      this.$emit("input", false);
      this.copyKeys = [];
      this.$emit("updateKeys", []);
    },
    popupRender() {
      const option = {
        props: {
          position: "bottom",
          value: this.visible
        },
        style: {
          maxHeight: this.maxHeight,
          height: "100%"
        },
        on: {
          input: val => {
            this.$emit("input", val);
          }
        }
      };
      return (
        <van-popup {...option}>
          {this.isComfirm ? this.confirmRender() : ""}
          {this.multipleRender()}
        </van-popup>
      );
    },
    multipleRender() {
      return (
        <van-cell-group style="height:calc(100% - 44px);overflow:auto;">
          {this.cellRender()}
        </van-cell-group>
      );
    },
    cellRender() {
      const { copyColumns, textField } = this;
      return copyColumns.map(p => {
        let option = {
          class: "item",
          on: {
            click: () => this.checked(p)
          },
          scopedSlots: {
            title: () => {
              return (
                <div>
                  {p[textField]}
                  {p.isChecked ? this.checkIconRender(p) : ""}
                </div>
              );
            }
          }
        };
        return <van-cell {...option} />;
      });
    },
    checkIconRender() {
      return <van-icon name="checked" class="icon-success" />;
    },
    confirmRender() {
      return (
        <div class="select-head van-hairline--top-bottom van-picker__toolbar">
          <button class="van-picker__cancel" onClick={this.cancel}>
            {this.cancelButtonText}
          </button>
          <button class="van-picker__confirm" onClick={this.confirm}>
            {this.confirmButtonText}
          </button>
        </div>
      );
    }
  },
  render() {
    return this.popupRender();
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
