import { Injectable } from '@angular/core';

import { ChartEngine } from '@chakray/charts';
import { colors } from './colors';

import { RadarChart } from './radar';
import { scaleLinear } from 'd3-scale';
import { lineRadial, curveLinearClosed, curveCardinalClosed } from 'd3-shape';
import { schemeCategory10 as cat10 } from 'd3-scale-chromatic';
import { format } from 'd3-format';
import { select, selectAll } from 'd3-selection';
import { max, range } from 'd3-array';
import { transition } from 'd3-transition';

const d3 = {
  cat10, format, scaleLinear,
  lineRadial, curveLinearClosed, curveCardinalClosed,
  select, selectAll, range, max,
  transition,
};

@Injectable({ providedIn: 'root' })
export class D3Engine extends ChartEngine {
  name = 'd3';
  opts = {
    w: 240,
    h: 240,
    // maxValue: 100,
    levels: 5,
    roundStrokes: true,
  };
  init(el, data, { type, ...opts }) {
    opts = this.copy(opts);
    opts.color = (i) => colors[i];
    return RadarChart(d3, el, data.series, opts);
  }
}


