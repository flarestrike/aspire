import { Input, Component } from '@angular/core';

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
