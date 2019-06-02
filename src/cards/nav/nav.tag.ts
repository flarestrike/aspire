import { Input, Component } from '@angular/core';
import { ProfileConfig as Model } from 'src/model';

@Component({
  selector: 'cs-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass']
})
export class NavTag extends Model {
  @Input() set config(v) {
    this.icons = v.icons;
    this.langs = this.langs || v.langs;
    // Object.assign(this, v);
  }
}
