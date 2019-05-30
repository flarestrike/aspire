import { Output, EventEmitter, Input, Component } from '@angular/core';
import { Sample as Model } from 'src/model';

@Component({
  selector: 'cs-sample',
  templateUrl: './sample.tag.html',
  styleUrls: ['./sample.tag.sass']
})
export class CsSampleTag extends Model {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  @Output() event = new EventEmitter();
  constructor() {
    super();
  }
  imgClick(event) {
    this.event.emit({
      name: 'thumbClick',
      data: { event, tag: this } });
  }
}
