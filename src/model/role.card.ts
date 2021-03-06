import { Card } from './card';
import { Item } from './item';
import { Place } from './place';
import { Project } from './project';

export class RoleCard extends Card {
  key = '';
  org = '';
  text = '';
  location: Place;
  locations: Place[];
  duration: { since: string, until: string } = { since: '', until: '' };
  set projects(vs) {
    vs = vs || [];
    this._projects = vs.map(v => new Project(v));
  }
  get projects() {
    return this._projects;
  }
  set duties(vs) {
    this._duties = vs.map(v => {
      const { icon, ...rst } = v;
      return new Item({ icon: icon || 'f_circle', ...rst });
    });
  }
  get duties() {
    return this._duties;
  }
  private _duties: Item[] = [];
  private _projects: Project[];
  constructor(o?) {
    super({ type: 'role' });
    Object.assign(this, o);
    this.locations = this.locations || [this.location];
  }
}
