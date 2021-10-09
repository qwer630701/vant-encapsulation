import headNavBarComponent from "./headNavBar.vue";

const headNavBar = {
  install: function(Vue) {
    Vue.component(headNavBarComponent.name, headNavBarComponent);
  }
};

export default headNavBar;
