import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppEvent } from 'src/model';

@Injectable({ providedIn: 'root' })
export class AppState {
  lang = 'en';
  event = new BehaviorSubject<AppEvent>(null);
  constructor() {}
  update(k, v, dv) {
    this[k] = v || dv;
    this.event.next({
      name: 'update',
      data: {
        key: k, value: this[k]
      }
    });
  }
}
