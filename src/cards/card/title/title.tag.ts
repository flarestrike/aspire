import { Input, Component } from '@angular/core';

@Component({
  selector: 'cs-title',
  template: '<cti [key]="key" *ngIf="key"></cti> {{ text }}',
  styleUrls: ['./title.tag.sass']
})
export class CsTitleTag {
  @Input() key = '';
  @Input() text = '';
}
