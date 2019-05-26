import { Input, Component } from '@angular/core';

@Component({
  selector: 'cs-item',
  template: '<cti [key]="key" *ngIf="key"></cti> {{ text }} <ng-content></ng-content>',
  styleUrls: ['./item.tag.sass']
})
export class CsItemTag {
  @Input() key = '';
  @Input() text = '';
}
