import axios from "axios";
import store from "@/store/";
import { Notify, Dialog, Toast } from "vant";

//默认配置
const config = {
  // eslint-disable-next-line no-undef
  serverUrl: serverConfig.serverUrl, //请求地址
  responseBody: {
    //http请求响应体
    code: "code",
    data: "data",
    message: "message"
  },
  successCode: 0 // 响应体中 成功状态的 code
};

let modalOpen = false;
//请求状态错误处理
const err = error => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    let msg =
      data && data[config.responseBody.message]
        ? data[config.responseBody.message]
        : "";

    if (status === 401) {
      if (!modalOpen) {
        modalOpen = true;
        Dialog.confirm({
          title: "身份令牌已失效",
          message: "您可以取消以停留在此页，或重新登录",
          confirmButtonText: "重新登录"
        })
          .then(() => {
            modalOpen = false;
            store.dispatch("logout");
          })
          .catch(() => {
            modalOpen = false;
          });

        return false;
      }
    } else if (status === 403) {
      msg = "您没有权限";
    } else if (status === 404) {
      msg = "api请求接口不存在";
    } else {
      msg = "请求出错";
    }
    const message =
      data && data[config.responseBody.message]
        ? data[config.responseBody.message]
        : msg;
    Notify(message);
  }
};

//响应体Code异常处理
const abnormal = response => {
  const res = response.data;
  // 当设置 handleError 为 false 则不做异常处理
  if (
    response.config.headers &&
    response.config.headers.handleError === false
  ) {
    return false;
  }

  // const resultCode = res[config.responseBody.code];
  const description =
    res && res[config.responseBody.message]
      ? res[config.responseBody.message]
      : "请求失败";
  // let message = "abnormalCode：" + resultCode;
  // if (resultCode === 99) {
  //   message = "请求参数错误";
  // }
  Notify(description);
};

// 创建实例
const service = axios.create({
  baseURL: config.serverUrl,
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  serviceConfig => {
    if (serviceConfig.data.loading) {
      Toast.loading({
        duration: 0,
        message: "加载中...",
        forbidClick: true
      });
    }
    delete serviceConfig.data.loading;
    if (store.getters.userInfo && store.getters.userInfo.token) {
      serviceConfig.headers["Authorization"] =
        "brear " + store.getters.userInfo.token;
    }
    if (serviceConfig.method == "get")
      serviceConfig.params = serviceConfig.data;

    return serviceConfig;
  },
  error => {
    Toast.clear();
    err(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data;
    const resultCode = res[config.responseBody.code];
    if (
      resultCode === config.successCode ||
      response.request.responseURL.indexOf(config.serverUrl) < 0
    ) {
      return res; // 成功回调
    } else {
      abnormal(response);
      return Promise.reject(new Error(res.Message || "Error"));
    }
  },
  error => {
    Toast.clear();
    err(error);
    return Promise.reject(error);
  }
);

export default function(url, data = {}, type = "post", loading = true) {
  data.loading = loading;
  return service({
    url: url,
    method: type,
    data: data
  });
}
