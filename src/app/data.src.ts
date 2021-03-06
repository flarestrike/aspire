import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, throwError } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { environment as env } from 'src/environments/environment';
import { Str } from 'src/utils';
import { LabelDef as CardLabelDef } from 'src/cards/model';
import { Profile } from 'src/model';

import { AppState } from './app.state';

@Injectable({ providedIn: 'root' })
export class DataSrc {
  constructor(
    private state: AppState,
    private http: HttpClient) { }
  load(k, opts) {
    const f = Str.camelize(k);
    if (!(f in this)) { return throwError('Dataset not found'); }
    return this[f](opts || {} as any);
  }
  watch(k, opts?) {
    const f = Str.camelize(k);
    if (!(f in this)) { return throwError('Dataset not found'); }
    return this.state.event.pipe(mergeMap((q: any) => {
      if (q && q.data && q.data.key !== 'lang') { return of(false); }
      return this[f](opts || {} as any);
    }));
  }
  appProfile({ id, lang }) {
    lang = lang || this.state.lang;
    const url = [env.dataHost, lang, id].join('/') + '.json';
    return this.http.get(url).pipe(catchError(e => {
      return of(new Profile({}));
    }), map(r => new Profile(r)));
  }
  label({ keys, lang, Def = (a?) => {} }) {
    lang = lang || this.state.lang;
    const url = [env.appAsset, lang, 'label', ...keys].join('/') + '.json';
    return this.http.get(url).pipe(map(r => {
      const d = new Def(r);
      d.lang = lang;
      return d;
    }), catchError(e => {
      // console.error('err', e);
      return of(new Def());
    }));
  }
}
