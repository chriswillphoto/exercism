class SpaceAge {
  constructor(age) {
    this.seconds = age;
    this.earth = this.seconds / 31557600;
  }

  onEarth() {
    return Math.round(this.earth * 100) / 100;
  }

  onMercury() {
    return Math.round(this.earth / 0.2408467 * 100) / 100;
  }

  onVenus() {
    return Math.round(this.earth / 0.61519726 * 100) / 100;
  }

  onMars() {
    return Math.round(this.earth / 1.8808158 * 100) / 100;
  }

  onJupiter() {
    return Math.round(this.earth / 11.862615 * 100) / 100;
  }

  onSaturn() {
    return Math.round(this.earth / 29.447498 * 100) / 100;
  }

  onUranus() {
    return Math.round(this.earth / 84.016846 * 100) / 100;
  }

  onNeptune() {
    return Math.round(this.earth / 164.79132 * 100) / 100;
  }
}

module.exports = SpaceAge;
