import { Injectable } from '@angular/core';
import { DataSrc } from 'src/app/data.src';

import { use, Label as Lbase } from 'src/utils';

import { LabelDef } from 'src/cards/model';

export interface Label extends Lbase { _: 0; }

@Injectable()
export class Label extends LabelDef {
  @use(Lbase) this;
  keys = ['cards'];
  constructor(
    private _src: DataSrc) {
    super();
    this.src = _src;
    this.watch(LabelDef);
  }
}
