<script>
import { Field, Popup, Picker, Cell, CellGroup, Icon, Button } from "vant";
import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";

export default {
  name: "formMultiple",
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  props: {
    value: {
      type: [Array],
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
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
    keyField: {
      type: [String, Number],
      default: "id"
    },
    textField: {
      type: [String, Number],
      default: "name"
    },
    checkedField: {
      type: String,
      default: "isChecked"
    },
    fieldButtonType: {
      type: String,
      default: "primary"
    },
    isConfirm: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    cancelButtonText: {
      type: String,
      default: "清空"
    }
  },
  data() {
    return {
      // copyValue: [],
      keys: [],
      copyColumns: [],
      visible: false
    };
  },
  watch: {
    columns() {
      this.copyData();
    },
    value() {
      this.valueChange();
    }
  },
  created() {
    this.copyData();
  },
  methods: {
    copyData() {
      let { columns, value, keyField, checkedField } = this;
      let copyColumns = cloneDeep(columns);
      let keys = [];
      copyColumns.map(p => {
        p[checkedField] = value.includes(p[keyField]);
        keys.push(p[keyField]);
      });
      this.copyColumns = copyColumns;
      this.keys = keys;
    },
    valueChange() {
      let { keys, value } = this;
      if (value.length > 0) {
        let newValue = [];
        value.map(p => {
          if (keys.includes(p)) {
            newValue.push(p);
          }
        });
        if (!isEqual(value, newValue)) {
          this.$emit("input", newValue);
        }
      }
    },
    popupShow() {
      let { readonly, columns } = this;
      if (!readonly && columns.length) {
        // this.copyData();
        this.visible = true;
      }
    },
    checked(row) {
      let { isConfirm, checkedField } = this;
      row[checkedField] = !row[checkedField];
      if (!isConfirm) {
        this.valueUpdate(this.getValue());
      }
    },
    getValue() {
      let { copyColumns, keyField, checkedField } = this;
      let value = [];
      copyColumns.map(p => {
        if (p[checkedField]) value.push(p[keyField]);
      });
      return value;
    },
    valueUpdate(value) {
      this.$emit("change", value);
      this.$emit("input", value);
    },
    confirm() {
      this.visible = false;
      this.valueUpdate(this.getValue());
    },
    cancel() {
      this.visible = false;
      this.valueUpdate([]);
    },
    fieldRender() {
      return (
        <div class="van-cell van-field" onClick={this.popupShow}>
          <div class="van-cell__title van-field__label">
            <span>{this.label}</span>
          </div>
          <div class="van-cell__value van-field__value">
            <div class="van-field__body">{this.buttonRender()}</div>
          </div>
        </div>
      );
    },
    buttonRender() {
      let { value, keyField, textField, fieldButtonType } = this;
      return this.copyColumns.map(p => {
        if (value.includes(p[keyField])) {
          return (
            <van-button size="mini" class="btn" type={fieldButtonType}>
              {p[textField]}
            </van-button>
          );
        }
      });
    },
    popupRender() {
      const option = {
        props: {
          position: "bottom",
          value: this.visible
        },
        on: {
          input: val => {
            this.visible = val;
          }
        }
      };
      return (
        <van-popup {...option}>
          {this.confirmRender()}
          {this.multipleRender()}
        </van-popup>
      );
    },
    multipleRender() {
      return <van-cell-group>{this.cellRender()}</van-cell-group>;
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
                  {this.checkIconRender(p)}
                </div>
              );
            }
          }
        };
        return <van-cell {...option} />;
      });
    },
    checkIconRender(item) {
      let { checkedField } = this;
      return item[checkedField] ? (
        <van-icon name="checked" class="icon-success" />
      ) : (
        ""
      );
    },
    confirmRender() {
      return this.isConfirm ? (
        <div class="select-head van-hairline--top-bottom van-picker__toolbar">
          <button class="van-picker__cancel" onClick={this.cancel}>
            {this.cancelButtonText}
          </button>
          <button class="van-picker__confirm" onClick={this.confirm}>
            {this.confirmButtonText}
          </button>
        </div>
      ) : (
        ""
      );
    }
  },
  render() {
    console.log("3333333");
    return (
      <div>
        {this.fieldRender()}
        {this.popupRender()}
      </div>
    );
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
