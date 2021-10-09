<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="form.name"
          label="名称"
          clearable
          required
          placeholder="请输入名称"
        />
        <van-field
          v-model="form.name"
          label="只读"
          clearable
          readonly
          placeholder="请输入名称"
        />
        <van-field
          v-model="form.name"
          label="禁用"
          clearable
          disabled
          placeholder="请输入名称"
        />
        <van-field
          v-model="form.tel"
          type="tel"
          label="手机号"
          clearable
          required
          placeholder="请输入手机号"
        />
        <van-field
          v-model="form.digit"
          type="digit"
          label="整数"
          clearable
          placeholder="请输入整数"
        />
        <van-field
          v-model="form.number"
          type="number"
          label="数字"
          clearable
          placeholder="请输入数字"
        />
        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          clearable
          placeholder="请输入密码"
        />
        <van-field
          v-model="form.formatter"
          label="正则过滤"
          :formatter="formatter"
          placeholder="格式化输入内容,删除数字"
        />
        <formPrice
          v-model="form.priceFormatter"
          label="金额"
          placeholder="格式化内容,输入金额"
        ></formPrice>
        <!-- <van-field
          v-model="form.priceFormatter"
          label="金额"
          :formatter="priceFormatter"
          placeholder="格式化内容,输入金额"
        /> -->
        <van-field
          v-model="form.right"
          label="内容右对齐"
          placeholder="输入框内容右对齐"
          input-align="right"
        />
        <van-field
          v-model="form.code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
        <van-field
          v-model="form.icon"
          label="图标"
          left-icon="smile-o"
          right-icon="warning-o"
          placeholder="显示图标"
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { priceFormatter } from "@/utils/formatter.js";
import formPrice from "@/components/base/form/formPrice";
import { Field, CellGroup, Button } from "vant";
export default {
  name: "FormInput",
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formPrice
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        digit: "",
        number: "",
        password: "",
        formatter: "",
        priceFormatter: "",
        right: "",
        code: "",
        icon: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    formatter(value) {
      /*
      const parse = str => str
      .replace(/[^0-9.]/g, '') // 移除所有非数字和小数点
      .replace(/(?<!^\d+)\./g, '') // 移除非第一个小数点
      .replace(/^0*(-?\d+)(\.(\d{1,2}))?\S*?$/, '$1$2') // 保留两位小数
      */
      // 过滤输入的数字
      return value.replace(/[^\d.]+$/g, "");
      // return value.replace(/\d/g, "");
    },
    priceFormatter: priceFormatter
  }
};
</script>
<style lang="less" scoped></style>
