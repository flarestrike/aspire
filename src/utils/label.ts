import { BehaviorSubject, Subscription } from 'rxjs';

import { AppEvent } from 'src/model/app.event';
import { DataSrc } from 'src/app/data.src';

export class Label {
  keys = [];
  event: BehaviorSubject<AppEvent>;
  sub: Subscription;
  src: DataSrc;
  constructor() {}
  watch(Def) {
    if (this.sub) { return; }
    this.event = new BehaviorSubject<AppEvent>(new AppEvent('init'));
    this.sub = this.src.watch('label', { keys: this.keys, Def }).subscribe((r: any) => {
      Object.assign(this, r);
      this.event.next(new AppEvent('update'));
    });
  }
  destroy() {
    if (!this.sub) { return; }
    this.sub.unsubscribe();
    this.sub = null;
  }
}
