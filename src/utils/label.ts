import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppEvent } from 'src/model/app.event';
import { DataSrc } from 'src/app/data.src';

export class Label {
  key = '';
  event: EventEmitter<AppEvent>;
  sub: Subscription;
  src: DataSrc;
  constructor() {}
  watch() {
    this.event = new EventEmitter();
    this.sub = this.src.watch(this.key).subscribe((r: any) => {
      Object.assign(this, r);
      this.event.emit(new AppEvent('udpate'));
    });
  }
  destroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
  }
}
