<script>
import { Cell, Switch } from "vant";

export default {
  name: "formSwitch",
  components: {
    [Cell.name]: Cell,
    [Switch.name]: Switch
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {
    fieldRender() {
      const { label, required } = this;
      const option = {
        props: {
          center: true,
          title: label,
          required
        },
        scopedSlots: {
          "right-icon": () => this.switchRender()
        }
      };
      return <van-cell {...option} />;
    },
    switchRender() {
      const { readonly, value } = this;
      const option = {
        props: {
          size: "22",
          disabled: readonly,
          value: value
        },
        on: {
          input: val => {
            this.$emit("input", val);
          }
        }
      };
      return <van-switch {...option} />;
    }
  },
  render() {
    return this.fieldRender();
  }
};
</script>

<style lang="less" scoped></style>
