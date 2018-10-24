const innerLife = Symbol('life');

export default class Character {
  constructor(name) {
    this[innerLife] = 10;
    this.name = name;
  }
  get life() {
    return this[innerLife];
  }
  damage(damages) {
    this[innerLife] -= damages;
  }
  isLive() {
    return this.life > 0;
  }
}
