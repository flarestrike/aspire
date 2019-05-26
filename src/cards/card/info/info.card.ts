import { Input, Component } from '@angular/core';
import { InfoCard as Model } from 'src/model';
import { Label } from 'src/cards/label';

@Component({
  selector: 'csc-info',
  templateUrl: './info.card.html',
  styleUrls: ['./info.card.sass']
})
export class InfoCard extends Model {
  @Input() set ctx(v) {
    Object.assign(this, v);
  }
  get lb() {
    return this._lb;
  }
  constructor(private _lb: Label) {
    super({ type: 'info' });
  }
}
