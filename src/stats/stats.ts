import { Injectable } from '@angular/core';
import { Profile, Project, PlaceMeta, Chart, Period } from 'src/model';

@Injectable()
export class Stats {
  locs: PlaceMeta[];
  charts: Chart[];
  projs: Project[];
  sum = {
    techs: [], top10Langs: { labels: [], series: [] },
    timeOrgs: { labels: [], series: [] } };
  load(p) {
    this.locs = [
      // ...this.locator(p.info),
      ...p.roleList.reduce((r, n) => [...r, ...this.locator(n)], []),
      ...p.eduList.reduce((r, n) => [...r, ...this.locator(n)], []),
    ];
    this.projs = this.projector(p);
    this.sum.techs = this.sumTechs();
    this.sum.top10Langs = this.top10Langs();
    this.sum.timeOrgs = this.timeOrgs(p);
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
      new Chart('Familiar technology grouped by used months and selected topics', {
        series: [this.sum.techs]
      }, { engine: 'd3' }),
      new Chart('Timespan per Organisations', {
        ...this.sum.timeOrgs
      }, {
        engine: 'chartist',
        type: 'Pie',
        labelOffset: 20,
        labelDirection: 'explode',
      }),
      new Chart('Top 10 languages ordered by used months', {
        ...this.sum.top10Langs
      }, {
        engine: 'chartist',
        type: 'Bar'
      }),
    ];
  }
  timeOrgs(p: Profile) {
    const pd = p.roleList.reduce((r, i) => {
      const d = new Period(i.duration);
      return [...r, { k: i.org, v: d.delta, c: i.color }];
    }, []).reduce((r, i) => {
      let { v, c } = r[i.k] || { v: 0, c: '' };
      v = v + i.v;
      c = i.c;
      r[i.k] = { v, c };
      return r;
    }, {});
    const colors = Object.values(pd).map((i: any) => i.c);
    const labels = Object.keys(pd);
    const series = Object.values(pd).map((i: any) => i.v);
    return { labels, series, colors };
  }
  top10Langs() {
    const m = this.projs.reduce((r, p) => {
      p.tech.forEach(t => {
        const k = t.lang;
        r[k] = (r[k] || 0) + (t.months || 0);
      });
      return r;
    }, {});
    const labels = Object.keys(m);
    const top10 = labels.map(k => {
      return { k, v: m[k] };
    }).sort((a, b) => a.v < b.v ? 1 : -1 )
      .slice(0, 10);
    return { labels: top10.map(k => k.k), series: [top10.map(k => k.v)] };
  }
  sumTechs() {
    const m = this.projs.reduce((r, p) => {
      p.tech.forEach(t => {
        r[t.name] = (r[t.name] || 0) + (t.months || 0);
      });
      return r;
    }, {});
    const topics = [
      'Angular', 'Knockout', 'Gmaps', 'Openseadragon',
      'Design Systems', 'SemanticUI',
      'Ruby On Rails', 'Auth', 'VIPS', 'Streaming',
      'Devops', 'Agile'] || Object.keys(m);
    return topics.map(k => {
      return { axis: k, value: m[k] };
    }); // .sort((a, b) => a.value < b.value ? 1 : -1 )
    // .slice(0, 20);
  }
  projector(p: Profile) {
    return p.roleList.reduce((r, i) => {
      return [...r, ...i.projects.map(a => new Project(a))];
    }, []);
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
