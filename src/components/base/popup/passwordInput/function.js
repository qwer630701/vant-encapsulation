import Vue from "vue";
import Component from "./memberPasswordVerify.vue";

const Constructor = Vue.extend(Component);

// const instances = [];
let seed = 1;

const memberPasswordVerify = options => {
  if (Vue.prototype.$isServer) return;

  const {
    //autoClose,
    ...rest
  } = options;
  const instance = new Constructor({
    propsData: {
      ...rest
    },
    data: {
      //autoClose: autoClose === undefined ? 3000 : autoClose
    }
  });

  const id = `memberPasswordVerify_${seed++}`;
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;

  //绑定 success 方法
  instance.vm.$on("success", selVal => {
    if (instance.success) {
      instance.success(selVal);
    }
  });
  //绑定 error 方法
  instance.vm.$on("error", selVal => {
    if (instance.error) {
      instance.error(selVal);
    }
  });
  instance.vm.$on("destroy", () => {
    document.body.removeChild(instance.vm.$el);
  });
  return instance.vm;
};

export default memberPasswordVerify;
