import { Input, Component } from '@angular/core';

import { Period as Model } from 'src/model';

@Component({
  selector: 'cs-period',
  template: '<cti key="date"></cti> {{ text }} ({{ rangeText }})',
  styleUrls: ['./period.tag.sass']
})
export class CsPeriodTag extends Model {
  @Input() set amid(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
