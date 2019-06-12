import { Input, Component } from '@angular/core';
import { InfoCard } from 'src/model';

import * as Q from 'qrcode';

const qopts = {
  margin: 1,
  color: {
    dark: '#333',  // Blue dots
    light: '#0000' // Transparent background
  }
};

@Component({
  selector: 'ld-cover',
  templateUrl: './cover.tag.html',
  styleUrls: ['./cover.tag.sass']
})
export class CoverTag extends InfoCard {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  url = '';
  constructor() {
    super();
    Q.toDataURL('asfdasdf', qopts).then(u => {
      this.url = u;
    });
  }
}
