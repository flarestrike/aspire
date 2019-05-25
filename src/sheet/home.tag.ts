import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ld-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass']
})
export class HomeTag {
  constructor(
    private ar: ActivatedRoute) {
    ar.url.subscribe(e => {
      console.log('sheet', ar.snapshot.data);
    });
  }
}
