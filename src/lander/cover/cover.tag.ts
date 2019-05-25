import { Input, Component } from '@angular/core';
import { Cover } from 'src/lander/model';

@Component({
  selector: 'ld-cover',
  templateUrl: './cover.tag.html',
  styleUrls: ['./cover.tag.sass']
})
export class CoverTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor() {
  }
}
