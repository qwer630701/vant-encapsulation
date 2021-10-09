<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <formCalendar
          label="日期范围"
          required
          v-model="form.calendar"
          :maxDate="maxDate"
        ></formCalendar>
        {{ form.calendar }}
      </van-cell-group>
      <div class="button-fluid">
        <van-button type="primary" @click="clearValue" block>置空</van-button>
        <van-button type="primary" @click="changeValue" block>修改</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import formCalendar from "@/components/base/form/formCalendar";
import { CellGroup, Button } from "vant";
export default {
  name: "FormCalendar",
  components: {
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    formCalendar
  },
  data() {
    return {
      form: {
        calendar: ""
      },
      maxDate: null
    };
  },
  created() {
    this.maxDate = moment()
      .add(1, "M")
      .toDate();
  },
  computed: {},
  methods: {
    clearValue() {
      this.form.calendar = "";
    },
    changeValue() {
      this.form.calendar = ["2020-06-08", "2020-06-18"];
    }
  }
};
</script>
<style lang="less" scoped></style>
