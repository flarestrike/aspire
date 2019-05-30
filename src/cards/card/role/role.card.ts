import { Input, Component, ViewChild } from '@angular/core';
import { RoleCard as Model } from 'src/model';

import { CsSamplePopTag as PopTag, Poper } from '../sample-pop/sample-pop.tag';

@Component({
  selector: 'csc-role',
  templateUrl: './role.card.html',
  styleUrls: ['./role.card.sass']
})
export class RoleCard extends Model {
  @ViewChild(PopTag) pop: PopTag;
  poper: Poper;
  ip = 0;
  ips = 0;
  constructor() {
    super();
  }
  sampleEvt({ data: d }, ip, ips) {
    this.ip = ip;
    this.ips = ips;
    this.poper = d.tag;
    setTimeout(() => {
      this.open();
    }, 100);
  }
  popEvt({ name: n, data: d }) {
    const pj = this.projects[this.ip];
    const psl = pj.samples.length;
    if (d === 'next') {
      this.ips = (this.ips + 1) % psl;
      if (this.ips === 0) {
        this.ip = this.nextPi(this.ip);
      }
    } else {
      this.ips = (this.ips - 1 + psl) % psl;
      if (this.ips === (psl - 1)) {
        this.ip = this.prevPi(this.ip);
        this.ips = this.projects[this.ip].samples.length - 1;
      }
    }
    this.poper = this.projects[this.ip].samples[this.ips];
  }
  open() {
    this.pop.open().subscribe(d => {
      d.tag.close();
      setTimeout(() => {
        this.poper = null;
      }, 500);
    });
  }
  private prevPi(i) {
    const pl = this.projects.length;
    i = (i - 1 + pl) % pl;
    const p = this.projects[i];
    if (!p.samples || p.samples.length === 0) {
      i = this.prevPi(i);
    }
    return i;
  }
  private nextPi(i) {
    i = (i + 1) % this.projects.length;
    const p = this.projects[i];
    if (!p.samples || p.samples.length === 0) {
      i = this.nextPi(i);
    }
    return i;
  }
}
