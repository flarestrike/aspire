import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppEvent } from 'src/model/app.event';
import { DataSrc } from 'src/app/data.src';

export class Label {
  keys = [];
  event: EventEmitter<AppEvent>;
  sub: Subscription;
  src: DataSrc;
  constructor() {}
  watch() {
    this.event = new EventEmitter<AppEvent>();
    this.sub = this.src.watch('label', { keys: this.keys }).subscribe((r: any) => {
      Object.assign(this, r);
      this.event.emit(new AppEvent('udpate'));
    });
  }
  destroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
}
