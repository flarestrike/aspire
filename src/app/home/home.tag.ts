import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass']
})
export class HomeTag {
  constructor(
    private ar: ActivatedRoute,
    private r: Router,
    private t: Title) {
    r.events.pipe(
      filter(e => e instanceof NavigationEnd),
      filter((e: NavigationEnd) => e.url !== '/'))
    .subscribe(e => {
      t.setTitle('cool');
    });
    ar.data.subscribe(d => {
      console.log('profile', d.profile);
    });
  }
}
