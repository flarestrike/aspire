import { Input, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Label } from '../label';
import { Place } from 'src/model';

@Component({
  selector: 'st-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class PlacesTag implements OnDestroy {
  @Input() set locs(v) {
    this._locs = v.map(i => new Place(i));
  }
  get locs() {
    return this._locs;
  }
  sub: Subscription;
  _locs: Place[] = [];
  get lb() {
    return this._lb;
  }
  constructor(private _lb: Label) {
    this.sub = _lb.event.subscribe(e => {
      if (e.name === 'update') {
      }
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
}
