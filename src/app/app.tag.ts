import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gtag } from '@chakray/utils/gtag';

import { Enrouted } from 'src/utils';
import { App, routes } from 'src/model';
import { environment as env } from 'src/environments/environment';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass'],
  providers: [Enrouted]
})
export class AppTag extends App {
  get route() {
    return this.ar;
  }
  routes = routes;
  name = '';
  constructor(
    private gt: Gtag,
    private ar: ActivatedRoute,
    private er: Enrouted) {
    super();
    this.brand = env.brand;
    this.slogan = env.slogan;
    er.title(/\//, this.brand).subscribe(_ => {});
    const value = Math.round(performance.now());
    gt.event('timing_complete', {
      name: 'load', value,
      event_category: 'JS Dependencies'
    });
  }
  evt(e) {
    this.name = e.target.value.toLowerCase();
  }
}
