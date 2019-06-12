import { Input, Component } from '@angular/core';

import { Label } from '../label';

@Component({
  selector: 'an-empty',
  templateUrl: './empty.tag.html',
  styleUrls: ['./empty.tag.sass'],
  providers: [Label]
})
export class AnEmptyTag {
  get lb() {
    return this._lb;
  }
  constructor(private _lb: Label) {}
}
