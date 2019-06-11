import { Input, Component } from '@angular/core';

import { Label } from '../label';

const feats = {
  badge:     { icon: 'app.badge', text: 'Badge', base: '' },
  portfolio: { icon: 'app.detail', text: 'Portfolio', base: 'cards' },
  stats:     { icon: 'app.meter', text: 'Stats', base: 'stats' },
};

@Component({
  selector: 'an-footer',
  templateUrl: './footer.tag.html',
  styleUrls: ['./footer.tag.sass'],
  providers: [Label]
})
export class AnFooterTag {
  @Input() set id(v) {
    this.links = ['badge', 'portfolio', 'stats'].map(i => {
       const { text, base, icon } = feats[i];
       const link = ['/', v];
       if (base) {
         link.push(base);
       }
       return { text, link, icon };
    });
  }
  links = [];
  get lb() { return this._lb.footer; }
  constructor(private _lb: Label) {}
}
