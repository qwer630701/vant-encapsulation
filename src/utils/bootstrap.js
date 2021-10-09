import store from "@/store/";
// import config from "@/config/baseConfig";
import { USERINFO } from "@/store/mutation-types";
import { ls } from "@/utils/cache";

export default function Initializer() {
  const userInfo = ls.get(USERINFO);
  store.commit("SET_INFO", userInfo);
}
