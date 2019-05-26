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
  updateText() {
    if (!this.ds || !this.du) { return; }
    this.text = `${Dnt.my(this.ds)} - ${Dnt.my(this.du)}`;
    const dys = (this.du.getTime() - this.ds.getTime()) / 86400_000;
    const yrs = Math.floor(dys / 365) + ' yrs';
    const mos = Math.round((dys % 365) / 30) + ' mos';
    this.rangeText = `${yrs}, ${mos}`;
  }
}
