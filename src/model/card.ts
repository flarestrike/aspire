export class Card {
  type = 'base';
  set ctx(v) {
    Object.assign(this, v);
  }
  constructor(o) {
    Object.assign(this, o);
  }
}
