import { Input, Component } from '@angular/core';
import { ZoneCard as Model } from 'src/model';

import { Label } from '../../label';

@Component({
  selector: 'csc-zone',
  template: '<h2> {{ text }} </h2>',
  styleUrls: ['./zone.card.sass']
})
export class ZoneCard extends Model {
  @Input() set ctx(v) {
    Object.assign(this, v);
  }
  // constructor() {
  constructor(private _lb: Label) {
    super();
    _lb.event.subscribe(e => {
      if (e.name !== 'update') { return; }
      this.text = _lb[this.text] || this.text;
    });
  }
}
