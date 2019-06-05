import { Input, Component, OnDestroy } from '@angular/core';
import { Label } from 'src/cards/label';

import { Period as Model } from 'src/model';

@Component({
  selector: 'cs-period',
  template: `<cti key='date'></cti>
   {{ text }}
   <div class='range'> ({{ rangeText }}) </div>`,
  styleUrls: ['./period.tag.sass']
})
export class CsPeriodTag extends Model implements OnDestroy {
  @Input() set amid(v) {
    Object.assign(this, v);
  }
  sub;
  constructor(_lb: Label) {
    super(_lb);
    this.sub = _lb.event.subscribe(e => {
      if (e.name === 'update') {
        this.updateText();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
