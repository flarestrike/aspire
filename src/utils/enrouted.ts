import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class Enrouted {
  constructor(
    private r: Router,
    private t: Title) {
  }
  title(pat = /\//, t) {
    return this.r.events.pipe(
      filter(e => e instanceof NavigationEnd),
      filter((e: NavigationEnd) => pat.test(e.url)))
    .pipe(tap(e => {
      pat.test(e.url);
      this.t.setTitle(t);
    }));
  }
}
