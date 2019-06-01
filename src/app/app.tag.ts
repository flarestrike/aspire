import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private rt: Router,
    private st: AppState,
    private ar: ActivatedRoute,
    private er: Enrouted) {
    er.title(/\//, appTitle).subscribe(_ => {});
    ar.queryParams.subscribe(q => {
      if (q.hl) {
        st.update('lang', q.hl, 'en');
      } else {
        rt.navigate(location.pathname.split('/'), { queryParams: { hl: 'en' }});
      }
    });
  }
}
