import { OnDestroy, HostBinding, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconSetManager } from '@chakray/tags';
import { Gtag } from '@chakray/utils/gtag';

import { ProfileLoader } from 'src/utils/profile.loader';
import { Profile, Card } from 'src/model';
import { CardPlucker } from './card.plucker';

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass', './summary.sass'],
  providers: [CardPlucker, ProfileLoader]
})
export class HomeTag implements OnDestroy {
  list: Card[] = [];
  cards: Card[] = [];
  profile: Profile;
  query = '';
  loading = true;
  @HostBinding('class.summary') showSummary = false;
  private sub;
  constructor(
    private gt: Gtag,
    private pl: ProfileLoader,
    private router: Router,
    private ism: IconSetManager,
    private plk: CardPlucker) {
    this.loading = true;
    this.sub = pl.load().subscribe(r => {
      this.query = r.query.find || '';
      this.showSummary = r.query.view === 'summary';
      this.load(r.profile);
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
  load(p) {
      this.profile = p;
      p.config.icons.forEach(c => {
        this.ism.inject(c);
      });
      this.cards = this.plk.pluck(p);
      this.list = this.plk.find(this.cards, this.query);
      this.loading = false;
  }
  navEvt({ name, data }) {
    if (name !== 'find') { return; }
    if (data === data.trim() + ' ') { return; }
    this.gt.event('search', { search_term: data.trim() });
    this.loading = true;
    this.router.navigate([], {
      queryParams: { find: data ? data.trim() : null },
      queryParamsHandling: 'merge'
    });
  }
}
