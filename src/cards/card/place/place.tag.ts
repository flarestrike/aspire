import { Input, Component } from '@angular/core';

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
  constructor() {
    super();
  }
}
