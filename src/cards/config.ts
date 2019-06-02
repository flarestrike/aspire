import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardSrvMod } from './card-srv.mod';

@Injectable({ providedIn: CardSrvMod })
export class Config {
  view = 'detail';
  event = new EventEmitter();
  constructor(private ar: ActivatedRoute) {
    ar.queryParams.subscribe(q => {
      console.log('card srv', q);
      if (q.view) {
        this.view = q.view;
        this.event.emit({ name: 'view', data: q.view });
      }
    });
  }
}
