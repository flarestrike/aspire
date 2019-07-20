import { Input, Component } from '@angular/core';
import { InfoCard as Model } from 'src/model';

@Component({
  selector: 'dt-info',
  templateUrl: './info.tag.html',
  styleUrls: ['./info.tag.sass']
})
export class DtInfoTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
