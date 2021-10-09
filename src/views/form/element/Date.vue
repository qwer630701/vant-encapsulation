<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formDatePicker label="年月日" v-model="form.date"></formDatePicker>
        {{ form.date }}
        <formDatePicker
          label="年月日(只读)"
          v-model="form.date"
          readonly
        ></formDatePicker>
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
    </div>
  </div>
</template>
<script>
import formDatePicker from "@/components/base/form/formDatePicker";
import { CellGroup, Button } from "vant";
export default {
  name: "FormDate",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formDatePicker
  },
  data() {
    return {
      form: {
        date: "2020-05-20",
        datetime: "2020-05-20 14:44:00",
        yearMonth: "2020-11",
        time: "18:50"
      }
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
