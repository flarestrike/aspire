import { Card } from './card';

export class Link {
  icon = '';
  color: string;
  text = '';
  url = '';
}

export class InfoCard extends Card {
  lastRole = '';
  name = '';
  email = '';
  location = '';
  era = '';
  links: Link[] = [];
  constructor(o?) {
    super({ type: 'info' });
    Object.assign(this, o);
  }
}
