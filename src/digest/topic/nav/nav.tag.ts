import { Output, EventEmitter, Input, Component } from '@angular/core';

function setMode(all, positions, tags) {
  return { all, positions, tags };
}

function diff(a, b) {
  return a.filter(i => !b.includes(i));
}

@Component({
  selector: 'dt-nav',
  templateUrl: './nav.tag.html',
  styleUrls: ['./nav.tag.sass']
})
export class DtNavTag {
  @Output() event = new EventEmitter();
  @Input() tags = [];
  @Input() ctags = [];
  @Input() ntags = [];
  @Input() modes = setMode(false, false, false);
  ctagsInx = {};
  constructor() {
    this.pos();
  }
  all() {
    this.modes = setMode(true, true, true);
    this.updateCtags(true);
  }
  pos() {
    this.modes = setMode(false, true, false);
    this.updateCtags(false);
  }
  allTags() {
    const f = !this.modes.tags;
    this.modes = setMode(false, !f, f);
    this.updateCtags(f);
  }
  toggle(t) {
    const f = !this.modes[t];
    this.modes[t] = f;
    if (f) {
      this.ctags.push(t);
    } else {
      const i = this.ctags.indexOf(t);
      this.ctags.splice(i, 1);
    }
    this.updateInx();
  }
  private updateCtags(f) {
    this.tags.forEach(t => {
      this.modes[t] = f;
    });
    this.ctags = f ? this.tags.slice(0) : [];
    this.updateInx();
  }
  private updateInx() {
    const ts = this.tags;
    this.modes.tags = ts.length > 0 && this.ctags.length === ts.length;
    this.ctagsInx = ts.reduce((r, i) => {
      const k = this.ctags.indexOf(i);
      r[i] = k > -1 ? `[${k}]` : '';
      return r;
    }, {});
  }
  private emit(type) {
    this.event.emit({ type: 'nav', data: type });
  }
}
