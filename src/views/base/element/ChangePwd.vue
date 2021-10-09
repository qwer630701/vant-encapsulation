<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-field
        label="原密码"
        type="password"
        placeholder="请输入原密码"
        v-model="password.OldPassword"
      />
      <van-field
        label="新密码"
        type="password"
        placeholder="请输入新密码"
        v-model="password.NewPassword"
      />
      <van-field
        label="再次输入"
        type="password"
        placeholder="请再次输入新密码"
        v-model="password.AgainPassword"
      />
      <div class="button123"></div>
      <van-button
        type="info"
        size="large"
        class="button-fluid"
        @click="changePassword"
        :loading="ButtonLoading"
        >确认修改</van-button
      >
    </div>
  </div>
</template>
<script>
import { Field, Button, Notify } from "vant";
import commonApi from "@/api/common.js";
// import { mapState } from "vuex";
import md5 from "js-md5";
export default {
  name: "ChangePwd",
  data() {
    return {
      password: {
        OldPassword: "",
        NewPassword: "",
        AgainPassword: ""
      },
      ButtonLoading: false
    };
  },
  computed: {},
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Notify.name]: Notify
  },
  created() {},
  methods: {
    changePassword() {
      const OldPassword = this.password.OldPassword;
      const NewPassword = this.password.NewPassword;
      if (NewPassword !== NewPassword) {
        Notify({ type: "warning", message: "两次密码输入不一致" });
      } else {
        this.ButtonLoading = true;
        commonApi
          .SavePassword({
            OldPassword: md5(OldPassword),
            NewPassword: md5(NewPassword)
          })
          .then(() => {
            Notify({ type: "success", message: "修改成功" });
            this.ButtonLoading = false;
            this.$router.push({ name: "Workplace" });
          })
          .catch(() => {
            this.ButtonLoading = false;
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.button-fluid {
  margin: 0.5rem 3%;
  width: 94%;
}
</style>
