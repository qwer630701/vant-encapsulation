<script>
import { NavBar } from "vant";

export default {
  name: "headNavBar",
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    fixed: {
      type: Boolean,
      default: true
    },
    leftArrow: {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 1
    }
  },
  methods: {
    leftClick() {
      if (this.$listeners["click-left"]) {
        this.$emit("click-left");
      } else {
        this.$router.go(-1);
      }
    },
    rightClick() {
      if (this.$listeners["click-right"]) {
        this.$emit("click-right");
      }
    }
  },
  render() {
    const { title, fixed, leftArrow, rightText, leftClick, rightClick } = this;
    const option = {
      props: {
        title: title ? title : this.$route.meta.title,
        fixed: fixed,
        leftArrow: leftArrow
      },
      on: {
        "click-left": leftClick,
        "click-right": rightClick
      }
    };
    if (rightText) {
      option.props.rightText = rightText;
    }
    const slots = Object.keys(this.$slots).map(name => (
      <template slot={name}>{this.$slots[name]}</template>
    ));
    return <van-nav-bar {...option}>{slots}</van-nav-bar>;
  }
};
</script>

<style lang="less" scoped></style>
