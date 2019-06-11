import { Input, Component } from '@angular/core';
import { InfoCard } from 'src/model';

@Component({
  selector: 'ld-cover',
  templateUrl: './cover.tag.html',
  styleUrls: ['./cover.tag.sass']
})
export class CoverTag extends InfoCard {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
