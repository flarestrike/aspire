import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProfileResolver implements Resolve<Profile> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    const ln = 'en';
    const url = [env.dataHost, ln, id].join('/') + '.json';
    return this.http.get(url).pipe(map(r => {
      return new Profile(r);
    }));
  }
}
