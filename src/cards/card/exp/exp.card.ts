import { Input, Component } from '@angular/core';
import { ExpCard as Model } from 'src/cards/model';

@Component({
  selector: 'csc-exp',
  templateUrl: './exp.card.html',
  styleUrls: ['./exp.card.sass']
})
export class ExpCard extends Model {
  @Input() set ctx(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
