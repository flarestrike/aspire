import { Input, Component } from '@angular/core';
import { InfoCard as Model } from 'src/model';
import { Label } from 'src/digest/label';

@Component({
  selector: 'dt-info',
  templateUrl: './info.tag.html',
  styleUrls: ['./info.tag.sass'],
})
export class DtInfoTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  get lb() {
    return this._lb.info;
  }
  constructor(private _lb: Label) {
    super();
  }
}
