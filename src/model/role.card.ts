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
  // duties: Item[];
  projects: Project[];
  set duties(vs) {
    this._duties = vs.map(v => {
      const { icon, ...rst } = v;
      return new Item({ icon: icon || 'f_circle', ...rst });
    });
  }
  get duties() {
    return this._duties;
  }
  _duties: Item[] = [];
  constructor(o?) {
    super({ type: 'role' });
    Object.assign(this, o);
    this.locations = this.locations || [this.location];
  }
}
