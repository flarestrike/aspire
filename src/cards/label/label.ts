import { Injectable } from '@angular/core';
import { LabelMod } from './label.mod';
import { LabelSrc } from './label.src';
import { LabelDef } from 'src/cards/model';

@Injectable({ providedIn: LabelMod })
export class Label extends LabelDef {
  constructor(private src: LabelSrc) {
    super();
    src.load('label.cards').subscribe((r: LabelDef) => {
      Object.assign(this, r);
    });
  }
}
