import { Input, Component } from '@angular/core';
import { EduCard } from 'src/model';

@Component({
  selector: 'dt-edu',
  templateUrl: './edu.tag.html',
  styleUrls: ['./edu.tag.sass']
})
export class DtEduTag extends EduCard {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor() {
    super();
  }
}
