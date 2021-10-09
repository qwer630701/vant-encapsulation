<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <dataForm :option="option" ref="dataForm"></dataForm>
      <div class="button-fluid">
        <van-button block type="info" @click="change">
          修改数据
        </van-button>
        <van-button block type="info" @click="changeColumns">
          修改下拉数据
        </van-button>
        <van-button block type="info" @click="restore">
          还原
        </van-button>
        <van-button block type="info" @click="clear">
          清空
        </van-button>
      </div>
    </div>
  </div>
</template>
<script>
import demoApi from "@/api/demo";
import { Button } from "vant";
import dataForm from "@/components/base/form/dataForm";
export default {
  name: "DataForm",
  components: {
    [Button.name]: Button,
    dataForm
  },
  data() {
    let codeStr = "发送验证码";
    return {
      codeStr,
      option: {
        content: [
          {
            label: "名称",
            name: "name",
            required: true,
            validator: val => {
              return val.length == 1;
            },
            value: "11111111111"
          },
          {
            label: "验证码",
            name: "code",
            required: true,
            validator: val => {
              return val.length == 6;
            },
            scopedSlots: {
              button: () => {
                const codeStr = this.codeStr;
                const option = {
                  props: {
                    size: "small",
                    type: "primary",
                    disabled: codeStr != "发送验证码"
                  },
                  on: {
                    click: this.sendCode
                  },
                  style: { width: "100px" }
                };
                return <van-button {...option}>{this.codeStr}</van-button>;
              }
            },
            value: "11111111111"
          },
          {
            label: "金额",
            name: "price",
            type: "price",
            value: "11111111111"
          },
          {
            label: "正则过滤",
            name: "formatter",
            value: "",
            props: {
              placeholder: "格式化输入内容,删除数字",
              formatter: value => value.replace(/\d/g, "")
            }
          },
          {
            label: "密码",
            name: "password",
            type: "password",
            value: "123456"
          },
          {
            label: "备注",
            name: "remark",
            type: "textarea",
            value: "123456"
          },
          {
            label: "开关",
            name: "switch",
            type: "switch",
            value: true
          },
          {
            label: "年月日",
            name: "date",
            type: "date",
            value: "2020-05-20"
          },
          {
            label: "年月日",
            name: "datetime",
            type: "date",
            value: "2020-05-20 14:44:00",
            props: {
              type: "datetime"
            }
          },
          {
            label: "年月",
            name: "yearMonth",
            type: "date",
            value: "2020-11",
            props: {
              type: "year-month"
            }
          },
          {
            label: "时分",
            name: "time",
            type: "date",
            value: "18:50",
            props: {
              type: "time"
            }
          },
          {
            label: "下拉",
            name: "select",
            type: "select",
            value: "0",
            props: {
              columns: [
                { id: 1, name: "广西" },
                { id: 2, name: "浙江" },
                { id: 3, name: "江苏" }
              ]
            }
          },
          {
            label: "多选",
            name: "multiple",
            type: "multiple",
            value: [1],
            props: {
              columns: [
                { id: 1, name: "广西" },
                { id: 2, name: "浙江" },
                { id: 3, name: "江苏" }
              ]
            }
          },
          {
            label: "搜索",
            name: { id: "list", name: "listName" },
            type: "list",
            value: { id: 1, name: "我是描述" },
            props: {
              api: demoApi.searchList
            },
            on: {
              searchBeforeCallback: res => res,
              searchAfterCallback: res => res,
              submitBeforeCallback: res => res,
              submit: res => res
            }
          }
        ],
        submit: data => {
          console.log(data);
        }
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    change() {
      this.$refs.dataForm.setValue({
        name: "名称",
        password: "",
        switch: false,
        date: "2000-08-05",
        datetime: "2000-08-05 16:24:30",
        yearMonth: "2011-11",
        time: "06:50",
        select: 3,
        list: { id: 50, name: "改变成功" }
      });
    },
    changeColumns() {
      this.$refs.dataForm.setData({
        select: [
          { id: 11, name: "新建" },
          { id: 22, name: "建业" },
          { id: 33, name: "沈阳" },
          { id: 34, name: "长按" }
        ],
        multiple: [
          { id: 11, name: "新建" },
          { id: 22, name: "建业" },
          { id: 33, name: "沈阳" },
          { id: 34, name: "长按" }
        ]
      });
    },
    restore() {
      this.$refs.dataForm.restore();
    },
    clear() {
      this.$refs.dataForm.clear();
    },
    sendCode() {
      let time = 59;
      this.codeStr = time + "秒后再发送";
      let t = setInterval(() => {
        if (time == 1) {
          clearInterval(t);
          this.codeStr = "发送验证码";
        }
        time--;
        this.codeStr = time + "秒后再发送";
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped></style>
