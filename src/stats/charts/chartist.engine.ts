import { Injectable } from '@angular/core';

import { colors } from './colors';
import { ChartEngine } from '@chakray/charts';
import * as charts from 'chartist';

@Injectable({ providedIn: 'root' })
export class ChartistEngine extends ChartEngine {
  name = 'chartist';
  opts = { colors };
  init(el, data, { type, ...opts }) {
    opts = this.copy(opts);
    const c = charts[type](el, data, opts);
    c.on('draw', ctx => {
      const fn = '_' + type + ctx.type;
      if (!(fn in this)) { return; }
      if (!opts.colors) { return; }
      this[fn](ctx, opts, data);
    });
    return c;
  }

  private _Pielabel(ctx, opts, data) {
    ctx.element._node.innerHTML = data.labels[ctx.index] + ' - ' + data.series[ctx.index];
  }
  private _Pieslice(ctx, opts) {
    const clr = opts.colors[ctx.index];
    ctx.element.attr({
      style: ['fill: ' + clr].join(';')
    });
  }
  private _Barbar(ctx, opts) {
    this._area(ctx, opts);
  }
  private _Linepoint(ctx, opts) {
    this._area(ctx, opts);
  }
  private _Lineline(ctx, opts) {
    this._area(ctx, opts);
  }
  private _area(ctx, opts) {
    const clr = opts.colors[ctx.seriesIndex];
    ctx.element.attr({
      style: ['stroke: ' + clr].join(';')
    });
  }
}

