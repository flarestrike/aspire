import { Card } from './card';
import { Item } from './item';

export class StackCard extends Card {
  order = 0;
  text = '';
  set items(vs) {
    this._items = vs.map(v => {
      const { icon, ...rst } = v;
      return new Item({ icon: icon || 'rect', ...rst });
    });
  }
  get items() {
    return this._items;
  }
  _items: Item[] = [];
  constructor(o?) {
    super({ type: 'stack' });
    Object.assign(this, o);
  }
}
