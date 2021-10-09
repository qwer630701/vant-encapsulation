<template>
  <div class="form">
    <navbar :leftArrow="false"></navbar>
    <van-cell-group :border="false">
      <van-field
        v-model="username"
        label="用户名"
        clearable
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        clearable
        placeholder="请输入密码"
      />
      <van-checkbox
        class="remember"
        v-model="checked"
        shape="square"
        icon-size="14px"
        >记住密码</van-checkbox
      >
    </van-cell-group>
    <van-button type="info" block @click="Login">确认登录</van-button>
    <div class="auth">
      <van-divider>授权登陆</van-divider>
      <div class="group">
        <img src="/image/auth/wechat.png" @click="weChatAuth" />
      </div>
    </div>
    <div class="copyright">
      Copyright ©2200 xxxxxxx
      <span style="margin-left:10px">版本号：{{ version }}</span>
    </div>
  </div>
</template>

<script>
import commonApi from "@/api/common.js";
import { Button, CellGroup, Field, Checkbox, Divider } from "vant";
import md5 from "js-md5";
import { mapActions } from "vuex";
import { ls } from "@/utils/cache.js";
import { USER } from "@/store/mutation-types.js";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
    [Divider.name]: Divider
  },
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      version: "0.0.1"
    };
  },
  created() {
    // getVersionNo().then(res => {
    //   this.version = res.Data;
    // });
    const userInfo = ls.get(USER);
    if (userInfo) {
      this.username = userInfo.username;
      this.password = userInfo.password;
      this.checked = true;
    }
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    Login() {
      let { username, password } = this;
      if (password) {
        password = md5(this.password);
      }
      commonApi
        .login({
          UserCode: username,
          Password: password
        })
        .then(res => {
          this.setUserInfo(res.Data);
          if (this.checked) {
            ls.set(USER, {
              username: this.username,
              password: this.password
            });
          }
          this.$router.push({ name: "Workplace" });
        });
    },
    weChatAuth() {
      this.$router.push({ name: "WeChat" });
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 60px 5% 5%;
  overflow: auto;
  .login-title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
  .remember {
    float: right;
    margin: 15px 0 20px;
    /deep/.van-checkbox__label {
      color: #0071e9;
      font-size: 14px;
    }
  }
  .auth {
    padding-top: 20px;
    .group {
      padding-top: 20px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        border: 1px solid #ccc;
        border-radius: 50%;
      }
    }
  }
  .copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    color: #999;
    font-size: 12px;
    width: 100%;
    line-height: 40px;
  }
}
</style>
