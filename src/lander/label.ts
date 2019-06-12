import { Injectable } from '@angular/core';

import { use, Label as Lbase } from 'src/utils';
import { DataSrc } from 'src/app/data.src';

import { LabelDef } from './model/label.def';

export interface Label extends Lbase { _: 0; }

@Injectable()
export class Label extends LabelDef {
  @use(Lbase) this;
  keys = ['lander'];
  constructor(
    private _src: DataSrc) {
    super();
    this.src = _src;
    this.watch(LabelDef);
  }
}
