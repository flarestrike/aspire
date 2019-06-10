import { Injectable } from '@angular/core';
import { Profile, Project, PlaceMeta, Chart, Period } from 'src/model';

function emptyData() {
  return { labels: [], series: [] };
}

@Injectable()
export class Stats {
  locs: PlaceMeta[];
  charts: Chart[];
  projs: Project[];
  sum = {
    techs: [], top10Langs: emptyData(),
    pjTechs: emptyData(), timeOrgs: emptyData() };
  load(p, { box }) {
    this.locs = [
      // ...this.locator(p.info),
      ...p.roleList.reduce((r, n) => [...r, ...this.locator(n)], []),
      ...p.eduList.reduce((r, n) => [...r, ...this.locator(n)], []),
    ];
    this.projs = this.projector(p);
    this.sum.pjTechs = this.pjTechs();
    this.sum.techs = this.sumTechs(p.config.statTopics);
    this.sum.top10Langs = this.top10Langs();
    this.sum.timeOrgs = this.timeOrgs(p);
    const charts = [
      new Chart('', {
        ...this.sum.pjTechs
      }, { engine: 'chartist', type: 'Line', }),
      new Chart('', {
        series: [this.sum.techs]
      }, { engine: 'd3', w: 220, h: 180 , }),
      new Chart('', {
        ...this.sum.timeOrgs
      }, { engine: 'chartist', type: 'Pie', labelOffset: 0, labelDirection: 'explode', }),
      new Chart('', {
        ...this.sum.top10Langs
      }, { engine: 'chartist', type: 'Bar', }),
    ];
    this.charts = charts;
  }
  pjTechs() {
    const series = [this.projs.reduce((r, p) => {
      r.push(p.tech.length);
      return r;
    }, [])];
    const labels = Array.from({ length: series[0].length }, i => null);
    labels[0] = 'Early';
    labels[labels.length - 1] = 'Recent';
    return { series, labels };
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
  sumTechs(topics) {
    const m = this.projs.reduce((r, p) => {
      p.tech.forEach(t => {
        r[t.name] = (r[t.name] || 0) + (t.months || 0);
      });
      return r;
    }, {});
    topics = topics || Object.keys(m);
    return topics.map(k => {
      return { axis: k, value: m[k] };
    }); // .sort((a, b) => a.value < b.value ? 1 : -1 )
    // .slice(0, 20);
  }
  projector(p: Profile) {
    return p.roleList.sort((a, b) => a.duration.until > b.duration.until ? 1 : -1)
    .reduce((r, i) => {
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
