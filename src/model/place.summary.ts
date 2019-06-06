import { Dnt } from 'src/utils';
import { Place } from './place';
import { Period } from './period';

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

class Coord {
  get text() {
    return `(${this.lat}, ${this.lng})`;
  }
  constructor(private lat = 0, private lng = 0) { }
}

class ZoneInfo {
  name = '';
  center = new Coord();
  periodSum = 0;
  periodSumText = '';
  constructor(private lb, private places: Place[] = []) {
    this.name = places[0].zone;
    this.findCenter(places);
    this.sumPeriods(places);
  }
  private sumPeriods(list) {
    this.periodSum = list.reduce((r, p) => {
      return r + (p.period.delta || 0);
    }, 0);
    this.periodSumText = Dnt.periodStr(this.periodSum, this.lb.periods);
  }
  private findCenter(list) {
    const { lat: x, lng: y } = list.reduce((r, p) => {
      let { lat, lng } = r;
      const { lat: pa, lng: pb } = p;
      lat = lat + pa;
      lng = lng + pb;
      return { lat, lng };
    }, { lat: 0, lng: 0 });
    this.center = new Coord(x / list.length, y / list.length);
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
