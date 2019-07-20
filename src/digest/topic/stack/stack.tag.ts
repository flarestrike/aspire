import { Input, Component } from '@angular/core';
import { StackCard as Model } from 'src/model';

@Component({
  selector: 'dt-stack',
  templateUrl: './stack.tag.html',
  styleUrls: ['./stack.tag.sass']
})
export class DtStackTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
