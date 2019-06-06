import { Place } from './place';
import { Period } from './period';

export class PlaceMeta extends Place {
  text = '';
  org = '';
  period = new Period();
  constructor(o?) {
    super();
    Object.assign(this, o);
    this.period = new Period(o.period);
  }
}
