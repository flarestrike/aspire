import { InfoCard } from './info.card';

export class Profile {
  name = '';
  info: InfoCard;
  constructor(o) {
    Object.assign(this, o);
  }
}
