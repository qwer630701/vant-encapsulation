<template>
  <van-popup position="bottom" v-model="copyValue">
    <van-password-input
      :value="password"
      :focused="focused"
      :mask="mask"
      :length="length"
      :getContainer="getContainer"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="true"
      @input="changeValue"
      @delete="deleteValue"
      class="numberKeyboard"
    />
  </van-popup>
</template>

<script>
import { Popup, PasswordInput, NumberKeyboard } from "vant";
export default {
  name: "passwordNumberInput",
  components: {
    [Popup.name]: Popup,
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    length: {
      type: [String, Number],
      default: 6
    },
    mask: {
      type: Boolean,
      default: true
    },
    focused: {
      type: Boolean,
      default: false
    },
    getContainer: {
      type: String,
      default: "#app"
    }
  },
  data() {
    return {
      password: "",
      copyValue: false
    };
  },
  created() {},
  mounted() {},
  watch: {
    value(val) {
      this.copyValue = val;
    },
    copyValue(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    deleteValue() {
      let { password } = this;
      this.password = password.slice(0, password.length - 1);
    },
    changeValue(key) {
      let { password, length } = this;
      this.password = (password + key).slice(0, length);
      if (this.password.length == length) {
        this.confirm();
      }
    },
    confirm() {
      this.$emit("confirm", this.password);
    },
    clear() {
      this.password = "";
      this.$emit("clear");
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.van-password-input {
  margin: 10px 16px;
}
.numberKeyboard {
  position: initial;
}
</style>
