import Big from "big.js";

function NumberCalculation(num, fixed) {
  this.fixed = fixed;
  this.num = new Big(num);
}

NumberCalculation.prototype = {
  number: function(fixed) {
    fixed = fixed ? fixed : this.fixed;
    return fixed ? this.num.toFixed(2) : Number(this.num.toPrecision());
  },
  conversionType: function(item) {
    if (item instanceof NumberCalculation) {
      item = item.fixed
        ? Number(Number(item.num.toFixed(item.fixed)))
        : item.num;
    }
    return item;
  },
  //加法
  add: function(...arg) {
    var that = this;
    arg.forEach(function(y) {
      y = Number(that.conversionType(y));
      that.num = that.num.plus(y);
    });
    return this;
  },
  //减法
  minus: function(...arg) {
    var that = this;
    arg.forEach(function(y) {
      y = Number(that.conversionType(y));
      that.num = that.num.minus(y);
    });
    return this;
  },
  //乘法
  multiply: function(...arg) {
    var that = this;
    arg.forEach(function(y) {
      y = Number(that.conversionType(y));
      that.num = that.num.times(y);
    });
    return this;
  },
  divide: function(...arg) {
    var that = this;
    arg.forEach(function(y) {
      y = Number(that.conversionType(y));
      that.num = that.num.div(y);
    });
    return this;
  }
};

export default (num, fixed) => {
  return new NumberCalculation(num, fixed);
};
