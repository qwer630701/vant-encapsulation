<script>
import navbar from "@/components/base/layouts/navbar";
import { Search, Icon } from "vant";

export default {
  name: "searchNavbar",
  components: {
    navbar,
    [Icon.name]: Icon,
    [Search.name]: Search
  },
  props: {
    type: {
      type: String,
      default: "flex"
      // normal flex
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
      //shape round
    },
    fixed: {
      type: Boolean,
      default: true
    },
    leftArrow: {
      type: Boolean,
      default: false
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: null
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  },
  created() {},
  methods: {
    titleRender(h) {
      const { placeholder, shape, value, readonly } = this;
      return (
        <template slot="title">
          {h("van-search", {
            class: "nav-saerch",
            attrs: {
              readonly,
              placeholder
            },
            props: {
              shape,
              value
            },
            on: {
              input: val => {
                this.value = val;
                this.$emit("keypress", val);
              },
              search: () => {
                this.$emit("search", this.value);
              },
              click: () => {
                this.$emit("click");
              }
            }
          })}
        </template>
      );
    }
  },
  render(h) {
    let {
      type,
      fixed,
      leftArrow,
      leftText,
      rightText,
      zIndex,
      titleRender,
      $scopedSlots: scopedSlots,
      $slots: slots
    } = this;

    slots = Object.keys(slots).map(name => {
      if (name != "title") {
        return <template slot={name}>{slots[name]}</template>;
      } else {
        return "";
      }
    });

    slots.push(titleRender(h));

    let props = {
      type,
      fixed,
      zIndex,
      leftArrow,
      leftText,
      rightText
    };

    if (this.$listeners["click-left"]) {
      props["click-left"] = () => {
        this.$emit("click-left");
      };
    }
    if (this.$listeners["click-right"]) {
      props["click-right"] = () => {
        this.$emit("click-right");
      };
    }

    return h(
      "navbar",
      {
        props,
        scopedSlots,
        on: {
          "click-left": () => {
            if (this.$listeners["click-left"]) {
              this.$emit("click-left");
            } else {
              this.$router.go(-1);
            }
          },
          "click-right": () => {
            this.$emit("click-right");
          }
        }
      },
      [slots]
    );
  }
};
</script>

<style lang="less" scoped>
.nav-saerch {
  height: 46px;
}
</style>
