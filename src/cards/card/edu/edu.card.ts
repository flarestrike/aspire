import { Input, Component } from '@angular/core';
import { EduCard as Model } from 'src/cards/model';

@Component({
  selector: 'csc-edu',
  templateUrl: './edu.card.html',
  styleUrls: ['./edu.card.sass']
})
export class EduCard extends Model {
  @Input() set ctx(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
