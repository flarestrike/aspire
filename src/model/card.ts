export class Card {
  logo = '';
  color = '';
  type = 'base';
  set ctx(v) {
    Object.assign(this, v);
  }
  constructor(o) {
    Object.assign(this, o);
  }
}
