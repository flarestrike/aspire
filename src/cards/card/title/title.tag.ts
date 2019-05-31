import { Input, Component } from '@angular/core';

@Component({
  selector: 'cs-title',
  template: `
    <cti [key]='key' *ngIf='key && !logo'></cti>
    <ct-lzmg [src]='logo' *ngIf='logo'></ct-lzmg>
    {{ text }}`,
  styleUrls: ['./title.tag.sass']
})
export class CsTitleTag {
  @Input() key = '';
  @Input() logo = '';
  @Input() text = '';
}
