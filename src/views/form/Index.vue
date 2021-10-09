<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          is-link
          :title="item.title"
          @click="routeTo(item)"
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Cell, CellGroup } from "vant";
export default {
  name: "FormIndex",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      list: [
        { title: "form 表单", to: "FormForm" },
        { title: "dataForm 数据配置表单", to: "FormDataForm" },
        { title: "input 输入框", to: "FormInput" },
        { title: "textarea 多行文本", to: "FormTextarea" },
        { title: "switch 开关", to: "FormSwitch" },
        { title: "select 下拉选择单选", to: "FormSelect" },
        { title: "multiple 下拉选择多选", to: "FormMultiple" },
        { title: "date 时间下拉选择", to: "FormDate" },
        { title: "calendar 日期范围", to: "FormCalendar" },
        { title: "searchList 搜索弹窗", to: "FormSearchList" },
        { title: "radio 单选", to: "FormRadio" },
        { title: "checkbox 复选", to: "FormCheckbox" },
        { title: "autoComplete 自动补全", to: "FormAutoComplete" },
        { title: "uploader 上传", to: "Uploader" },
        { title: "formUploader 表单上传", to: "FormUploader" }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    routeTo(item) {
      this.$router.push({ name: item.to });
    }
  }
};
</script>
<style lang="less" scoped></style>
