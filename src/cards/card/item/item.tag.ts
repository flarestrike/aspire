import { HostBinding, Input, Component } from '@angular/core';

import { Item as Model } from 'src/model';

@Component({
  selector: 'cs-item',
  template: `
    <cti [key]="icon" *ngIf="icon"></cti>
    <span>
    {{ text }} <ng-content></ng-content> </span>`,
  styleUrls: ['./item.tag.sass']
})
export class CsItemTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  @Input() icon = '';
  @HostBinding('class.i') get fi() {
    return this.font.indexOf('i') >= 0;
  }
  @HostBinding('class.b') get fb() {
    return this.font.indexOf('b') >= 0;
  }
  @HostBinding('class.u') get fu() {
    return this.font.indexOf('u') >= 0;
  }
  constructor() {
    super();
  }
}
