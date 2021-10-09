const getters = {
  menus: state => state.app.menus,
  addRouters: state => state.app.addRouters,
  userInfo: state => state.user.info,
  roomInfo: state => state.room.info
};

export default getters;
