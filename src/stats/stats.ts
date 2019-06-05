import { Injectable } from '@angular/core';
import { Place } from 'src/model';

@Injectable()
export class Stats {
  locs: Place[];
  load(p) {
    // org
    // name
    // time
    this.locs = [
      ...this.locator(p.info),
      ...p.roleList.reduce((r, n) => [...r, ...this.locator(n)], []),
      ...p.eduList.reduce((r, n) => [...r, ...this.locator(n)], []),
    ];
  }
  locator(o) {
    return o.location ? [o.location] : o.locations;
  }
}
