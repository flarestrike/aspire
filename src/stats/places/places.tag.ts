import { Input, Component, Inject,
  ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Icon, marker, latLng, latLngBounds } from 'leaflet';
import { CmMapsTag as MapsTag } from '@chakray/maps';
import { Label } from '../label';
import { AppEvent, PlaceMeta, PlaceSummary, ZoneInfo } from 'src/model';

import { environment as env } from 'src/environments/environment';

Icon.Default.imagePath = [env.appAsset, ''].join('/');

@Component({
  selector: 'st-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class PlacesTag implements OnDestroy {
  @ViewChild(MapsTag) map: MapsTag;
  @Output() event = new EventEmitter();
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
  constructor(
    private _lb: Label) {
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
  place(p) {
    this.event.emit(new AppEvent('place', p));
  }
  mapEvt({ name: n, data: d }) {
    if (n !== 'init') { return; }
    this.ps.zones.forEach(z => {
      const m = marker(z.center).addTo(d.map);
      m.on('click', () => {
        this.select(z);
      });
    });
    const cts = this.ps.zones.map(z => z.center);
    // const wld = latLngBounds(latLng(-180, -90), latLng(180, 90));
    d.map.fitBounds(cts);
  }
}
