import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  lang = 'en';
  event = new EventEmitter();
  constructor() {}
  update(k, v, dv) {
    this[k] = v || dv;
    this.event.emit({
      name: 'update',
      data: {
        key: k, value: this[k]
      }
    });
  }
}
