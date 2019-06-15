import { Card } from './card';

export class ZoneCard extends Card {
  text = '';
  constructor(o?) {
    super({ type: 'zone' });
    Object.assign(this, o);
  }
}
