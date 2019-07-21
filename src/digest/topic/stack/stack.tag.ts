import { Input, Component } from '@angular/core';
import { StackCard as Model, Item } from 'src/model';

import { use } from 'src/utils';
import { Base } from 'src/digest/topic/base';

export interface DtStackTag extends Base { _: 0; }

@Component({
  selector: 'dt-stack',
  templateUrl: './stack.tag.html',
  styleUrls: ['./stack.tag.sass']
})
export class DtStackTag extends Model {
  @use(Base) this;
  @Input() set vo(v) {
    this._vo = v;
    this.updateItems(this.items.slice(0));
  }
  get vo() {
    return this._vo;
  }
  @Input() set data(v) {
    Object.assign(this, v);
    this.updateItems(this.items.slice(0));
  }
  constructor() {
    super();
  }
}
