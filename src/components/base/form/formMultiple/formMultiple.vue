<script>
import { Field, Button } from "vant";
import popupMultiple from "@/components/base/popup/popupMultiple";

export default {
  name: "formMultiple",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    popupMultiple
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      default: () => []
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
      type: String,
      default: "id"
    },
    textField: {
      type: String,
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
    }
  },
  data() {
    return {
      // copyValue: [],
      copyColumns: [],
      visible: false
    };
  },
  watch: {},
  created() {},
  methods: {
    popupShow() {
      let { readonly, columns } = this;
      if (!readonly && columns.length) {
        this.visible = true;
      }
    },
    confirm(value) {
      this.$emit("input", value);
      this.$emit("submit", value);
    },
    cancel() {
      this.visible = false;
      this.valueUpdate([]);
    },
    fieldRender() {
      const btns = this.buttonRender();
      return (
        <div class="van-cell van-field" onClick={this.popupShow}>
          <div class="van-cell__title van-field__label">
            <span>{this.label}</span>
          </div>
          <div class="van-cell__value van-field__value">
            <div class="van-field__body">{btns}</div>
            <div class="van-field__right-icon">
              <i class="van-icon van-icon-arrow" />
            </div>
          </div>
        </div>
      );
    },
    buttonRender() {
      let { value, keyField, textField, fieldButtonType } = this;
      let btns = [];
      this.columns.map(p => {
        if (value && value.includes(p[keyField])) {
          btns.push(
            <van-button size="mini" class="btn" type={fieldButtonType}>
              {p[textField]}
            </van-button>
          );
        }
      });
      return btns;
    },
    popupMultipleRender() {
      const {
        value,
        columns,
        keyField,
        textField,
        isConfirm,
        cancelButtonText,
        confirmButtonText,
        confirm,
        visible,
        max,
        maxHeight
      } = this;
      const option = {
        props: {
          keys: value,
          visible,
          columns,
          keyField,
          textField,
          isConfirm,
          cancelButtonText,
          confirmButtonText,
          max,
          maxHeight
        },
        on: {
          input: val => {
            this.visible = val;
          },
          "update:keys": val => {
            this.$emit("input", val);
          },
          change: val => {
            this.$emit("change", val);
            this.submit(val);
          },
          confirm: confirm
        }
      };
      return <popupMultiple {...option} />;
    }
  },
  render() {
    return (
      <div>
        {this.fieldRender()}
        {this.popupMultipleRender()}
      </div>
    );
  }
};
</script>

<style lang="less" scoped>
.van-cell__value {
  text-align: left;
  line-height: initial;
  display: flex;
  .van-field__body {
    display: inline-block;
    flex: 1;
    .btn {
      padding: 0 4px;
      margin: 2px 4px 0 0;
      float: left;
      height: 18px;
      line-height: 18px;
    }
    .van-field__right-icon {
      line-height: 24px;
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
