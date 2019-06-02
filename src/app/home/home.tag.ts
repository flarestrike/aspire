import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enrouted } from 'src/utils';
import { Profile } from 'src/model';

import { AppState } from '../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass'],
  providers: [Enrouted]
})
export class HomeTag {
  private k;
  constructor(
    private st: AppState,
    private ar: ActivatedRoute,
    private en: Enrouted) {
    ar.queryParams.subscribe(q => {
      if (q.hl) {
        st.update('lang', q.hl, 'en');
      }
    });
    ar.data.subscribe(d => {
      const { name } = d.profile;
      if (this.k) {
        this.k.unsubscribe();
      }
      this.k = en.title(/\/.+/, name).subscribe(_ => {});
    });
  }
}
