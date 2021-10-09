<script>
import { RadioGroup, Radio, Cell, CellGroup } from "vant";

export default {
  name: "formRadio",
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
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
    readonlyField: {
      type: String,
      default: "readonly"
    },
    disabledField: {
      type: String,
      default: "disabled"
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
        return columns.map(p => {
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
                this.$emit("input", p[keyField]);
                this.$emit("change", p);
              }
            },
            scopedSlots: {
              "right-icon": () => {
                return h("van-radio", {
                  props: {
                    name: p[keyField],
                    disabled: isDisabled,
                    readonly: isReadonly
                  }
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
        "van-radio-group",
        {
          props: {
            value
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
