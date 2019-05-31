import { Card } from './card';

export class Link {
  icon = '';
  color: string;
  text = '';
  url = '';
}

export class InfoCard extends Card {
  title = '';
  name = '';
  email = '';
  location = '';
  era = '';
  avatar = '';
  links: Link[] = [];
  badges: Link[] = [];
  constructor(o?) {
    super({ type: 'info' });
    Object.assign(this, o);
  }
}
