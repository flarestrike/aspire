import { Card } from './card';
import { Item } from './item';

export class StackCard extends Card {
  text = '';
  items: Item[] = [];
  constructor(o?) {
    super({ type: 'stack' });
    Object.assign(this, o);
  }
}
