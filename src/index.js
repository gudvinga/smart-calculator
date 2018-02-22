class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.res = initialValue;
  }

  toString () {
    return this.res;
  }

  add(number) {
    this.res += number;
    return this;
  }
  
  subtract(number) {
    this.res += number;
    return this;
  }

  multiply(number) {
    this.res *= number;
    return this;
  }

  devide(number) {
    this.res /= number;
    return this;
  }

  pow(number) {
    this.res = Math.pow(this.res, number);
    return this;
  }
}

module.exports = SmartCalculator;
