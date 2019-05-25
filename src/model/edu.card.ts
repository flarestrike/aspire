import { Card } from './card';
import { Item } from './item';

export class EduCard extends Card {
  text = '';
  dept = '';
  subject = '';
  relates: Item[] = [];
  constructor(o?) {
    super({ type: 'edu' });
    Object.assign(this, o);
  }
}
