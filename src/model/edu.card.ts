import { Card } from './card';
import { Item } from './item';
import { Place } from './place';
import { Period } from './period';

export class EduCard extends Card {
  duration = new Period();
  location: Place;
  text = '';
  dept = '';
  subject = '';
  set relates(vs) {
    this._relates = vs.map(v => {
      const { icon, ...rst } = v;
      return new Item({ icon: icon || 'rect', ...rst });
    });
  }
  get relates() {
    return this._relates;
  }
  _relates: Item[] = [];
  constructor(o?) {
    super({ type: 'edu' });
    Object.assign(this, o);
  }
}
