import { Input, Component } from '@angular/core';
import { InfoCard as Model } from 'src/model';

@Component({
  selector: 'csc-info',
  templateUrl: './info.card.html',
  styleUrls: ['./info.card.sass']
})
export class InfoCard extends Model {
  @Input() set ctx(v) {
    Object.assign(this, v);
  }
  constructor() {
    super({ type: 'info' });
  }
}
