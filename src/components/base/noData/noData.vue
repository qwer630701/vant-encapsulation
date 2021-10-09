<script>
export default {
  name: "noData",
  props: {
    icon: {
      type: String,
      default: "icon-nodata"
    },
    text: {
      type: String,
      default: "暂无数据"
    },
    type: {
      type: String,
      default: "normal"
      // normal fluid
    }
  },
  render() {
    let { type } = this;
    let iconContent = <i class={"iconfont " + this.icon} />;
    if (this.$slots.icon) {
      iconContent = this.$slots.icon;
    }

    let textContent = this.text;
    if (this.$slots.text) {
      textContent = this.$slots.text;
    }

    let className = {
      nodata: true
    };

    className[type] = type;

    return (
      <div {...{ class: className }}>
        <div>{iconContent}</div>
        <div class="text">{textContent}</div>
      </div>
    );
  }
};
</script>
<style lang="less" scoped>
.nodata {
  text-align: center;
  font-size: @fontSizeXs;
  padding: 150px 0;
  box-sizing: border-box;
  height: calc(100vh - 150px);

  i {
    font-size: 80px;
    color: @gray;
  }
  .text {
    font-size: @fontSizeXs;
    color: @gray;
    margin-top: 35px;
  }
}
</style>
