/**
 * @description:验证
 * @data {Object} 需要验证的数据
 * @rule {Object} 验证规则
 * 例:
 * {a:{required:true,validator:Function},b:{required:true},c:{validator:Function}}
 * @return:
 */
export const validatePromise = (data, rule) => {
  return new Promise((reslove, reject) => {
    for (let i in data) {
      const keyRule = rule[i];
      if (keyRule) {
        if (keyRule.required) {
          data[i].replace(/\s*/g, "") == "" && reject(i);
        }
        if (keyRule.validator) {
          keyRule.validator(data[i]) != true && reject(i);
        }
      }
    }
    reslove();
  });
};
