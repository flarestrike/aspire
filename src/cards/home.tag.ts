import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/model';
import { ExpCard, Card, EduCard } from 'src/cards/model';

const list: Card[] = [
  new Card({ type: 'info' }),
  new Card({ type: 'stack', text: 'frontend' }),
  new Card({ type: 'stack', text: 'backend' }),
  new Card({ type: 'stack', text: 'design' }),
  new Card({ type: 'stack', text: 'project management' }),
  new ExpCard({ time: 'Apr', text: 'somethere' }),
  new ExpCard({ time: 'Jun', text: 'sjaifd ' }),
  new ExpCard({ time: 'Jan', text: 'asjdif ' }),
  new ExpCard({ time: 'Apr', text: 'adjif jsidf ' }),
  new EduCard({ time: 'May', text: 'asdfj aji' }),
  new EduCard({ time: 'Sep', text: 'asdfj aji' }),
];

@Component({
  selector: 'cs-home',
  templateUrl: './home.tag.html',
  styleUrls: ['./home.tag.sass']
})
export class HomeTag {
  list = list;
  profile: Profile;
  constructor(
    private ar: ActivatedRoute) {
    const { profile: p } = ar.root.firstChild.snapshot.data;
    this.profile = p;
  }
}
