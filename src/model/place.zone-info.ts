import { Dnt } from 'src/utils';
import { PlaceMeta } from './place.meta';

class Coord {
  get text() {
    return `(${this.lat}, ${this.lng})`;
  }
  constructor(private lat = 0, private lng = 0) { }
}

export class ZoneInfo {
  name = '';
  center = new Coord();
  periodSum = 0;
  periodSumText = '';
  constructor(private lb, private places: PlaceMeta[] = []) {
    this.name = places[0].zone;
    this.places = places.sort((a, b) => a.period.ds > b.period.ds ? -1 : 1);
    this.findCenter(places);
    this.sumPeriods(places);
    lb.event.subscribe(e => {
      if (e.name === 'update') {
        this.sumPeriods(places);
      }
    });
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


