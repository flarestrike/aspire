import { Input, Component } from '@angular/core';

@Component({
  selector: 'cs-title',
  template: `
    <div class='spot'>
      <cti [key]='key' *ngIf='key && !logo'></cti>
      <ct-lzmg [src]='logo' *ngIf='logo'></ct-lzmg>
    </div>
    <div class='text'>
      <h2> {{ text }} </h2>
      <h4 *ngIf='sub'> {{ sub }} </h4>
    <div>
  `,
  styleUrls: ['./title.tag.sass']
})
export class CsTitleTag {
  @Input() key = '';
  @Input() logo = '';
  @Input() text = '';
  @Input() sub = '';
}
