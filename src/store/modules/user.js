import { ls } from "@/utils/cache";
import { USERINFO } from "@/store/mutation-types";
import { routeTo } from "@/utils/common";

const user = {
  state: {
    info: {},
    messageCount: 0
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_MESSAGECOUNT: (state, count) => {
      state.messageCount = count;
    }
  },
  actions: {
    setUserInfo({ commit }, info) {
      ls.set(USERINFO, info);
      commit("SET_INFO", info);
    },
    logout({ commit }) {
      commit("SET_INFO", {});
      ls.set(USERINFO, {});
      routeTo("Login");
    }
  }
};

export default user;
