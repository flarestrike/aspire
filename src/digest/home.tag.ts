import { OnDestroy, HostBinding, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconSetManager } from '@chakray/tags';
import { Gtag } from '@chakray/utils/gtag';

import { ProfileLoader } from 'src/utils/profile.loader';
import { Profile, Card } from 'src/model';

@Component({
  selector: 'd-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader]
})
export class HomeTag implements OnDestroy {
  profile: Profile;
  private sub;
  constructor(
    private gt: Gtag,
    private pl: ProfileLoader,
    private router: Router) {
    this.sub = pl.load().subscribe(r => {
      this.load(r.profile);
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  load(p) {
      this.profile = p;
  }
}
