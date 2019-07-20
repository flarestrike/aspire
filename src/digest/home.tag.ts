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
  pks = [];
  tags = ['Development', 'Frontent', 'Backend', 'Research', 'Leadership', 'Management'];
  private sub;
  constructor(
    private ism: IconSetManager,
    private gt: Gtag,
    private pl: ProfileLoader,
    private router: Router) {
    this.sub = pl.load().subscribe(r => {
      this.load(r.profile);
      this.pks = Object.keys(r.profile);
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  load(p) {
      p.config.icons.forEach(c => {
        this.ism.inject(c);
      });
      this.profile = p;
      p.eduList.sort((a, b) => a.duration.since < b.duration.since ? 1 : -1);
      p.roleList.sort((a, b) => a.duration.since < b.duration.since ? 1 : -1);
      p.stackList.sort((a, b) => (a.order || 0) < (b.order || 0) ? 1 : -1);
  }
}
