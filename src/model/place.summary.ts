import { Place } from './place';
import { Period } from './period';
import { ZoneInfo } from './place.zone-info';

class Summary {
  [key: string]: Place[];
  constructor(list: Place[]) {
    list.forEach(p => {
      const a = this[p.zone] || [];
      a.push(p);
      this[p.zone] = a;
    });
  }
}

export class PlaceSummary {
  sum: Summary;
  zones: ZoneInfo[];
  constructor(lb, list: Place[] = []) {
    this.sum = new Summary(list);
    this.zones = Object.keys(this.sum).map(k => {
      return new ZoneInfo(lb, this.sum[k]);
    });
  }
}
