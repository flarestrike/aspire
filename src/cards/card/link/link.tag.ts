import { Input, Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Link as Model } from 'src/model';

@Component({
  selector: 'cs-link',
  template: `<a [href]='slink'><cti [key]='icon' *ngIf='icon'></cti>
    <span>
    {{ text }} <ng-content></ng-content> </span></a>`,
  styleUrls: ['./link.tag.sass']
})
export class CsLinkTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
    this.slink = this.safe(this.link);
  }
  @Input() icon = '';
  @Input() text = '';
  slink: SafeUrl;
  constructor(private ds: DomSanitizer) {
    super();
  }
  safe(url) {
    return this.ds.bypassSecurityTrustUrl(url);
  }
}
