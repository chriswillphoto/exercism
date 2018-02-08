class Binary {
  constructor(num) {
    this.num = num;
    this.list = this.num.split('');
  }

  checker() {
    return this.list.some(i => {
      return i !== '1' && i !== '0';
    });
  }

  toDecimal() {
    if (this.checker()) {
      return 0;
    }
    const toDec = this.list.reverse().map((i, index) => {
      return parseInt(i) * 2 ** index;
    });

    const totaled = toDec.reduce((total, i) => {
      return total + parseInt(i);
    });

    if (totaled == NaN) {
      return 0;
    }

    return totaled;
  }
}

module.exports = Binary;
