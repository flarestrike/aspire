import { Input, Component } from '@angular/core';

@Component({
  selector: 'dt-role',
  templateUrl: './role.tag.html',
  styleUrls: ['./role.tag.sass']
})
export class DtRoleTag {
  @Input() set data(v) {
    Object.assign(this, v);
    this.pks = Object.keys(v);
  }
  pks = [];
}
