import { Output, EventEmitter, Input, Component } from '@angular/core';
import { DigestViewOptions as Model } from 'src/model';

@Component({
  selector: 'dt-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass']
})
export class DtNavTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  @Output() event = new EventEmitter();
  constructor() {
    super();
  }
  lang(i) {
    this.emit('lang', i);
  }
  all() {
    this.modes = this.setMode(true, true, true);
    this.updateCtags(true);
  }
  pos() {
    this.modes = this.setMode(false, true, false);
    this.updateCtags(false);
  }
  allTags() {
    const f = !this.modes.tags;
    this.modes = this.setMode(false, !f, f);
    this.updateCtags(f);
  }
  toggle(t) {
    const f = !this.modes[t];
    if (f) {
      this.ctags.push(t);
    } else {
      const i = this.ctags.indexOf(t);
      this.ctags.splice(i, 1);
    }
    this.modes.all = this.modes.positions && this.ctags.length === this.tags.length;
    this.modes[t] = f;
    this.updateInx();
  }
  protected updateInx() {
    super.updateInx();
    this.emit('view', { modes: this.modes, tags: this.ctags });
  }
  private emit(type, data) {
    this.event.emit({ type, data });
  }
}
