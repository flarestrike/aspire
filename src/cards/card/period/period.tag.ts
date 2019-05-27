import { Input, Component } from '@angular/core';

import { Period as Model } from 'src/model';

@Component({
  selector: 'cs-period',
  template: `<cti key='date'></cti>
   {{ text }}
   <div class='range'> ({{ rangeText }}) </div>`,
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
