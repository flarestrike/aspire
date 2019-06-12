import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gtag } from '@chakray/utils/gtag';

import { Enrouted } from 'src/utils';
import { AppState } from './app.state';

const appTitle = 'Aspire - all the way about you';
@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass'],
  providers: [Enrouted]
})
export class AppTag {
  get route() {
    return this.ar;
  }
  name = '';
  constructor(
    private gt: Gtag,
    private ar: ActivatedRoute,
    private er: Enrouted) {
    er.title(/\//, appTitle).subscribe(_ => {});
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
