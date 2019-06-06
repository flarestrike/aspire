import { Input, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Label } from '../label';
import { PlaceMeta, PlaceSummary, ZoneInfo } from 'src/model';

@Component({
  selector: 'st-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class PlacesTag implements OnDestroy {
  ps: PlaceSummary;
  @Input() set locs(v) {
    this._locs = v;
    this.ps = new PlaceSummary(this.lb, this._locs);
    this.zone = this.ps.zones[0];
  }
  get locs() {
    return this._locs;
  }
  sub: Subscription;
  zone: ZoneInfo;
  _locs: PlaceMeta[] = [];
  get lb() {
    return this._lb;
  }
  constructor(private _lb: Label) {
    this.sub = _lb.event.subscribe(e => {
      if (e.name === 'update') {
        this.locs.forEach(i => {
          i.period.lb = _lb;
        });
      }
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  select(z) {
    this.zone = z;
  }
}
