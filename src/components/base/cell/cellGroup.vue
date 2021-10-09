<script>
export default {
  name: "cellGroup",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {},
  render(h) {
    const { $slots: slots, title, border } = this;
    const groupDom = h(
      "div",
      {
        class: { "cell-group": true, "group-border": border }
      },
      slots.default
    );
    if (title || slots.title) {
      return h("div", [
        h(
          "div",
          {
            class: {
              "group-title": true
            }
          },
          [slots.title ? slots.title : title]
        ),
        groupDom
      ]);
    }
    return groupDom;
  }
};
</script>

<style lang="less" scoped>
.group-title {
  padding: 8px 16px 8px;
  color: @gray;
  font-size: @fontSizeSm;
  line-height: 16px;
}

.cell-group {
  background-color: @white;
  position: relative;
  &.group-border::before {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    top: 0;
    left: 0;
    border-top: 1px solid @lightGray;
    transform: scaleY(0.5);
    z-index: 1;
  }
  &.group-border:after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid @lightGray;
    transform: scaleY(0.5);
    z-index: 1;
  }
}
</style>
