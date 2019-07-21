import { Input, Component } from '@angular/core';
import { EduCard } from 'src/model';

import { use } from 'src/utils';
import { Base } from 'src/digest/topic/base';

export interface DtEduTag extends Base { _: 0; }

@Component({
  selector: 'dt-edu',
  templateUrl: './edu.tag.html',
  styleUrls: ['./edu.tag.sass']
})
export class DtEduTag extends EduCard {
  @use(Base) this;
  @Input() set vo(v) {
    this._vo = v;
    this.updateItems(this.relates.slice(0));
  }
  get vo() {
    return this._vo;
  }
  @Input() set data(v) {
    Object.assign(this, v);
    this.updateItems(this.relates.slice(0));
  }
  constructor() {
    super();
  }
}
