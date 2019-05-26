import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconSetManager } from '@chakray/tags';

import { Profile } from 'src/model';
import { CardPlucker } from './card.plucker';

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [CardPlucker]
})
export class HomeTag {
  list;
  profile: Profile;
  constructor(
    private ism: IconSetManager,
    private plk: CardPlucker,
    private ar: ActivatedRoute) {
    const { profile: p } = ar.root.firstChild.snapshot.data;
    this.profile = p;
    p.config.icons.forEach(c => {
      ism.inject(c);
    });
    this.list = plk.pluck(p);
  }
}
