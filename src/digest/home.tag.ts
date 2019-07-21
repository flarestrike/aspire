import { OnDestroy, HostBinding, Component } from '@angular/core';
import { IconSetManager } from '@chakray/tags';
import { Gtag } from '@chakray/utils/gtag';

import { ProfileLoader } from 'src/utils/profile.loader';
import { Profile, Card, DigestViewOptions as DVO } from 'src/model';
import { Label } from './label';
import { NavCtrl } from './nav.ctrl';

@Component({
  selector: 'd-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader, NavCtrl]
})
export class HomeTag implements OnDestroy {
  profile: Profile;
  pks = [];
  dvo: DVO;
  get lb() {
    return this._lb;
  }
  private sub;
  constructor(
    private nc: NavCtrl,
    private _lb: Label,
    private ism: IconSetManager,
    private gt: Gtag,
    private pl: ProfileLoader) {
    this.sub = pl.load().subscribe(r => {
      this.load(r);
      this.pks = Object.keys(r.profile);
    });
    // _lb.event.subscribe(_ => { });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  load({ profile: p, query: q }) {
      p.config.icons.forEach(c => {
        this.ism.inject(c);
      });
      p.eduList.sort((a, b) => a.duration.until < b.duration.until ? 1 : -1);
      p.roleList.sort((a, b) => a.duration.until < b.duration.until ? 1 : -1);
      p.stackList.sort((a, b) => (a.order || 0) < (b.order || 0) ? 1 : -1);
      this.profile = p;
      this.dvo = new DVO(p, q);
  }
}
