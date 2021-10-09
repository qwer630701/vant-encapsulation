<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div>
        <template v-for="(item, index) in list">
          <div
            v-if="item.visible"
            :key="index"
            class="item"
            :class="{ is_required: item.is_required }"
          >
            <div class="title">问题{{ item.no }}:{{ item.title }}</div>
            <van-checkbox-group
              v-model="data[index].value"
              v-if="item.option_type == 'checkbox'"
              @change="checkboxChange($event, item, index)"
            >
              <van-checkbox
                v-for="(dItem, dIndex) in item.option_detail"
                :key="dIndex"
                :name="dItem.id"
                shape="square"
                >{{ dItem.title }}</van-checkbox
              >
            </van-checkbox-group>
            <van-cell-group v-else-if="item.option_type == '11'">
              <van-field v-model="data[index].value" placeholder="请输入回答" />
            </van-cell-group>
            <van-radio-group
              v-else
              v-model="data[index].value"
              @change="radioChange($event, item, index)"
            >
              <van-radio
                v-for="(dItem, dIndex) in item.option_detail"
                :key="dIndex"
                :name="dItem.id"
                >{{ dItem.title }}</van-radio
              >
            </van-radio-group>
          </div>
        </template>
      </div>
      {{ data }}
    </div>
  </div>
</template>
<script>
import {
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  CellGroup,
  Field
} from "vant";
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "Index",
  components: {
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  },
  data() {
    return {
      a: [],
      list: [],
      data: [],
      form: {}
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      let list = [
        {
          id: 1,
          no: 1,
          title: "问题1",
          value: "",
          is_required: true,
          option_type: "1",
          option_detail: [
            {
              id: 11,
              title:
                "问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2问题2",
              goto: 2
            },
            {
              id: 12,
              title: "跳问题4",
              goto: 4,
              gotoIndex: 3,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 13,
              title: "跳问题3",
              goto: 3,
              gotoIndex: 2,
              relation: 0,
              relationIndex: -1
            }
          ]
        },
        {
          id: 2,
          no: 2,
          title: "问题2",
          value: "",
          is_required: false,
          option_type: "11"
        },
        {
          id: 3,
          no: 3,
          title: "问题3",
          value: [],
          is_required: false,
          option_type: "checkbox",
          option_detail: [
            {
              id: 31,
              title: "跳问题6",
              goto: 6,
              gotoIndex: 5,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 32,
              title: "跳问题6",
              goto: 6,
              gotoIndex: 5,
              relation: 0,
              relationIndex: -1
            }
          ]
        },
        {
          id: 4,
          no: 4,
          title: "问题4",
          value: [],
          option_type: "checkbox",
          option_detail: [
            {
              id: 41,
              title: "问题5",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 42,
              title: "关联问题5",
              goto: 0,
              gotoIndex: -1,
              relation: 5,
              relationIndex: 4
            }
          ]
        },
        {
          id: 5,
          no: 5,
          title: "问题5",
          value: [],
          option_type: "checkbox",
          option_detail: [
            {
              id: 41,
              title: "问题6",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 42,
              title: "问题8",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            }
          ]
        },
        {
          id: 6,
          no: 6,
          title: "问题6",
          value: [],
          option_type: "checkbox",
          option_detail: [
            {
              id: 41,
              title: "问题6",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 42,
              title: "问题8",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            }
          ]
        },
        {
          id: 7,
          no: 7,
          title: "问题7",
          value: [],
          option_type: "checkbox",
          option_detail: [
            {
              id: 41,
              title: "问题6",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            },
            {
              id: 42,
              title: "问题8",
              goto: 0,
              gotoIndex: -1,
              relation: 0,
              relationIndex: -1
            }
          ]
        }
      ];
      let data = [];
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        item.visible = item.isRelation ? false : true;
        data.push({
          id: item.id,
          value: item.option_type == "checkbox" ? [] : "",
          is_required: item.is_required,
          endIndex: -1,
          relation: -1
        });
      }

      this.list = list;
      this.defaultList = cloneDeep(list);
      this.data = cloneDeep(data);
    },
    checkboxChange(val, row, startIndex) {
      if (val.length > 0) {
        let endIndex = this.list.findIndex(
          p => row.goto != 0 && p.id == row.goto
        );
        if (startIndex >= 0 && endIndex > 0) {
          this.data[startIndex].endIndex = endIndex;
        } else {
          this.data[startIndex].endIndex = -1;
        }
      } else {
        this.data[startIndex].endIndex = -1;
      }
      this.listRender();
    },
    radioChange(val, item, startIndex) {
      let itemList = item.option_detail;
      let row = itemList.find(p => p.id == val);
      let dataRow = this.data[startIndex];
      if (row) {
        let endIndex = this.list.findIndex(
          p => row.goto != 0 && p.id == row.goto
        );
        if (startIndex >= 0 && endIndex > 0) {
          dataRow.endIndex = endIndex;
        } else {
          dataRow.endIndex = -1;
        }

        if (row.relation && row.relation > 0) {
          dataRow.relation = row.relation;
        } else {
          dataRow.relation = 0;
        }
        this.listRender();
      }
    },
    listRender() {
      let { data, defaultList } = this;
      let list = cloneDeep(defaultList);
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.relation > 0) {
          let index = list.findIndex(p => p.id == item.relation);
          if (index > -1) list[index].visible = true;
        }
      }
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.endIndex > -1) {
          for (let j = i + 1; j < item.endIndex; j++) {
            list[j].visible = false;
          }
        }
      }
      this.list = list;
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  padding: 10px;
  position: relative;
  &.required::after {
    content: "*";
    position: absolute;
    left: 8px;
    top: 22px;
    color: @red;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    padding: 5px 0 5px 10px;
  }
  .van-checkbox,
  .van-radio {
    align-items: flex-start;
    margin: 10px 0 15px 10px;
  }
}
</style>
