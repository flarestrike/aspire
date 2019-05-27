import { Input, Component } from '@angular/core';
import { Label } from 'src/cards/label';

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
  constructor(_lb: Label) {
    super(_lb);
    _lb.event.subscribe(e => {
      if (e.action === 'update') {
        this.updateText();
      }
    });
  }
}
