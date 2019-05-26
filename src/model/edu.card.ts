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
  relates: Item[] = [];
  constructor(o?) {
    super({ type: 'edu' });
    Object.assign(this, o);
  }
}
