import { Input, Component } from '@angular/core';

@Component({
  selector: 'dt-info',
  templateUrl: './info.tag.html',
  styleUrls: ['./info.tag.sass']
})
export class DtInfoTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
}
