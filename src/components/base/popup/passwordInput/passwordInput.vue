<template>
  <div>
    <van-popup
      v-model="copyValue"
      position="bottom"
      :getContainer="getContainer"
    >
      <div class="select-head van-hairline--top-bottom van-picker__toolbar">
        <button class="van-picker__cancel" @click="cancel">取消</button>
        <div class="label">
          <span>{{ label }}</span>
          <span class="price">{{ price }}</span>
        </div>
        <button class="van-picker__confirm" @click="confirm">确认</button>
      </div>
      <div class="title">{{ placeholder }}</div>
      <div class="password">
        <van-field v-model="password" type="password" class="field" autofocus />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Field, Picker } from "vant";
export default {
  name: "passwordInput",
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Field.name]: Field
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "付款金额"
    },
    placeholder: {
      type: String,
      default: "请输入密码"
    },
    price: {
      type: [String, Number],
      default: ""
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
    confirm() {
      this.$emit("confirm", this.password);
    },
    cancel() {
      this.copyValue = false;
      this.$emit("cancel");
    }
  }
};
</script>

<style lang="less" scoped>
.price {
  margin-left: 10px;
  font-weight: bold;
  color: @red;
}
.title {
  text-align: center;
  padding: 16px;
}
.password {
  margin: 0 16px 46px 16px;
  > .field {
    border: 1px solid #ddd;
  }
}
</style>
