import { Dnt } from 'src/utils';

export class Period {
  set since(v) {
    this._since = v;
    this.ds = Dnt.ymd(v);
    this.updateText();
  }
  set until(v) {
    this._until = v;
    this.du = Dnt.ymd(v);
    this.updateText();
  }
  ds: Date;
  du: Date;
  text = '';
  rangeText = '';
  private _since = '';
  private _until = '';
  constructor(private _lb) {}
  updateText() {
    if (!this.ds || !this.du) { return; }
    const { months, date: { short: fmt }, periods } = this._lb;
    const opts = { months, fmt };
    this.text = `${Dnt.my(this.ds, opts)} - ${Dnt.my(this.du, opts)}`;
    this.rangeText = Dnt.period(this.ds, this.du, periods);
  }
}
