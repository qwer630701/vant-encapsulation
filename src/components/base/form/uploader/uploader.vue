<script>
import { Uploader } from "vant";

export default {
  name: "formSwitch",
  components: {
    [Uploader.name]: Uploader
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    multiple: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {
    oversize() {
      let props = this.option.props;
      let size = props && props.maxSize;
      this.$toast(size ? "文件大小不能超过 " + size + "kb" : "文件大小有误");
    },
    afterRead() {},
    beforeRead() {},
    beforeDelete() {}
  },
  render(h) {
    let {
      value,
      multiple,
      disabled,
      option,
      oversize,
      afterRead,
      beforeRead,
      beforeDelete
    } = this;
    let optionProps = option.props || {};
    optionProps = {
      ...optionProps,
      value,
      multiple,
      disabled,
      afterRead,
      beforeRead,
      beforeDelete
    };

    let optionOn = option.on || {};
    if (optionOn && !optionOn.oversize) {
      optionOn.oversize = oversize;
    }

    return h("van-uploader", {
      props: optionProps,
      on: optionOn
    });
  }
};
</script>

<style lang="less" scoped></style>
