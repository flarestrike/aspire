import { Output, EventEmitter, Input, Component } from '@angular/core';
import { ProfileConfig as Model } from 'src/model';
import { Label } from 'src/cards/label';

@Component({
  selector: 'cs-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass']
})
export class NavTag extends Model {
  @Output() event = new EventEmitter();
  @Input() query = '';
  @Input() set config(v) {
    this.icons = v.icons;
    this.langs = this.langs || v.langs;
    // Object.assign(this, v);
  }
  get lb() {
    return this._lb;
  }
  constructor(private _lb: Label) {
    super();
  }
  find(e) {
    this.event.emit({ name: 'find', data: e.target.value });
  }
}
