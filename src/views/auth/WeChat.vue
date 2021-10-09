<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
import authApi from "@/api/auth.js";
export default {
  name: "WeChat",
  components: {},
  data() {
    return {};
  },
  created() {
    this.auth();
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    auth() {
      const code = this.$route.query.code;
      if (!code) {
        authApi
          .weChatAuth({
            ReturnUrl: window.location.href
          })
          .then(res => {
            window.location.href = res.Data;
          });
      } else {
        authApi
          .WeChatLogin({
            code: code
          })
          .then(res => {
            this.setUserInfo(res.Data);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
