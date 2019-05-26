import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { DataSrc } from './data.src';
import { Profile } from 'src/model';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {
  constructor(private ds: DataSrc) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    const { hl: lang } = route.queryParams;
    return this.ds.load('app.profile', { id, lang }).pipe(map(r => {
      return new Profile(r);
    }));
  }
}
