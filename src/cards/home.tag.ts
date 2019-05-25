import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/model';

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass']
})
export class HomeTag {
  profile: Profile;
  constructor(
    private ar: ActivatedRoute) {
    const { profile: p } = ar.root.firstChild.snapshot.data;
    this.profile = p;
  }
}
