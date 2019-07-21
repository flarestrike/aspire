import { Input, Component } from '@angular/core';
import { RoleCard as Model } from 'src/model';

import { use } from 'src/utils';
import { Base } from 'src/digest/topic/base';

export interface DtRoleTag extends Base { _: 0; }

@Component({
  selector: 'dt-role',
  templateUrl: './role.tag.html',
  styleUrls: ['./role.tag.sass']
})
export class DtRoleTag extends Model {
  @use(Base) this;
  @Input() set vo(v) {
    this._vo = v;
    this.updateItems(this.duties.slice(0));
  }
  get vo() {
    return this._vo;
  }
  @Input() set data(v) {
    Object.assign(this, v);
    this.updateItems(this.duties.slice(0));
  }
  constructor() {
    super();
  }
}
