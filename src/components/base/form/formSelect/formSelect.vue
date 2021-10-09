<script>
import { Field } from "vant";
import popupSelect from "@/components/base/popup/popupSelect";

export default {
  name: "formSelect",
  components: {
    [Field.name]: Field,
    popupSelect
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
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
    inputAlign: {
      type: String,
      default: ""
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
    }
  },
  data() {
    return {
      name: "",
      visible: false,
      defaultIndex: 0
    };
  },
  watch: {
    columns() {
      this.init();
    },
    value() {
      this.init();
    }
  },
  computed: {},
  created() {
    this.init();
  },
  methods: {
    findSelectIndex() {
      const index = this.columns.findIndex(p => p[this.keyField] == this.value);
      this.defaultIndex = index > -1 ? index : 0;
    },
    init() {
      let { value, keyField } = this;
      let name = "";
      if (value || value == 0) {
        const row = this.columns.find(p => p[keyField] == value);
        if (row) {
          name = row[this.textField];
        } else {
          value = "";
        }
      }
      this.name = name;
    },
    popupShow() {
      if (!this.readonly) {
        this.findSelectIndex();
        this.visible = true;
      }
    },
    submit(data) {
      data ? this.confirm(data) : this.cancel();
    },
    confirm(data) {
      this.visible = false;
      this.$emit("input", data[this.keyField]);
      this.$emit("submit", data);
      this.$emit("change", data);
    },
    cancel() {
      this.name = "";
      this.visible = false;
      this.$emit("input", "");
      this.$emit("submit", "");
      this.$emit("change", "");
    },
    fieldRender() {
      const { name, label, required, placeholder, readonly, inputAlign } = this;
      const option = {
        props: {
          readonly: true,
          rightIcon: readonly ? "" : "arrow",
          value: name,
          label,
          required,
          placeholder,
          inputAlign
        },
        on: {
          click: this.popupShow,
          input: val => {
            this.name = val;
          }
        }
      };
      return <van-field {...option} />;
    },
    popupSelectRender() {
      const {
        height,
        columns,
        keyField,
        textField,
        defaultIndex,
        cancelButtonText,
        confirmButtonText
      } = this;
      const option = {
        props: {
          value: this.visible,
          isSelectDefault: true,
          height,
          columns,
          keyField,
          textField,
          defaultIndex,
          cancelButtonText,
          confirmButtonText
        },
        on: {
          input: val => {
            this.visible = val;
          },
          confirm: this.submit
        }
      };
      return <popupSelect {...option} />;
    }
  },
  render() {
    return (
      <div>
        {this.fieldRender()}
        {this.popupSelectRender()}
      </div>
    );
  }
};
</script>

<style lang="less" scoped></style>
