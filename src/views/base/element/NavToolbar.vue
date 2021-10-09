<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <navToolbar :data="data"></navToolbar>
    </div>
  </div>
</template>
<script>
import navToolbar from "@/components/base/navToolbar";

// import { Cell, CellGroup } from "vant";
export default {
  name: "BaseCell",
  components: {
    navToolbar
  },
  data() {
    return {
      data: [
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner2.jpg", text: "描述" },
        { id: 0, image: "/image/banner2.jpg", text: "描述" },
        { id: 0, image: "/image/banner2.jpg", text: "描述" },
        { id: 0, image: "/image/banner2.jpg", text: "描述" },
        { id: 0, image: "/image/banner2.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" },
        { id: 0, image: "/image/banner1.jpg", text: "描述" }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
