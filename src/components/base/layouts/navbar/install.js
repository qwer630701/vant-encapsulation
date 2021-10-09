import NavbarComponent from "./navbar.vue";

const Navbar = {
  install: function(Vue) {
    Vue.component(NavbarComponent.name, NavbarComponent);
  }
};

export default Navbar;
