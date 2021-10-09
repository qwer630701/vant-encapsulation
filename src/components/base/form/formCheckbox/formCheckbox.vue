<script>
import { CheckboxGroup, Checkbox, Cell, CellGroup } from "vant";

export default {
  name: "formCheckbox",
  components: {
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabledField: {
      type: String,
      default: "disabled"
    },
    readonlyField: {
      type: String,
      default: "readonly"
    },
    keyField: {
      type: String,
      default: "id"
    },
    textField: {
      type: String,
      default: "name"
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    radioRender(h) {
      let {
        columns,
        textField,
        keyField,
        readonly,
        readonlyField,
        disabled,
        disabledField
      } = this;
      if (columns.length > 0) {
        return columns.map((p, index) => {
          let isReadonly = readonly || p[readonlyField];
          let isDisabled = disabled || p[disabledField];
          return h("van-cell", {
            props: {
              title: p[textField],
              clickable: !(isReadonly || isDisabled)
            },
            on: {
              click: () => {
                if (isReadonly || isDisabled) return;
                this.$refs.checkboxes[index].toggle();
                this.$emit("change", p);
              }
            },
            scopedSlots: {
              "right-icon": () => {
                return h("van-checkbox", {
                  props: {
                    name: p[keyField],
                    disabled: isDisabled,
                    readonly: isReadonly
                  },
                  ref: "checkboxes",
                  refInFor: true
                });
              }
            }
          });
        });
      }
    },
    radioGroupRender(h) {
      let { value, radioRender } = this;
      return h(
        "van-checkbox-group",
        {
          props: {
            value
          },
          on: {
            input: val => {
              this.$emit("input", val);
            }
          }
        },
        [h("van-cell-group", [radioRender(h)])]
      );
    }
  },
  render(h) {
    return this.radioGroupRender(h);
  }
};
</script>

<style lang="less" scoped></style>
