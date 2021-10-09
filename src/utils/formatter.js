import assign from "lodash/assign";

const defaultPriceFormatterOption = {
  digit: 2,
  negative: false
};
/**
 * @description: 金额格式化
 */
export const priceFormatter = (value, option) => {
  option = assign(defaultPriceFormatterOption, option);
  let { negative, digit } = option;
  let reg = /\d/;
  let radixPointNum = 0;
  let digitCount = 0;
  let existNumber = 0;
  value = value.replace(/\S/g, (x, i) => {
    if (
      (negative && x == "-" && i == 0) ||
      (existNumber && x == "." && ++radixPointNum && radixPointNum == 1) ||
      (reg.test(x) &&
        ++existNumber &&
        (radixPointNum == 0 || (++digitCount && digitCount <= digit)))
    ) {
      return x;
    }
    return "";
  });
  if (value.length > 2 && value[0] == 0 && value[1] != ".") {
    value = value.substring(1, value.length);
  }
  return value;
};
