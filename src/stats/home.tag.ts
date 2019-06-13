import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Label } from './label';
import { Profile } from 'src/model';
import { ProfileLoader } from 'src/utils/profile.loader';
import { Stats } from './stats';

@Component({
  selector: 'st-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader, Stats]
})
export class HomeTag implements OnDestroy {
  profile: Profile;
  sub: Subscription;
  get st() { return this._st; }
  get lb() { return this._lb; }
  constructor(
    private rt: Router,
    private _lb: Label,
    private _st: Stats,
    private pl: ProfileLoader) {
    this.sub = pl.load().subscribe(({ profile: p, query: q }) => {
      this.profile = p;
      _st.load(p, _lb);
    });
    _lb.event.subscribe(_ => {
      this.st.charts.forEach((c, i) => {
        const { name = '', desc = '' } = _lb.box[i + 1] || {};
        Object.assign(c, { name, desc });
      });
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  cevt(k, { name: n, data: d }) {
    // console.log(k, n, d);
  }
  evt(k, { name: n, data: d }) {
    const queryParams = { find: d.org || d.text };
    this.rt.navigate([this.profile.id, 'cards'], { queryParams, queryParamsHandling: 'merge' });
  }
}
