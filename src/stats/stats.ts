import { Injectable } from '@angular/core';
import { PlaceMeta } from 'src/model';

@Injectable()
export class Stats {
  locs: PlaceMeta[];
  load(p) {
    this.locs = [
      ...this.locator(p.info),
      ...p.roleList.reduce((r, n) => [...r, ...this.locator(n)], []),
      ...p.eduList.reduce((r, n) => [...r, ...this.locator(n)], []),
    ];
  }
  locator(o) {
    const list = o.location ? [o.location] : o.locations;
    return list.map(i => {
      i.period = o.duration;
      const { org, text, logo } = o;
      Object.assign(i, { org, text, logo });
      return new PlaceMeta(i);
    });
  }
}
