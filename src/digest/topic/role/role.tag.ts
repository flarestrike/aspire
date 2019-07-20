import { Input, Component } from '@angular/core';
import { RoleCard as Model } from 'src/model';

@Component({
  selector: 'dt-role',
  templateUrl: './role.tag.html',
  styleUrls: ['./role.tag.sass']
})
export class DtRoleTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
    this.pks = Object.keys(v);
  }
  pks = [];
  constructor() {
    super();
  }
}
