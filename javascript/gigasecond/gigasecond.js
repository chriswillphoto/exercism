class Gigasecond {
  constructor(date) {
    this.input = date;
    this.giga = 1000000000000;
  }

  date() {
    return new Date(this.input.valueOf() + this.giga);
  }
}

module.exports = Gigasecond;
