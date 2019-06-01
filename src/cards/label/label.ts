import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LabelMod } from './label.mod';
import { LabelSrc } from './label.src';
import { LabelDef } from 'src/cards/model';

@Injectable({ providedIn: LabelMod })
export class Label extends LabelDef {
  event = new EventEmitter();
  constructor(
    private ar: ActivatedRoute,
    private src: LabelSrc) {
    super();
    src.load('label.cards').subscribe((r: LabelDef) => {
      Object.assign(this, r);
    });
    src.watch('label.cards').subscribe((r: LabelDef) => {
      Object.assign(this, r);
      this.event.emit({ action: 'update' });
    });
  }
}
