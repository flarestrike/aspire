import { Component } from '@angular/core';

import { Profile } from 'src/model';
import { ProfileLoader } from './profile.loader';
import { Stats } from './stats';

@Component({
  selector: 'st-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader, Stats]
})
export class HomeTag {
  profile: Profile;
  get st() {
    return this._st;
  }
  constructor(
    private _st: Stats,
    private pl: ProfileLoader) {
    pl.load().subscribe(p => {
      this.profile = p;
      _st.load(p);
    });
  }
}
