// import request from "@/utils/request";

export const url = {
  searchList: "/api/search/list"
};

var isError = false;
export default class demoApi {
  static searchList(params) {
    return new Promise((reslove, reject) => {
      var data = { data: { total: 100, datas: [] } };
      debugger;
      var size = params.pageSize * params.pageIndex;
      var max = 100 - size;
      for (let i = 0; i < params.pageSize; i++) {
        data.data.datas.push({
          name: "名称" + (size + i) + "" + params.name,
          code: size + i,
          id: size + i
        });
        if (--max == 0) break;
      }
      setTimeout(() => {
        if (max < 10 && !isError) {
          isError = !isError;
          reject();
        } else {
          reslove(data);
        }
      }, 2000);
    });
  }
  static empty() {
    return new Promise(reslove => {
      var data = { data: { total: 0, datas: [] } };
      setTimeout(() => {
        reslove(data);
      }, 2000);
    });
  }
}
