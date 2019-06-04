import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class ProfileLoader {
  constructor(
    private ar: ActivatedRoute) {
  }
  load() {
    const { ar } = this;
    return ar.queryParams.pipe(mergeMap(_ => {
      return ar.root.firstChild.data.pipe(map(({ profile: p }) => {
        return p;
      }));
    }));
  }
}
