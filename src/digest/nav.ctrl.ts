import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavCtrl {
  constructor(private router: Router) {}
  evt({ type: t, data: d }) {
    this[t](d);
  }
  lang(d) {
    this.nav({ hl: d.key });
  }
  view({ modes, tags }) {
    const { all: a, positions: p, tags: t } = modes;
    let mode = (a || p && t) ? 'all' : null;
    mode = (!mode && p) ? 'pos' : mode;
    mode = (!mode && t) ? 'tags' : mode;
    tags = t ? undefined : tags.join(',');
    this.nav({ mode, tags });
  }
  private nav(n) {
    this.router.navigate([], { queryParams: n, queryParamsHandling: 'merge' });
  }
}
