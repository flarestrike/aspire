import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  lang = 'en';
  constructor() {}
  update(k, v, dv) {
    this[k] = v || dv;
  }
}
