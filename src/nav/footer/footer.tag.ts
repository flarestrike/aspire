import { Input, Component } from '@angular/core';

import { AppHelper } from 'src/utils';
import { Label } from '../label';

@Component({
  selector: 'an-footer',
  templateUrl: './footer.tag.html',
  styleUrls: ['./footer.tag.sass'],
  providers: [Label]
})
export class AnFooterTag {
  @Input() set id(v) {
    this.links = AppHelper.links(this.lb, v);
    this._id = v;
  }
  links = [];
  get lb() { return this._lb; }
  get lbf() { return this._lb.footer; }
  private _id = '';
  constructor(private _lb: Label) {
    _lb.event.subscribe(e => {
      if (e.name !== 'update') { return; }
      this.id = this._id;
    });
  }
}
