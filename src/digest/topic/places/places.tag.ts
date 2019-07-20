import { Input, Component } from '@angular/core';
import { Place as Model } from 'src/model';

@Component({
  selector: 'dt-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class DtPlacesTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
    this.text = `${this.city}, ${this.zone}`;
  }
  text = '';
  constructor() {
    super();
  }
}
