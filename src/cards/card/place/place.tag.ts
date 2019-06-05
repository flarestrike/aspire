import { Input, Component } from '@angular/core';
import { Label } from 'src/cards/label';
import { Str } from 'src/utils';

import { Place as Model } from 'src/model';

@Component({
  selector: 'cs-place',
  template: `<cti key='pin'></cti> {{ text }}`,
  styleUrls: ['./place.tag.sass']
})
export class CsPlaceTag extends Model {
  @Input() set at(v) {
    Object.assign(this, v);
  }
  sub;
  constructor(private _lb: Label) {
    super();
    this.sub = _lb.event.subscribe(e => {
      if (e.action === 'update') {
        this.updateText();
      }
    });
  }
  updateText() {
    const { fmtPlace } = this._lb;
    const { city, zone } = this;
    this.text = Str.remap({ city, zone }, fmtPlace);
  }
}
