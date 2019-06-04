import { Component } from '@angular/core';

import { ProfileLoader } from './profile.loader';
import { Profile } from 'src/model';

@Component({
  selector: 'ld-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader]
})
export class HomeTag {
  profile: Profile;
  constructor(
    private pl: ProfileLoader) {
    pl.load().subscribe(p => {
      this.profile = p;
    });
  }
}
