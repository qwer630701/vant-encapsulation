<script>
import { Field } from "vant";
import { debounce } from "lodash";
import { findData } from "@/utils/common";

export default {
  name: "formAutoComplete",
  components: {
    [Field.name]: Field
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => {}
    },
    dataField: {
      type: String,
      default: "data"
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
    changeBefore: {
      type: Function,
      default: null
    },
    filter: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      list: [],
      visible: false
    };
  },
  watch: {
    data() {
      this.list = this.data;
    }
  },
  computed: {},
  created() {},
  mounted() {
    document.addEventListener("click", this.popupHidden);
  },
  destroyed() {
    document.removeEventListener("click", this.popupHidden);
  },
  methods: {
    selectItem(row) {
      this.visible = false;
      this.$emit("select", row);
    },
    popupHidden() {
      this.visible = false;
    },
    onChange: debounce(function() {
      let { value, changeBefore } = this;
      let flat = true;
      if (changeBefore) {
        flat = changeBefore(value);
      }
      if (!flat || (!value && value != 0)) return;
      this.onLoad();
    }, 200),
    onLoad() {
      let { api, data, filter } = this;
      if (api) {
        let { params, dataField } = this;
        api(params).then(res => {
          let data = dataField ? findData(res, dataField) : res;
          if (filter) data = filter(data);
          if (data.length > 0) {
            this.list = data;
            this.visible = true;
          }
        });
      } else {
        if (filter) data = filter(data);
        if (data.length > 0) {
          this.list = data;
          this.visible = true;
        }
      }
    },
    fieldRender(h) {
      let { label, required, value, onChange } = this;
      return h("van-field", {
        props: {
          label,
          required,
          value
        },
        on: {
          input: val => {
            this.$emit("input", val);
            onChange();
          }
        }
      });
    },
    popupRender(h) {
      let { visible, $scopedSlots: slots, popupItemRender } = this;
      if (visible && slots.default) {
        return h(
          "div",
          {
            class: "popup",
            props: {
              value: visible
            }
          },
          [popupItemRender(h)]
        );
      }
    },
    popupItemRender(h) {
      let { $scopedSlots: slots, list, selectItem } = this;
      return list.map(p => {
        return h(
          "div",
          {
            class: "item",
            on: {
              click: e => {
                e.stopPropagation();
                selectItem(p);
              }
            }
          },
          [slots.default(p)]
        );
      });
    }
  },
  render(h) {
    let { fieldRender, popupRender } = this;
    return h("div", { class: "autoComplete" }, [
      fieldRender(h),
      popupRender(h)
    ]);
  }
};
</script>

<style lang="less" scoped>
.autoComplete {
  position: relative;
  .popup {
    position: absolute;
    left: 0;
    top: 44px;
    width: 100%;
    overflow-y: auto;
    border: 0 solid @lightGray;
    border-width: 0 0 1px 0;
    background: @white;
    z-index: 1;
  }
}
</style>
