import { Card } from './card';
import { Item } from './item';
import { Location } from './location';

class Project {
  text = '';
  summary = '';
}
export class RoleCard extends Card {
  logo = '';
  text = '';
  location: Location;
  locations: Location[];
  duration = {};
  duties: Item[];
  projects: Project[];
  constructor(o?) {
    super({ type: 'role' });
    Object.assign(this, o);
    this.locations = this.locations || [this.location];
  }
}
