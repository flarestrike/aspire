import { Input, Component } from '@angular/core';
// import { } from '../label';
import { Place } from 'src/model';

@Component({
  selector: 'st-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class PlacesTag {
  @Input() set locs(v) {
    this._locs = v.map(i => new Place(i));
  }
  get locs() {
    return this._locs;
  }
  _locs: Place[] = [];
  // constructor(private _lb: Label) { }
}
