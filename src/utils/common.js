import router from "../router/";
import $config from "@/config/baseConfig";

/**
 * @description: 路由跳转
 */
export const routeTo = (name, query = {}, params = {}) => {
  router.push({
    name: name,
    query: query,
    params: params
  });
};

/**
 * @description: 路由跳转
 */
export const routeReplace = (name, query = {}, params = {}) => {
  router.replace({
    name: name,
    query: query,
    params: params
  });
};

/**
 * @description: 获取URL参数
 */
export const getUrlParam = name => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURI(r[2]);
  return null;
};

/**
 * @description: 删除URL指定参数
 * @param {string} url url地址
 * @param {string} name 需要删除的参数名
 */
export const urlDeleteParam = (url, name) => {
  var urlArr = url.split("?");
  if (urlArr.length > 1 && urlArr[1].indexOf(name) > -1) {
    var query = urlArr[1];
    var obj = {};
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var param = JSON.stringify(obj)
      // eslint-disable-next-line no-useless-escape
      .replace(/[\"\{\}]/g, "")
      // eslint-disable-next-line no-useless-escape
      .replace(/\:/g, "=")
      // eslint-disable-next-line no-useless-escape
      .replace(/\,/g, "&");
    var urlte = urlArr[0];
    if (param) urlte += "?" + param;

    return urlte;
  } else {
    return url;
  }
};

/**
 * @description: 递归查询指定数据
 * @param {type}
 * @return:
 */
export const findData = (data, keys) => {
  keys = keys.split(".");
  for (let i = 0; i < keys.length; i++) {
    if (!keys[i]) return data;
    data = data[keys[i]];
  }
  return data;
};

/**
 * @description: tree转数组
 * @param {type}
 * @return:
 */
export const treeTransArray = (tree, key) => {
  return [].concat(
    ...tree.map(item => {
      if (item[key] && item[key].length) {
        return [].concat(item, ...treeTransArray(item[key]), key);
      } else {
        return item;
      }
    })
  );
};

/**
 * @description: 获取头像
 * @param {type}
 * @return:
 */
export const getAvatarUrl = url => {
  if (url) {
    return $config.fileUrl + url;
  } else {
    return "/images/avatar.jpg";
  }
};

export const hasClass = (elements, cName) => {
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

export const addClass = (elements, cName) => {
  if (!hasClass(elements, cName)) {
    elements.className += " " + cName;
  }
};

export const removeClass = (elements, cName) => {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(
      new RegExp("(\\s|^)" + cName + "(\\s|$)"),
      " "
    );
  }
};

export const checkPhone = phone => {
  if (!/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};

//防抖
export const debounce = (func, ms = 1000) => {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

//节流
export const throttle = (func, ms = 1000) => {
  let canRun = true;
  return function(...args) {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      func.apply(this, args);
      canRun = true;
    }, ms);
  };
};
