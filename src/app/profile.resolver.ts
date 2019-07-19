import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tap } from 'rxjs/operators';

import { DataSrc } from './data.src';
import { Profile } from 'src/model';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {
  constructor(
    private router: Router,
    private ds: DataSrc) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    const { hl: lang } = route.queryParams;
    return this.ds.load('app.profile', { id, lang }).pipe(tap((r: Profile) => {
      if (!r.id) {
        this.router.navigate(['/']);
      }
    }));
  }
}
