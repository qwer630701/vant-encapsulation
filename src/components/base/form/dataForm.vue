<script>
import cloneDeep from "lodash/cloneDeep";
import { validatePromise } from "@/utils/validate.js";
import { CellGroup, Cell, Field, Button, Toast } from "vant";
import formPrice from "@/components/base/form/formPrice";
import formSelect from "@/components/base/form/formSelect";
import formSwitch from "@/components/base/form/formSwitch";
import formMultiple from "@/components/base/form/formMultiple";
import formDatePicker from "@/components/base/form/formDatePicker";
import formSearchList from "@/components/base/form/formSearchList";

const REF_NAME = "field";

export default {
  name: "dataForm",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    formPrice,
    formSelect,
    formSwitch,
    formMultiple,
    formDatePicker,
    formSearchList
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    },
    isVerify: {
      type: Boolean,
      default: true
    },
    errorText: {
      type: String,
      default: "请正确填写"
    },
    submitText: {
      type: String,
      default: "提交"
    },
    submitButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const baseConfig = {
      input: {
        name: "van-field"
      },
      password: {
        name: "van-field",
        props: {
          type: "password"
        }
      },
      textarea: {
        name: "van-field",
        props: {
          autosize: true,
          rows: "2",
          type: "textarea"
        }
      },
      switch: {
        name: "formSwitch"
      },
      select: {
        name: "formSelect"
      },
      multiple: {
        name: "formMultiple"
      },
      date: {
        name: "formDatePicker"
      },
      list: {
        name: "formSearchList",
        keyField: "id",
        textField: "name"
      },
      price: {
        name: "formPrice"
      }
    };
    let formData = {};
    let verifyRule = {};
    let content = this.option.content;
    if (content && content.length) {
      content.map(p => {
        let value = p.value;
        const type = p.type || "input";
        const name = p.name;
        if (type == "list") {
          const keyField = baseConfig[type].keyField;
          const textField = baseConfig[type].textField;
          if (!value) {
            value[keyField] = "";
            value[textField] = "";
          }
          formData[name[keyField]] = {
            name,
            type,
            value,
            initialValue: cloneDeep(value),
            label: p.label
          };
        } else {
          value = value
            ? value
            : type == "multiple"
            ? []
            : type == "switch"
            ? false
            : "";
          formData[name] = {
            type,
            value: value,
            initialValue: cloneDeep(value),
            label: p.label
          };
          if (type == "multiple" || type == "select") {
            formData[name].columns =
              p.props && p.props.columns ? p.props.columns : [];
          }
        }
        if (p.required) {
          verifyRule[name]
            ? (verifyRule[name].required = p.required)
            : (verifyRule[name] = { required: p.required });
        }
        if (p.validator) {
          verifyRule[name]
            ? (verifyRule[name].validator = p.validator)
            : (verifyRule[name] = { validator: p.validator });
        }
      });
    }
    return {
      formData,
      verifyRule,
      baseConfig
    };
  },
  created() {},
  computed: {},
  methods: {
    restore() {
      let formData = cloneDeep(this.formData);
      for (let i in formData) {
        formData[i].value = formData[i].initialValue;
      }
      this.formData = formData;
    },
    clear() {
      let formData = cloneDeep(this.formData);
      for (let i in formData) {
        let item = formData[i];
        if (item.type == "multiple") {
          item.value = [];
        } else if (item.type == "switch") {
          item.value = false;
        } else {
          item.value = "";
        }
      }
      this.formData = formData;
    },
    getValue() {
      let { formData } = this;
      let data = {};
      for (let i in formData) {
        data[i] = formData[i].value;
      }
      return data;
    },
    setValue(data, isInitial) {
      let formData = cloneDeep(this.formData);
      for (let i in data) {
        formData[i].value = data[i];
        if (isInitial) formData[i].initialValue = data[i];
      }
      this.formData = formData;
    },
    getData(...arg) {
      const { formData } = this;
      let res = {};
      arg.map(p => {
        let item = formData[p];
        if (item && item.columns) res[p] = item.columns;
      });
      return res;
    },
    setData(data) {
      let { formData } = this;
      formData = cloneDeep(formData);
      for (let i in data) {
        let item = formData[i];
        if (item) {
          item.columns = data[i];
        }
      }
      this.formData = formData;
    },
    submitBefore() {
      let {
        isVerify,
        getValue,
        verifyRule,
        submit,
        errorText,
        formData
      } = this;
      let data = getValue();
      if (isVerify) {
        validatePromise(data, verifyRule)
          .then(() => {
            submit(data);
          })
          .catch(name => {
            Toast.fail(errorText + formData[name].label);
          });
      } else {
        submit(data);
      }
    },
    submit(data) {
      let {
        option: { submit }
      } = this;
      if (submit) {
        submit(data);
      } else {
        this.$emit("submit", data);
      }
    },
    listSlotsTemplate() {
      return {
        item: item => (
          <van-cell
            center
            title={item.name}
            value={item.id}
            label={item.code}
          />
        )
      };
    },
    fieldRender(h) {
      let {
        formData,
        baseConfig,
        listSlotsTemplate,
        option: { content }
      } = this;
      content = cloneDeep(content);
      return content.map(p => {
        let name = p.name;
        let type = p.type || "input";
        let node = baseConfig[type];
        let props = {};
        let on = p.on || {};
        if (node.props) props = { ...node.props };
        if (p.props) props = { ...props, ...p.props };

        props.label = p.label;
        props.required = p.required;
        let option = {
          ref: REF_NAME + name,
          props,
          on: {
            ...on,
            input: val => {
              this.formData[name].value = val;
            }
          }
        };
        if (type == "list") {
          const keyField = node.keyField;
          const textField = node.textField;
          const key = name[keyField];
          option.props.value = formData[key].value[keyField];
          option.props.name = formData[key].value[textField];
          option.on.submit = row => {
            this.formData[key].value[keyField] = row[keyField] || "";
            this.formData[key].value[textField] = row[textField] || "";
            on.submit && on.submit(row);
          };
          option.scopedSlots = node.scopedSlots
            ? node.scopedSlots
            : listSlotsTemplate();
        } else {
          if (type == "multiple" || type == "select") {
            option.props.columns = formData[name].columns;
          }
          option.props.value = formData[name].value;
          if (p.scopedSlots) {
            option.scopedSlots = p.scopedSlots;
          }
        }
        return h(node.name, option);
      });
    },
    buttonRender() {
      let { submitText, submitButton, submitBefore } = this;
      if (submitButton) {
        return (
          <div class="button-fluid">
            <van-button block type="primary" onClick={submitBefore}>
              {submitText}
            </van-button>
          </div>
        );
      }
    }
  },
  render(h) {
    let { fieldRender } = this;
    const fields = fieldRender(h);
    return (
      <van-cell-group>
        {fields}
        {this.buttonRender()}
      </van-cell-group>
    );
  }
};
</script>
<style lang="less" scoped></style>
