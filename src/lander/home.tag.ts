import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconSetManager } from '@chakray/tags';

import { ProfileLoader } from 'src/utils/profile.loader';
import { Profile } from 'src/model';

@Component({
  selector: 'ld-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [ProfileLoader]
})
export class HomeTag implements OnDestroy {
  profile: Profile;
  private sub;
  constructor(
    private pl: ProfileLoader,
    private ism: IconSetManager) {
    this.sub = pl.load().subscribe(({ profile: p, query: q }) => {
      this.profile = p;
      p.config.icons.forEach(c => {
        this.ism.inject(c);
      });
    });
  }
  ngOnDestroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
    this.sub = null;
  }
}
