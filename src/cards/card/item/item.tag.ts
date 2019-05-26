import { Input, Component } from '@angular/core';

import { Item as Model } from 'src/model';

@Component({
  selector: 'cs-item',
  template: '<cti [key]="icon" *ngIf="icon"></cti> {{ text }} <ng-content></ng-content>',
  styleUrls: ['./item.tag.sass']
})
export class CsItemTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  @Input() icon = '';
  constructor() {
    super();
  }
}
