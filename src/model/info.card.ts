import { Card } from './card';
import { Link } from './link';
import { Place } from './place';

export class InfoCard extends Card {
  title = '';
  name = '';
  email = '';
  place: Place;
  set location(v) {
    this.place = new Place(v);
  }
  era = '';
  avatar = '';
  links: Link[] = [];
  badges: Link[] = [];
  constructor(o?) {
    super({ type: 'info' });
    Object.assign(this, o);
  }
}
