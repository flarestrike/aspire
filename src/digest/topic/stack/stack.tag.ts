import { Input, Component } from '@angular/core';

@Component({
  selector: 'dt-stack',
  templateUrl: './stack.tag.html',
  styleUrls: ['./stack.tag.sass']
})
export class DtStackTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
}
