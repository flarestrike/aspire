import { Card } from './card';

export class EduCard extends Card {
  text = '';
  time = '';
  constructor(o?) {
    super({ type: 'edu' });
    Object.assign(this, o);
  }
}
