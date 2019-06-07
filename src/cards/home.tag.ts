import { HostBinding, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IconSetManager } from '@chakray/tags';

import { Profile, Card } from 'src/model';
import { CardPlucker } from './card.plucker';

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass', './summary.sass'],
  providers: [CardPlucker]
})
export class HomeTag {
  list: Card[] = [];
  cards: Card[] = [];
  profile: Profile;
  query = '';
  loading = true;
  @HostBinding('class.summary') showSummary = false;
  constructor(
    private router: Router,
    private ism: IconSetManager,
    private plk: CardPlucker,
    private ar: ActivatedRoute) {
    ar.queryParams.subscribe(q => {
      this.query = q.find || '';
      this.showSummary = q.view === 'summary';
      // this.list = plk.find(this.cards, this.query);
      this.load();
    });
  }
  load() {
    this.ar.root.firstChild.data.subscribe(({ profile: p }) => {
      // if (!this.profile) {
      this.profile = p;
      p.config.icons.forEach(c => {
        this.ism.inject(c);
      });
      this.cards = this.plk.pluck(p);
      // }
      this.list = this.plk.find(this.cards, this.query);
      this.loading = false;
    });
  }
  navEvt({ name, data }) {
    if (name !== 'find') { return; }
    if (data === data.trim() + ' ') { return; }
    this.loading = true;
    this.router.navigate([], {
      queryParams: { find: data ? data.trim() : null },
      queryParamsHandling: 'merge'
    });
  }
}
