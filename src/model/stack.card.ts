import { Card } from './card';
class Item {
  color = '';
  icon = '';
  text = '';
}

export class StackCard extends Card {
  text = '';
  items: Item[] = [];
  constructor(o?) {
    super({ type: 'stack' });
    Object.assign(this, o);
  }
}
