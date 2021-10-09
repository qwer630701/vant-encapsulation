<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <swiper class="swiper" :data="data" @click="swiperClick"></swiper>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/base/swiper";

export default {
  name: "BaseCell",
  components: {
    swiper
  },
  data() {
    return {
      data: [
        { id: 0, image: "/image/banner1.jpg" },
        { id: 0, image: "/image/banner2.jpg" },
        { id: 0, image: "/image/banner1.jpg" }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    swiperClick(row) {
      console.log(row);
    }
  }
};
</script>
<style lang="less" scoped>
.swiper {
  height: 150px;
  margin: 10px;
  border-radius: 6px;
}
</style>
