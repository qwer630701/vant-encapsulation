import { RouteView } from "@/layouts";
export default {
  path: "/form",
  name: "Form",
  redirect: "/form/index",
  component: RouteView,
  meta: {
    title: "表单组件",
    icon: "orders-o",
    footerNavShow: true
  },
  children: [
    {
      path: "/form/index",
      name: "FormIndex",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/Index.vue"),
      meta: {
        title: "表单组件",
        footerNavShow: true
      }
    },
    {
      path: "/form/form",
      name: "FormForm",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Form.vue"),
      meta: {
        title: "form 表单"
      }
    },
    {
      path: "/form/dataForm",
      name: "FormDataForm",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/DataForm.vue"),
      meta: {
        title: "dataForm 数据配置表单"
      }
    },
    {
      path: "/form/input",
      name: "FormInput",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Input.vue"),
      meta: {
        title: "input 输入框"
      }
    },
    {
      path: "/form/textarea",
      name: "FormTextarea",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Textarea.vue"),
      meta: {
        title: "textarea 多行文本"
      }
    },
    {
      path: "/form/select",
      name: "FormSelect",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Select.vue"),
      meta: {
        title: "select 下拉选择单选"
      }
    },
    {
      path: "/form/date",
      name: "FormDate",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Date.vue"),
      meta: {
        title: "date 时间下拉选择"
      }
    },
    {
      path: "/form/multiple",
      name: "FormMultiple",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Multiple.vue"),
      meta: {
        title: "multiple 下拉选择多选"
      }
    },
    {
      path: "/form/switch",
      name: "FormSwitch",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Switch.vue"),
      meta: {
        title: "switch 开关"
      }
    },
    {
      path: "/form/calendar",
      name: "FormCalendar",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Calendar.vue"),
      meta: {
        title: "calendar 日期范围"
      }
    },
    {
      path: "/form/searchList",
      name: "FormSearchList",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/SearchList.vue"),
      meta: {
        title: "searchList 搜索弹窗"
      }
    },
    {
      path: "/form/radio",
      name: "FormRadio",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Radio.vue"),
      meta: {
        title: "radio 单选"
      }
    },
    {
      path: "/form/checkBox",
      name: "FormCheckbox",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Checkbox.vue"),
      meta: {
        title: "checkbox 复选"
      }
    },
    {
      path: "/form/autoComplete",
      name: "FormAutoComplete",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/AutoComplete.vue"),
      meta: {
        title: "autoComplete 自动补全"
      }
    },
    {
      path: "/form/uploader",
      name: "FormAutoComplete",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/Uploader.vue"),
      meta: {
        title: "uploader 上传"
      }
    },
    {
      path: "/form/formUploader",
      name: "FormUploader",
      component: () =>
        import(/* webpackChunkName: "form" */ "@/views/form/element/FormUploader.vue"),
      meta: {
        title: "formUploader 表单上传"
      }
    }
  ]
};
