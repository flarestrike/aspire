import { Input, Component, OnDestroy } from '@angular/core';
import { Label } from 'src/cards/label';

import { Period as Model } from 'src/model';

@Component({
  selector: 'dt-period',
  templateUrl: './period.tag.html',
  styleUrls: ['./period.tag.sass'],
  providers: [Label]
})
export class DtPeriodTag extends Model implements OnDestroy {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  sub;
  constructor(_lb: Label) {
    super();
    this.sub = _lb.event.subscribe(e => {
      if (e.name === 'update') {
        this.lb = _lb;
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
