import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enrouted } from 'src/utils';

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
    private ar: ActivatedRoute,
    private er: Enrouted) {
    er.title(/\//, appTitle).subscribe(_ => {});
  }
}