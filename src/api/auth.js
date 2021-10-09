// import request from "@/utils/request";

export const url = {
  login: "/api/Account/Login"
};

export default class authApi {
  static weChatAuth(params) {
    return new Promise(reslove => {
      reslove({
        Data: params.ReturnUrl + "?code=123"
      });
    });
  }
  static WeChatLogin(params) {
    return new Promise(reslove => {
      reslove({
        Data: {
          ...params,
          token: "123456789"
        }
      });
    });
  }
}
