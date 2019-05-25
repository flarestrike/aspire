import { Input, Component } from '@angular/core';
import { RoleCard as Model } from 'src/model';

@Component({
  selector: 'csc-role',
  templateUrl: './role.card.html',
  styleUrls: ['./role.card.sass']
})
export class RoleCard extends Model {
  constructor() {
    super();
  }
}
