import { Input, Component } from '@angular/core';

import { Label } from '../label';

const feats = {
  badge:     { icon: 'app.badge',  textId: 'badge', base: '' },
  portfolio: { icon: 'app.detail', textId: 'cards', base: 'cards' },
  stats:     { icon: 'app.meter',  textId: 'stats', base: 'stats' },
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
       const { textId, base, icon } = feats[i];
       const link = ['/', v];
       if (base) {
         link.push(base);
       }
       return { text: this.lb[textId], link, icon };
    });
    this._id = v;
  }
  links = [];
  get lb() { return this._lb; }
  get lbf() { return this._lb.footer; }
  private _id = '';
  constructor(private _lb: Label) {
    _lb.event.subscribe(e => {
      if (e.name !== 'update') { return; }
      this.id = this._id;
    });
  }
}
