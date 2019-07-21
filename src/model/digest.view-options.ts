const modeInx = { all: 0, pos: 1, tags: 2 };
export class DigestViewOptions {
  tags = [];
  ctags = [];
  langs = [];
  modes = this.setMode();
  ctagsInx = {};
  constructor(p?, q?) {
    this.modes = this.setMode();
    if (!p || !q) { return; }
    this.langs = p.config.langs;
    this.langs.forEach(i => i.on = i.key === q.hl);
    this.tags = p.tags || [];
    this.ctags = q.tags ? q.tags.split(',') : [];
    const mode = !(q.mode || q.tags) ? 'all' : q.mode;
    this.qmode(modeInx[mode]);
    if (mode === 'pos' || !mode) {
      this.ctags.forEach(i => this.modes[i] = true);
      this.updateInx();
    } else {
      this.updateCtags(this.modes.tags);
    }
    this.update();
  }
  show = {
    detail: false,
    position: false,
  };
  update() {
    const { all, positions, tags } = this.modes;
    this.show.detail = all || tags || this.ctags.length > 0;
  }
  private qmode(i) {
    this.modes = this.setMode(i === 0, i < 2, i === 0 || i === 2);
  }
  protected setMode(all = false, positions = false, tags = false) {
    return { all, positions, tags };
  }
  protected updateCtags(f) {
    this.tags.forEach(t => {
      this.modes[t] = f;
    });
    this.ctags = f ? this.tags.slice(0) : [];
    this.updateInx();
  }
  protected updateInx() {
    const ts = this.tags;
    this.modes.tags = ts.length > 0 && this.ctags.length === ts.length;
    this.ctagsInx = ts.reduce((r, i) => {
      const k = this.ctags.indexOf(i);
      r[i] = k > -1 ? `[${k}]` : '';
      return r;
    }, {});
  }
}
