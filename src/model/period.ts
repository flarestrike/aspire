import { Dnt } from 'src/utils';

export class PeriodLabel {
  months: string[] = [];
  date: any = { short: '' };
  periods: any = {};
}

export class Period {
  set since(v) {
    this._since = v;
    this.ds = Dnt.parse(v);
    this.update();
  }
  set until(v) {
    this._until = v;
    this.du = Dnt.parse(v);
    this.update();
  }
  ds: Date;
  du: Date;
  text = '';
  delta = 0;
  deltaText = '';
  set lb(v) {
    this._lb = v;
    this.update();
  }
  _lb = new PeriodLabel();
  private _since = '';
  private _until = '';
  constructor({ since = '20000101', until = '20000102' } = {}) {
    this.since = since;
    this.until = until;
  }
  update() {
    if (!this.ds || !this.du) { return; }
    this.delta = this.du.getTime() - this.ds.getTime();
    this.updateText();
  }
  updateText() {
    const { months, date: { short: fmt }, periods } = this._lb;
    const opts = { months, fmt };
    this.text = `${Dnt.str(this.ds, opts)} - ${Dnt.str(this.du, opts)}`;
    this.deltaText = Dnt.periodStr(this.delta, periods);
  }
}
