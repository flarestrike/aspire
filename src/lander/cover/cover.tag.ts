import { Input, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Q from 'qrcode';

import { Label } from '../label';
import { Profile, InfoCard } from 'src/model';
import { AppHelper } from 'src/utils';

const qopts = {
  margin: 4,
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
  get profile() {
    return this._profile;
  }
  @Input() set profile(p) {
    this._profile = p;
    this.load(p);
  }
  links = [];
  mailto = '';
  url = '';
  lastRoleColor = '';
  get lb() {
    return this._lb;
  }
  private _profile: Profile;
  constructor(
    private _lb: Label,
    private dom: DomSanitizer) {
    super();
  }
  load(p) {
    const lr = p.roleList.sort((a, b) => a.duration.until < b.duration.until ? 1 : -1)[0] || {};
    this.lastRoleColor = lr.color;
    Object.assign(this, p.info);
    this.mailto = 'mailto:' + this.email;
    Q.toDataURL(location.href, qopts).then(u => {
      this.url = u;
    });
    this.badges.forEach(i => {
      i.safeUrl = this.dom.bypassSecurityTrustUrl(i.link);
    });
    this._lb.event.subscribe(e => {
      if (e.name !== 'update') { return; }
      this.links = AppHelper.links(this.lb, this.profile.id).slice(1);
    });
  }
}
