import { Card } from './card';

export class ExpCard extends Card {
  text = '';
  time = '';
  constructor(o?) {
    super({ type: 'exp' });
    Object.assign(this, o);
  }
}
