import { Injectable } from '@angular/core';
import { PlaceMeta, Chart } from 'src/model';

@Injectable()
export class Stats {
  locs: PlaceMeta[];
  charts: Chart[];
  load(p) {
    this.locs = [
      // ...this.locator(p.info),
      ...p.roleList.reduce((r, n) => [...r, ...this.locator(n)], []),
      ...p.eduList.reduce((r, n) => [...r, ...this.locator(n)], []),
    ];
    this.charts = [
      new Chart('aaa', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [5, 2, 4, 2, 0],
          [1, 3, 4, 2, 8]
        ]
      }, {
        engine: 'chartist',
        type: 'Bar',
        stackBars: true,
      }),
      new Chart('bbb', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [
          [1, 3, 4, 2, 8]
        ]
      }, {
        engine: 'chartist',
        type: 'Bar'
      }),
      new Chart('ccc', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        series: [1, 3, 4, 2, 8]
      }, {
        engine: 'chartist',
        type: 'Pie'
      }),
      new Chart('ddd', {
        series: [[
          { axis: 'Battery Life', value: 22 },
          { axis: 'Brand', value: 28 },
          { axis: 'Contract Cost', value: 9 },
          { axis: 'Design And Quality', value: 17 },
          { axis: 'Have Internet Connectivity', value: 92 },
          { axis: 'Large Screen', value: 12 },
          { axis: 'Price Of Device', value: 21 },
          { axis: 'To Be A Smartphone', value: 50 }
        ]]
      }, { engine: 'd3' }),
    ];
  }
  locator(o) {
    const list = o.location ? [o.location] : o.locations;
    return list.map(i => {
      i.period = o.duration;
      const { org, text, logo } = o;
      Object.assign(i, { org, text, logo });
      return new PlaceMeta(i);
    });
  }
}
