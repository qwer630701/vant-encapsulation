<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "swiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: [String, Number],
      default: 3000000
    },
    indicatorColor: {
      type: String,
      default: "white"
    },
    urlField: {
      type: String,
      default: "image"
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    swiperItemRender(h) {
      let { data, urlField } = this;
      return data.map(p => {
        return h(
          "van-swipe-item",
          {
            on: {
              click: () => {
                this.$emit("click", p);
              }
            }
          },
          [h("img", { attrs: { src: p[urlField] } })]
        );
      });
    }
  },
  render(h) {
    let { autoplay, indicatorColor, swiperItemRender } = this;
    return h(
      "van-swipe",
      {
        class: "swiper",
        props: { autoplay, indicatorColor }
      },
      [swiperItemRender(h)]
    );
  }
};
</script>

<style lang="less" scoped>
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
  :not(.van-swipe__indicators--vertical) {
    /deep/.van-swipe__indicator {
      transition: opacity 0.2s, background-color 0.2s, width 0.2s;
    }
    /deep/.van-swipe__indicator--active {
      width: 12px;
      border-radius: 6px;
    }
  }
}
</style>
