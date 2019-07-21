import { Item } from 'src/model';
import { DigestViewOptions as ViewOptions } from 'src/model';

export class Base {
  viewItems: Item[] = [];
  _vo = new ViewOptions();
  updateItems(vi) {
    if (this._vo.modes.all || this._vo.modes.tags) {
      this.viewItems = vi;
      return;
    }
    this.viewItems = this._vo.ctags.reduce((r, k) => {
      if (vi.length === 0) { return r; }
      const vc = vi.filter(l => (l.tags || []).includes(k));
      vi = vi.filter(l => !(l.tags || []).includes(k));
      return r.concat(vc);
    }, []);
  }
}
