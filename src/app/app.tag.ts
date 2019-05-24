import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass']
})
export class AppTag {
  constructor(
    private r: Router,
    private t: Title) {
    r.events.pipe(
      filter(e => e instanceof NavigationEnd),
      filter((e: NavigationEnd) => e.url === '/'))
    .subscribe(e => {
      t.setTitle('Aspire - all the way about you');
    });
  }
}
