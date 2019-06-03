import { HostBinding, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IconSetManager } from '@chakray/tags';

import { Profile } from 'src/model';
import { CardPlucker } from './card.plucker';

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass', './summary.sass'],
  providers: [CardPlucker]
})
export class HomeTag {
  list;
  profile: Profile;
  query = '';
  @HostBinding('class.summary') showSummary = false;
  constructor(
    private router: Router,
    private ism: IconSetManager,
    private plk: CardPlucker,
    private ar: ActivatedRoute) {
    ar.queryParams.subscribe(q => {
      this.query = q.find || '';
      this.showSummary = q.view === 'summary';
    });
    ar.root.firstChild.data.subscribe(({ profile: p }) => {
      this.profile = p;
      p.config.icons.forEach(c => {
        ism.inject(c);
      });
      this.list = plk.pluck(p);
    });
  }
  navEvt({ name, data }) {
    if (name !== 'find') { return; }
    this.router.navigate([], {
      queryParams: { find: data },
      queryParamsHandling: 'merge' });
  }
}
