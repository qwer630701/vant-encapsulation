<template>
  <div>
    <head-nav-bar :leftArrow="false" @click-right="ellipsis.visible = true">
      <template slot="right">
        <van-icon name="ellipsis" />
      </template>
    </head-nav-bar>
    <div class="workplace container">
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
    <van-action-sheet
      v-model="ellipsis.visible"
      :actions="ellipsis.data"
      @select="ellipsisSelect"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Dialog, ActionSheet, Cell, CellGroup } from "vant";
export default {
  name: "Index",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Dialog.Component.name]: Dialog.Component,
    [ActionSheet.name]: ActionSheet
  },
  data() {
    return {
      ellipsis: {
        visible: false,
        data: [{ name: "修改密码" }, { name: "退出登录" }]
      },
      list: [
        { title: "form 表单", to: "FormForm" },
        { title: "input 输入框", to: "FormInput" },
        { title: "textarea 多行文本", to: "FormTextarea" },
        { title: "switch 开关", to: "FormSwitch" },
        { title: "select 下拉选择单选", to: "FormSelect" },
        { title: "multiple 下拉选择多选", to: "FormMultiple" },
        { title: "date 时间下拉选择", to: "FormDate" },
        { title: "calendar 日期范围", to: "FormCalendar" },
        { title: "searchList 搜索弹窗", to: "FormSearchList" }
      ]
    };
  },
  created() {},
  computed: {
    ...mapState({
      user: state => state.user.info
    })
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    logout() {
      Dialog.confirm({
        title: "确认退出登陆吗？"
      })
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(() => {});
    },
    ellipsisSelect(action, index) {
      switch (index) {
        case 0:
          this.$router.push({ name: "ChangePwd" });
          break;
        case 1:
          this.logout();
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.workplace {
  font-size: 0.3rem;
  background: @mainColor;
  height: 100%;
}
</style>
