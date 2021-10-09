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
        <van-field
          v-model="form.message"
          rows="1"
          autosize
          label="自适应"
          type="textarea"
          placeholder="请输入留言"
        />
        <van-field
          v-model="form.message1"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          show-word-limit
          placeholder="请输入留言"
        />
        <formSwitch label="开关" v-model="form.switch" required></formSwitch>
        <formSelect
          label="单选"
          v-model="form.formSelect"
          :columns="data.formSelect"
        ></formSelect>
        <formDatePicker label="年月日" v-model="form.date"></formDatePicker>
        <formDatePicker
          label="年月日时分秒"
          v-model="form.datetime"
          type="datetime"
        ></formDatePicker>
        <formDatePicker
          label="年月"
          v-model="form.yearMonth"
          type="year-month"
        ></formDatePicker>
        <formDatePicker
          label="时分"
          v-model="form.time"
          type="time"
        ></formDatePicker>
      </van-cell-group>
      <div class="button-fluid">
        <van-button block type="primary">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import formSelect from "@/components/base/form/formSelect";
import formDatePicker from "@/components/base/form/formDatePicker";
import formSwitch from "@/components/base/form/formSwitch";
import { CellGroup, Field, Button } from "vant";
export default {
  name: "FormForm",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Field.name]: Field,
    formSelect,
    formDatePicker,
    formSwitch
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
        right: "",
        code: "",
        icon: "",
        message: "",
        message1: "",
        switch: true,
        formSelect: 1,
        date: "",
        datetime: "2020-05-20 14:44:00",
        yearMonth: "2020-11",
        time: "18:50"
      },
      data: {
        formSelect: [
          { id: 1, name: "广西" },
          { id: 2, name: "浙江" },
          { id: 3, name: "江苏" }
        ]
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, "");
    }
  }
};
</script>
<style lang="less" scoped></style>
