import request from "@/utils/request";

export const url = {
  login: "/api/Account/Login",
  upload: "/common/fragment/upload"
};

export default class authApi {
  /**
   * 登录
   */
  /*
      static Login(params, type = "post") {
        return request(url.Login, params, type);
      }
  */
  static login(params) {
    return new Promise(reslove => {
      reslove({
        Data: {
          ...params,
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExMTAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiMiIsIm5iZiI6MTYwNjEyMTczNywiZXhwIjoxNjA2Mjk0NTM3LCJpYXQiOjE2MDYxMjE3Mzd9.jb1hPf40hb3k5iTsvtPdo8OCV_A2MxFLIeLSWA5bEvo"
        }
      });
    });
  }
  static savePassword(params) {
    return new Promise(reslove => {
      reslove(params);
    });
  }
  static upload(params) {
    return request(url.upload, params);
  }
}
