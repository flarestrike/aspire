import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';
import { Gtag } from '@chakray/utils/gtag';

@Injectable()
export class ProfileLoader {
  constructor(
    private gt: Gtag,
    private ar: ActivatedRoute) {
  }
  load() {
    const { ar } = this;
    return ar.queryParams.pipe(mergeMap(q => {
      this.gt.event('screen_view', { app_name: 'SPA', screen_name: q.hl });
      return ar.root.firstChild.data.pipe(map(({ profile: p }) => {
        return { profile: p, query: q };
      }));
    }));
  }
}
