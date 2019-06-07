import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Profile } from 'src/model';
import { ProfileLoader } from './profile.loader';
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
  get st() {
    return this._st; }
  constructor(
    private rt: Router,
    private _st: Stats,
    private pl: ProfileLoader) {
    this.sub = pl.load().subscribe(p => {
      this.profile = p;
      _st.load(p);
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  evt(k, { name: n, data: d }) {
    const queryParams = { find: d.org || d.text };
    this.rt.navigate([this.profile.id, 'cards'], { queryParams, queryParamsHandling: 'merge' });
  }
}
