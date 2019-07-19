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
  private sub;
  constructor(
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
      this.profile = p;
      p.eduList.sort((a, b) => a.duration.since < b.duration.since ? 1 : -1);
      p.roleList.sort((a, b) => a.duration.since < b.duration.since ? 1 : -1);
      const ol = p.roleList.reduce((r, i) => {
        const rl = r[i.org] || [];
        rl.push(i);
        r[i.org] = rl;
        return r;
      }, {});
      p.orgList = Object.keys(ol).map(k => ({ text: k, roleList: ol[k] }));
      p.stackList.sort((a, b) => (a.order || 0) < (b.order || 0) ? 1 : -1);
  }
}
