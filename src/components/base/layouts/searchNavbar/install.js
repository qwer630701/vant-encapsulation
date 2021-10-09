import searchNavbarComponent from "./searchNavbar.vue";

const searchNavbar = {
  install: function(Vue) {
    Vue.component(searchNavbarComponent.name, searchNavbarComponent);
  }
};

export default searchNavbar;
