import { Input, Component } from '@angular/core';

@Component({
  selector: 'dt-places',
  templateUrl: './places.tag.html',
  styleUrls: ['./places.tag.sass']
})
export class DtPlacesTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
}
